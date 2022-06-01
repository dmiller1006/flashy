import { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'


const EditModal = ({setNewName}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (e) => {
        setNewName(document.getElementById('exampleForm.ControlInput1').value)
        handleClose()
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
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>new flashset title:</Form.Label>
                            <Form.Control
                                placeholder="new title"
                                autoFocus
                                name="newTitle"
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditModal