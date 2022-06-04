import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import FlashyAPI from '../api/FlashyAPI'


const EditModal = ({flashsetid}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault()
        const newTitle = document.getElementById('editTitleForm.Input1').value
        FlashyAPI.editFlashsetTitle(flashsetid, newTitle)
        console.log('newTitle:', newTitle)
        handleClose()
        window.location.reload()
    }


    return (
        <>
            <Button variant="primary" style={{ marginTop: '30px' }} className="mx-5" onClick={handleShow}>
                edit title
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>change flashset title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="editTitleForm.Input1">
                            <Form.Label>new flashset title:</Form.Label>
                            <Form.Control
                                placeholder="new title"
                                name="newTitle"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="button" variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                    <Button type="button" variant="primary" onClick={handleSubmit}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal