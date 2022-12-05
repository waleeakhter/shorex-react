
import React from 'react'
import { Button, Modal } from "react-bootstrap";
const AlertModal = ({ showModal, setModal , text , confirmButton }) => {
    const style = {
        p: {
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 500,
            lineHeight: "23px",
            color: '#39414F'
        },
        modal_body: {
            padding: '0% 20% 5%',
        },
        button: {
            fontSize: 15,
            fontWeight: 500,
            borderRadius : 4,
            color: 'white'
        }

    }
    return (
        <>
            <Modal
                show={showModal}
                onHide={() => setModal(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton className="border-0 ">
                </Modal.Header>
                <Modal.Body style={style.modal_body} >
                    <p style={style.p}>{text}</p>
                    <div className="d-flex justify-content-center mt-4">
                        <Button variant=" me-2" style={{...style.button , minWidth : 109 , backgroundColor : '#FB6B6B'}} onClick={() => setModal(false)}>Cancel</Button>
                        <Button variant="success" style={{...style.button , minWidth : 164}} onClick={() => setModal(false)}>{confirmButton ?? 'Confirm'}</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AlertModal