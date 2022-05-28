import React from 'react'
import NavBar from '../components/NavBar'
import FlashyAPI from '../api/FlashyAPI'
import { Form, Button } from 'react-bootstrap'


const CreateFlashSetPage = () => {
  const handleFormSubmit = async (evt) => {
    evt.preventDefault()

    const data = {
      "title": evt.target[0].value,
    }

    FlashyAPI.createFlashset(data)

  }

  return (
    <div className="wrapper">
      <NavBar />
      <Form className='justify-content-center' style={{width: '25%', margin: '0 auto'}} onSubmit={handleFormSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>flashset name:</Form.Label>
          <Form.Control placeholder="enter a flashset name" />
          <Form.Text className="text-muted">
            make sure you use a creative name for your flashset name
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateFlashSetPage