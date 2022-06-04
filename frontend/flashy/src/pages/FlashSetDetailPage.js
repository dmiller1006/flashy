import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useParams } from "react-router-dom"
// import SingleCard from '../components/SingleCard'
import FlashyAPI from '../api/FlashyAPI'
import FlashCard from '../components/FlashCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditModal from '../components/EditModal'
import NewCardModal from '../components/NewCardModal'



const FlashSetDetailPage = () => {
    // state
    const [flashset, setFlashset] = useState(null)

    // router props
    const params = useParams()

    useEffect(() => {
      const getFlashset = async () => {
        const data = await FlashyAPI.fetchSingleFlashset(params.id)
        setFlashset(data)
      }
      getFlashset()
    }, [params])

    const renderFlashset = () => {
      if (!flashset) {
        return 'loading ...'
      }
      const cardsArray = FlashyAPI.shuffle(flashset['cards'])

      return cardsArray.map((card, idx) => {
        return <FlashCard key={idx} card={card} />
      })
    }

    const renderButtons = () => {
      if (!flashset) {
        return '... loading'
      }
  

      return<>
        <NewCardModal flashsetid={params.id} setFlashset={setFlashset}/>
        <EditModal flashsetid={params.id}/>
        <Link to={`/flashsets/${params.id}`}><Button variant="warning" style={{ marginTop: '30px' }} className="mx-5">shuffle/reset</Button></Link>
        {/* <Button variant="primary" style={{ marginTop: '30px' }} className="mx-5">add card</Button> */}
        <Link to={`delete`}><Button variant="danger" style={{ marginTop: '30px' }} className="mx-5">delete flashset</Button></Link>
      </>
    }

  return (
    <div className="wrapper">
        <NavBar />
      <h1>{flashset && flashset.title}</h1>
      <div>{renderButtons()}</div>
        <div className="parent">
          {renderFlashset()}
        </div>
      <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
        <Footer />
      </div>
    </div>
  )
}

export default FlashSetDetailPage