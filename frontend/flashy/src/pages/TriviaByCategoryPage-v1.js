import React, { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import FlashyAPI from '../api/FlashyAPI'
import { Form, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import TriviaCard from '../components/TriviaCard'


const TriviaByCategoryPage = () => {
    const [questions, setQuestions] = useState(null)
    const [button, setButton] = useState(false)
    const [query, setQuery] = useState('')

    const categories = ['Arts & Literature', 'Film & TV', 'Food & Drink', 'General Knowledge', 'Geography', 'History', 'Music', 'Science', 'Society & Culture', 'Sport & Leisure']

    const categoryObj = {
        "Arts & Literature": [
            "arts",
            "literature",
            "arts_and_literature"
        ],
        "Film & TV": [
            "movies",
            "film",
            "film_and_tv"
        ],
        "Food & Drink": [
            "food_and_drink",
            "food",
            "drink"
        ],
        "General Knowledge": [
            "general_knowledge"
        ],
        "Geography": [
            "geography"
        ],
        "History": [
            "history"
        ],
        "Music": [
            "music"
        ],
        "Science": [
            "science"
        ],
        "Society & Culture": [
            "society_and_culture",
            "society",
            "culture"
        ],
        "Sport & Leisure": [
            "sport_and_leisure",
            "sports",
            "sport"
        ]
    }

    const renderDropDown = () => {
        return categories.map((category, idx) => {
            return <Dropdown.Item key={idx} onClick={() => handleSelect(category)}>{category}</Dropdown.Item>
        })
    }


    const handleSelect = (category) => {
        const queryCategory = categoryObj[category][0]

        const getQuestions = async () => {
            const data = await FlashyAPI.getCategoryQuestions(queryCategory)
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
            return <TriviaCard key={idx} question={question} />
        })
    }

    return (
        <div className="wrapper">
            <NavBar />
            <h1>playing trivia</h1>
            <h3>good luck!</h3>
            <DropdownButton id="dropdown-basic-button" title="select a category" style={{ margin: '25px'}}>
                {renderDropDown()}
            </DropdownButton>
            <DropdownButton id="dropdown-basic-button" title="difficulty" style={{ margin: '25px' }}>
                <Dropdown.Item>easy</Dropdown.Item>
                <Dropdown.Item>medium</Dropdown.Item>
                <Dropdown.Item>hard</Dropdown.Item>
            </DropdownButton>
            <Button variant="primary" type="submit">
                get trivia!
            </Button>

            <div className='parent'>
                {questions ? renderCards() : 'load some trivia!'}
            </div>
        </div>
    )
}

export default TriviaByCategoryPage