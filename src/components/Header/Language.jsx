import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import globle from './../../assets/images/globle.svg'
const Language = () => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="language">
            <button className="btn" onClick={handleShow}>
                <img src={globle} alt="globle-icon" />
                <span>EN</span>
            </button>

            <Modal show={show} onHide={handleClose} className="language-modal" backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton className="border-0 position-absolute end-0 top-0" style={{ zIndex: 3 }}>
                </Modal.Header>
                <Modal.Body>
                    <div className="text my-3 text-center">
                        <p className="text-gray">Are you sure want to switch language ?</p>
                        <Button className="btn btn-success">Submit</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Language