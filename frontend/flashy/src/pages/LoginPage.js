import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Form, Button, Alert } from 'react-bootstrap'
import Accounts from '../api/Accounts'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginPage = ({isSignedIn, setSignedIn}) => {
    const [loginMsg, setLoginMsg] = useState(null)

    const navigate = useNavigate()
    


    const loginMsgFunc = () => {
        if (loginMsg != null) {
            return <Alert key='danger' variant='danger' style={{ width: '50%', margin: '0 auto' }}>there was a sign-in error, please try again..</Alert>
        }
    }

    useEffect(() => {
        const handleLoad = async () => {
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            setSignedIn(false)
        }
        handleLoad()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = e.target[0].value
        const password = e.target[1].value
        const data = await Accounts.loginUser(username, password)
        if (data['token']) {
            setSignedIn(true)
            sessionStorage.setItem('token', data['token'])
            sessionStorage.setItem('username', username)
            navigate('/home/')
            
        } else {
            setLoginMsg('there is an issue with your login, please try again')
        }
    }

return (
    <div className="wrapper">
            <NavBar />
            <h1>login</h1>
            <div>
                {loginMsgFunc()}
            </div>
        <Form style={{ width: '25%', margin: '0 auto' }} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username:</Form.Label>
                <Form.Control placeholder="enter username" />
                <Form.Text style={{ color: 'black'}}>
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

export default LoginPage