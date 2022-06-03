import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import FlashyAPI from '../api/FlashyAPI'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FlashSetDeleteConfirm = () => {
    // state
    const [flashset, setFlashset] = useState(null)
    // router props
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const getFlashset = async () => {
            const data = await FlashyAPI.fetchSingleFlashset(params.id)
            setFlashset(data)
        }
        getFlashset()
    }, [params])

    const handleConfirmDelete = async () => {
        let data = await FlashyAPI.deleteFlashset(flashset)
        console.log(data)
        navigate('/flashsets')

    }

    const showFlashset = () => {
        if (!flashset) {
            return '... loading'
        }
        return <>
        <h3>flashset to be deleted:<br />{flashset.title}</h3>

            <Button variant="danger" className="mx-5" onClick={handleConfirmDelete}>confirm delete</Button>
            <Link to={'/flashsets'}><Button variant="secondary" className="mx-5">cancel delete</Button></Link>
        </>
    }

  return (
    <div className="wrapper">
    <NavBar />
    <h2>Are you sure you want to permanently delete the following flashset?</h2>

    {showFlashset()}
        <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
            <Footer />
        </div>
    </div>
  )
}

export default FlashSetDeleteConfirm