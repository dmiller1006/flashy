import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'


const GamePageTemplate = () => {
    return (
        <div className="wrapper">
            <NavBar />
            <h1>playing trivia</h1>
            <h3>good luck!</h3>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default GamePageTemplate