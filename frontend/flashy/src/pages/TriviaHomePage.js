import React from 'react'
import NavBar from '../components/NavBar'
import { Button } from 'react-bootstrap'
import {  Link } from "react-router-dom"


const TriviaHomePage = () => {


    return (
        <div className="wrapper">
            <NavBar />
            <h1>welcome to trivy!</h1>
            <h2>a new way to trivia</h2>
            <h3>select a trivy:</h3>
            
            <ul>
                <li><Link to="/trivia/random"><Button className="triviaButton">random</Button></Link></li>
                <li><Button className="triviaButton">option 2</Button></li>
                <li><Button className="triviaButton">option 3</Button></li>
                <li><Button className="triviaButton">option 4</Button></li>
            </ul>
        </div>
    )
}

export default TriviaHomePage