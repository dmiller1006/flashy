import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import FlashyAPI from '../api/FlashyAPI'
import { Form, Button } from 'react-bootstrap'
import TrueFalseCard from '../components/TrueFalseCard'


const TrueFalsePage = () => {
    const [questions, setQuestions] = useState(null)
    const [button, setButton] = useState(false)

    const handleSubmit = (evt) => {
        evt.preventDefault()

        const userInput = evt.target.elements[0].value

        const getQuestions = async () => {
            const data = await FlashyAPI.getTrueFalse(userInput)
            setQuestions(data)
            setButton(true)
        }
        getQuestions()
    }

    const renderCards = () => {
        if (!questions) {
            return 'no trivia has been loading...'
        }

        return questions.map((question, idx) => {
            return <TrueFalseCard key={idx} question={question['question']} answer={question['correct_answer']}/>
        })
    }

    return (
        <div className="wrapper" onSubmit={handleSubmit}>
            <NavBar />
            <h1>playing trivia</h1>
            <h3>good luck with the true / false set!</h3>
            <Form className="triviaForm">
                <Form.Group className="mb-3" controlId="formBasicInput">
                    <Form.Label>how many questions?</Form.Label>
                    <Form.Control placeholder="enter a number 1-50" disabled={button} />
                </Form.Group>
                <Button disabled={button} variant="primary" type="submit">
                    get trivia!
                </Button>
            </Form>
            <div className='parent'>
                {questions ? renderCards() : 'load some trivia!'}
            </div>
        </div>
    )
}

export default TrueFalsePage