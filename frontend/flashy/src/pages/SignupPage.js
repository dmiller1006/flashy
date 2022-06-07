import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Form, Button } from 'react-bootstrap'
import Accounts from '../api/Accounts'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        const username = e.target[0].value
        const password = e.target[1].value
        Accounts.signupUser(username, password)
        navigate('/login')
    }

    return (
        <div className="wrapper">
            <NavBar />
            <h1>signup</h1>
            <Form style={{ width: '25%', margin: '0 auto' }} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>username:</Form.Label>
                    <Form.Control placeholder="enter username" />
                    <Form.Text style={{ color: 'black' }}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>password:</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <div style={{ position: 'absolute', width: '100%', bottom: '0' }}>
                <Footer />
            </div>
        </div>
    )
}

export default SignupPage