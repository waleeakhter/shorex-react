import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import globle from './../../assets/images/globle.svg'
import {withTranslation} from 'react-i18next'

const Language = (props) => {
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const switchLang = () => {
        if(props.i18n.language === 'en') {
            props.i18n.changeLanguage('es')
        } else {
            props.i18n.changeLanguage('en')
        }

        setShow(false)
    }

    const showLanguage =()=>{
        if(props.i18n.language === 'en') {
          return 'es'
        } else {
            return 'en'
        }

    }

    return (
        <div className="language">
            <button className="btn" onClick={handleShow}>
                <img src={globle} alt="globle-icon" />
                <span style={{textTransform: "uppercase"}}>{showLanguage()}</span>
            </button>

            <Modal show={show} onHide={handleClose} className="language-modal" backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton className="border-0 position-absolute end-0 top-0" style={{ zIndex: 3 }}>
                </Modal.Header>
                <Modal.Body>
                    <div className="text my-3 text-center">
                        <p className="text-gray">{props.t('shorex:language-switch-confirm')}</p>
                        <Button className="btn btn-success" onClick={() => switchLang()}>{props.t('shorex:language-switch-confirm-btn')}</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Language)