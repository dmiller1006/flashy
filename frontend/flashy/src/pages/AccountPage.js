import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AccountPage = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <h1>AccountPage</h1>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default AccountPage