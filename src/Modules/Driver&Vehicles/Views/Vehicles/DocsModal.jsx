import React from 'react'
import { Modal, Button, Spinner } from 'react-bootstrap'
import Wrapper from '../../../Helper/Wrapper';
const DocsModal = ({ docs }) => {

    const [show, setShow] = React.useState(false);
    const [docsList, setDocs] = React.useState([])
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    React.useEffect(() => {
        setDocs(docs)
    }, [docs])


    return (
        <Wrapper>
            <Button variant="" className="shadow-none" style={{ color: "var(--blueCard)", fontSize: 14, fontWeight: "500" }} onClick={handleShow}>
                View Documents
            </Button>

            <Modal centered scrollable={true} show={show} size="xl" fullscreen={'lg-down'} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="mb-0"> Registration Documents</Modal.Title>
                </Modal.Header>
                <Modal.Body className="flex-wrap d-flex" style={{ gap: '30px' }}>
                    {docsList.length > 0 ?
                        docsList.map((doc, i) =>
                            <div className="ratio ratio-1x1 " style={{ flex: '1 0 40%' }} key={i.toString()} >
                                <object
                                    data={doc.url + '#scrollbar=0'}
                                    aria-labelledby={doc?.name}
                                    type="application/pdf"
                                    frameBorder="0"
                                    scrolling="hidden"
                                    height="100%"
                                    width="100%"

                                ></object>
                            </div>) :
                        <div className="py-5 text-center">
                            <Spinner animation="border" />
                        </div>
                    }
                </Modal.Body>
            </Modal>
        </Wrapper>
    );
}

export default DocsModal