import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import FlashyAPI from '../api/FlashyAPI'
import { Form, Button } from 'react-bootstrap'
import TriviaCard from '../components/TriviaCard'


const TriviaByCategoryPage = () => {
    const [questions, setQuestions] = useState(null)
    const [button, setButton] = useState(false)
    const [query, setQuery] = useState('https://the-trivia-api.com/api/questions?')


    const handleSubmitButton = (e) => {
        e.preventDefault()

        const getQuestions = async () => {
            const data = await FlashyAPI.getQueryQuestions(query)
            setQuestions(data)
            setButton(true)
        }

        getQuestions()

    }

    const dropdownSelect = (e) => {
        setQuery(query + e.target.value)
    }

    const renderCards = () => {
        if (!questions) {
            return 'no trivia has been loading...'
        }

        return questions.map((question, idx) => {
            return <TriviaCard key={idx} question={question} />
        })
    }

    const renderOptions = () => {
        let options = []
        for (let i = 1; i <= 50; i++) {
            let query = `&limit=${i}`
            options.push(<option key={i} value={query}>{i}</option>)
        }
        return options
    }


    return (
        <div className="wrapper">
            <NavBar />
            <h1>playing trivia</h1>
            <h3>good luck! choose some options!</h3>
            <Form.Select aria-label="Default select example" style={{ width: '30%', margin: '0 auto' }} onChange={(e) => dropdownSelect(e)} disabled={button}>
                <option>select difficulty</option>
                <option value="&difficulty=easy">easy</option>
                <option value="&difficulty=medium">medium</option>
                <option value="&difficulty=hard">hard</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" style={{ width: '30%', margin: '0 auto' }} onChange={(e) => dropdownSelect(e)} disabled={button}>
                <option>select category</option>
                <option value="&categories=arts_and_literature">arts & literature</option>
                <option value="&categories=film_and_tv">film & tv</option>
                <option value="&categories=food_and_drink">food & drink</option>
                <option value="&categories=general_knowledge">general knowledge</option>
                <option value="&categories=history">history</option>
                <option value="&categories=music">music</option>
                <option value="&categories=science">science</option>
                <option value="&categories=society_and_culture">society & culture</option>
                <option value="&categories=sport_and_leisure">sport & leisure</option>
                <option value="&categories=geography">geography</option>
            </Form.Select>
            <Form.Select aria-label="Default select example" style={{ width: '30%', margin: '0 auto' }} onChange={(e) => dropdownSelect(e)} disabled={button}>
                <option>number of questions</option>
                {renderOptions()}
            </Form.Select>
                <Button variant="primary" onClick={handleSubmitButton} disabled={button}>
                    get trivia!
                </Button>
                <Button variant="warning" type="button" onClick={() => window.location.reload()}>
                    reset trivia!
                </Button>
            <div className='parent'>
                {questions ? renderCards() : 'load some trivia!'}
            </div>
        </div>
    )
}

export default TriviaByCategoryPage