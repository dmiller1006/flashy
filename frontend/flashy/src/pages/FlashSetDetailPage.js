import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from "react-router-dom"
// import SingleCard from '../components/SingleCard'
import FlashyAPI from '../api/FlashyAPI'
import FlashCard from '../components/FlashCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import EditModal from '../components/EditModal'



const FlashSetDetailPage = () => {
    // state
    const [flashset, setFlashset] = useState(null)
    const [newName, setNewName] = useState(null)
    console.log('newName', newName)


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
      return flashset['cards'].map((card, idx) => {
        return <FlashCard key={idx} card={card} />
      })
    }

    const renderButtons = () => {
      if (!flashset) {
        return '... loading'
      }

      return<>
        <EditModal setNewName={setNewName}/>
        <Button variant="primary" style={{ marginTop: '30px' }} className="mx-5">add card</Button>
        <Link to={`delete`}><Button variant="danger" style={{ marginTop: '30px' }} className="mx-5">delete flashset</Button></Link>
      </>
    }

  return (
    <div>
        <NavBar />
      <h1>{flashset && flashset.title}</h1>
      <div>{renderButtons()}</div>
        <div className="parent">
          {renderFlashset()}
        </div>
    </div>
  )
}

export default FlashSetDetailPage