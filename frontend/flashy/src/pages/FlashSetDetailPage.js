import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import { useParams } from "react-router-dom"
// import SingleCard from '../components/SingleCard'
import FlashyAPI from '../api/FlashyAPI'
import FlashSet from '../components/FlashSet'



const FlashSetDetailPage = () => {
    // state
    const [ flashset, setFlashset] = useState(null)
    // router props
    const params = useParams()

    useEffect(() => {
      const getFlashsets = async () => {
        const data = await FlashyAPI.fetchSingleFlashset(params.id)
        setFlashset(data)
      }
      getFlashsets()
    }, [params])

    const renderFlashset = () => {
      if (!flashset) {
        return 'loading ...'
      }
      return <FlashSet flashData={flashset}/>
    }

  return (
    <div>
        <NavBar />
          <h3>{renderFlashset()}</h3>
    </div>
  )
}

export default FlashSetDetailPage