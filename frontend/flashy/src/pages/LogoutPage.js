import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'


const LogoutPage = ({ isSignedIn, setSignedIn }) => {
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('username')
        navigate('/login')
    }, [])


    return (
        <div className="wrapper">
            <NavBar />
            <h1>you have been logged out</h1>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default LogoutPage