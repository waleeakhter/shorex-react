import React from 'react'
import { Row, Col, Button, Alert, Spinner } from 'react-bootstrap'
import "./Privacy.scss"
import { Link } from 'react-router-dom'
import Api from "@evenlogics/whf-api"
import parse from 'html-react-parser';
import {withTranslation} from 'react-i18next'

const ListView = (props) => {
    // const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const [content, setContent] = React.useState(null)
    const [contentEs, setContentEs] = React.useState(null)
    const [loader, setLoader] = React.useState(true)
    React.useEffect(() => {
        Api.request('get', `/${props.target}`)
            .then(response => { console.log(response); setContent(response.description);setContentEs(response.description_fr); setLoader(false) })
            .catch(e => console.log(e))
    }, [props.target])
    return (
        <Row className="align-items-center">
            <Col sm="6">
                <h4 className="heading">{props.heading}</h4>
            </Col>
            <Col sm="6" className="text-end">
               {!content && <Link variant="" to={props.add} className="text-decoration-none"> <button variant="" className="btnLight">
                   {props.t('add')} {props.heading}
                </button>
                </Link>}
            </Col>

            <Col className="mt-5">
                {!loader ? content ? 
                <>
                <div className="privacyText">
                    <h4 className="heading">In English</h4>
                        {parse(content)}
                        <h4 className="heading">In Spanish</h4>
                        {parse(contentEs)}
                    <div className="form-group text-end">
                        {/* {
                            currentUser.roles.includes('Admin') &&
                            <Button variant="danger">{props.t('delete')}</Button>
                        } 
                        */}
                        <Link className="text-decoration-none text-white" to={props.edit} ><Button variant="success">{props.t('edit')}</Button> </Link>
                    </div>
                </div> 
                </>
                
                
                : <Alert variant="danger" className="fs-6">No Data Found <i className="fa-solid fa-diamond-exclamation"></i></Alert>

                    :  <div className="py-5 text-center"><Spinner animation="border" /></div> }
            </Col>
        </Row>
    )
}

export default withTranslation(['base', 'shorex'])(ListView)