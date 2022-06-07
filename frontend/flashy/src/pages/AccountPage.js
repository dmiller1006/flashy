import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const AccountPage = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <h1>AccountPage</h1>
            <h3>You are logged in or you are not.</h3>
            <h4>Details about the account.</h4>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default AccountPage