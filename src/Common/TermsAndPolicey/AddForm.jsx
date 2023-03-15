import React, { useRef } from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import JoditEditor from "jodit-react";
import Api from "@evenlogics/whf-api"
import { toast } from 'react-toastify'
import { Link } from "react-router-dom"
import {withTranslation} from 'react-i18next'
import "./Privacy.scss"
const AddForm = (props) => {
    const editor = React.useRef(null)
    const editor_es = React.useRef(null)
    const [content, setContent] = React.useState('') 
    const [contentEs, setContentEs] = React.useState('') 
    const [submitting, setSubmitting] = React.useState(false)
    const clickLink = useRef(null)
    const [loader, setLoader] = React.useState(true)
    React.useEffect(() => {
        props.edit === 'true' ?
            Api.request('get', `/${props.target}`)
                .then(response => { console.log(response); setContent(response.description);setContentEs(response.description_fr);setLoader(false) })
                .catch(e => console.log(e)) : setLoader(false)
    }, [props.target , props.edit])

    const sendCall = () => {
        if (content) {
            setSubmitting("description", content)
            const formData = new FormData();
            formData.append("description", content)
            formData.append("description_fr", contentEs)
            Api.request('post', `/${props.target}`, formData)
                .then(response => {
                    console.log(response); toast.success(response.message); setSubmitting(false);
                    clickLink.current.click()
                })
                .catch(e => { console.log(e); toast.error("Something Went Wrong"); setSubmitting(false) })
        } else {
            toast.error(props.t('shorex:error-add-content'))
        }
    }
    return (
        <Row>
            <Col xs={12}>
                <h4 className="heading mb-4">{props.heading}</h4>
            </Col>

            {!loader ? <Col >
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1}
                    onChange={newContent => setContent(newContent)}
                    className="is-invalid"
                />
                <h5 className="heading mt-4">In Spanish</h5>
                 <JoditEditor
                    ref={editor_es}
                    value={contentEs}
                    tabIndex={1}
                    onChange={newContent => setContentEs(newContent)}
                    className="is-invalid"
                />
                <div className="privacyText mt-4">
                    <div className="form-group text-end">
                        <Button variant="danger" >
                            <Link className="text-white text-decoration-none d-block w-100 " ref={clickLink} to={props.redirect}>{props.t('shorex:cancel')}</Link>
                        </Button>
                        <Button variant="success" onClick={sendCall} disabled={submitting}>{submitting ? <Spinner size="sm" animation="border" /> : props.t('shorex:save')}</Button>
                    </div>
                </div>
            </Col> : <div className="py-5 text-center"><Spinner animation="border" /></div>   }
        </Row>
    )
}

export default withTranslation(['base', 'shorex'])(AddForm)