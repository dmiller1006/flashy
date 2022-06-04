import React from 'react'
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap'
import {  Link } from "react-router-dom"
import Footer from '../components/Footer'


const TriviaHomePage = () => {


    return (
        <div className="wrapper">
            <NavBar />
            <h1>welcome to trivy!</h1>
            <h2>a new way to trivia</h2>
            <h3>select a trivy:</h3>
            
            <ul>
                <li><Link to="/trivia/random"><Button className="triviaButton">random</Button></Link></li>
                <li><Link to="/trivia/bycategory"><Button className="triviaButton">by category</Button></Link></li>
            </ul>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default TriviaHomePage