import React, { useState, useEffect } from "react";
import { Formik, ErrorMessage } from 'formik';
import { Col, Row, Form, Button, Spinner, Alert, } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import { validationSchema } from "./JS/schema"
import initialValues from "./JS/intialvalues"
import { onSubmit, getVehicles, handleInputChange, handleFileChange, deleteImage } from "./JS/genric"
import {withTranslation} from 'react-i18next'

const AddVehicle = (props) => {

    const { id } = props.match.params;
    // states
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [files, setFiles] = useState([]);
    const [initValues, setInitialValues] = useState(initialValues);

    useEffect(() => {
        if (id) {
            getVehicles(setInitialValues, setLoader, setFiles, id)

        } else {
            setLoader(false)
        }


    }, [id])




    return (
        <div className=" globalCard">

            {loader ? (
                <div className=" text-center h-25 card-body">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>

                    {error?.length > 0 ? (
                        <Alert variant={"danger"}>
                            <ul>
                                {error.map((error) => (
                                    <li>{error}</li>
                                ))}
                            </ul>
                        </Alert>
                    ) : (
                        ""
                    )}
                    <Formik
                        validationSchema={validationSchema(id)}
                        initialValues={initValues}
                        onSubmit={(values) => onSubmit(values, setSubmitting, id, props, setError)}
                        enableReinitialize={true}
                    >
                        {({ resetForm, values, errors, touched, setFieldValue, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Row className="mb-3" style={{ gap: "15px 0" }}>
                                    <h4 className="heading col-12">{id ? props.t('shorex:edit-vehicle') : props.t('shorex:add-vehicle')}</h4>
                                    <Form.Group as={Col} lg="4" sm="6" controlId="name" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:vehicle-name')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="name" defaultValue={values.name}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="name" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="4" sm="6" controlId="reg_no" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:vehicle-number')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="reg_no" defaultValue={values.reg_no}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="reg_no" />
                                        </div>
                                    </Form.Group>


                                    <Form.Group as={Col} lg="4" sm="6" controlId="trade_mark" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:trade-mark')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="trade_mark" defaultValue={values.trade_mark}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="trade_mark" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="4" sm="6" controlId="chassis_no" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:chasis-number')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="chassis_no" defaultValue={values.chassis_no}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="chassis_no" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="4" sm="6" controlId="engine_no" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:engine-number')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="engine_no" defaultValue={values.engine_no}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="engine_no" />
                                        </div>
                                    </Form.Group>


                                    <Form.Group as={Col} lg="4" sm="6" controlId="model" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:model')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="text" placeholder=""
                                            name="model" defaultValue={values.model}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="model" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} lg="4" sm="6" controlId="reg_doc" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:upload-registration-documents')} *</Form.Label>
                                        <Form.Control autoComplete="off" type="file" placeholder="Enter vehicle Name" multiple
                                            name="reg_doc" defaultValue={values.reg_doc} accept=".pdf"
                                            onClick={e => e.target.value = null}
                                            onChange={(e) => handleFileChange(e, setFieldValue, setFiles)}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="reg_doc" />
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} xs="12" controlId="files" className="form-group"
                                    >
                                        <div className="d-flex flex-wrap" style={{ gap: 15 }}>
                                            {files?.length > 0 && files.map((file, i) => {
                                                let link = file.url ?? URL.createObjectURL(file)
                                                return <div className="ratio ratio-1x1 position-relative" key={i.toString()} style={{ flex: "0 0 150px" }}>
                                                    <i className="fa-solid fa-trash deleteIcon" onClick={() => deleteImage(i, setFieldValue, files)}></i>
                                                    <iframe
                                                        src={link}
                                                        title={link?.name ?? file?.name}
                                                        type="application/pdf"
                                                        frameBorder="0"
                                                        scrolling="hidden"
                                                        height="100%"
                                                        width="100%"
                                                        style={{ overflow: 'hidden' }}
                                                    />

                                                </div>
                                            }

                                            )
                                            }
                                        </div>
                                    </Form.Group>

                                    <Form.Group as={Col} xs="12" controlId="notes" className="form-group"
                                    >
                                        <Form.Label>{props.t('shorex:notes')} </Form.Label>
                                        <Form.Control autoComplete="off" as="textarea" rows={5} placeholder=""
                                            name="notes" defaultValue={values.notes}
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }}
                                        />
                                        <div className="text-red" >
                                            <ErrorMessage name="notes" />
                                        </div>
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} lg="10" className="form-group custom">
                                    <Button
                                        variant="primary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        {submitting ? (
                                            <>
                                                <Spinner
                                                    as="span"
                                                    animation="border"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                &nbsp; Submiting...
                                            </>
                                        ) : (
                                            props.t('base:general-submit')
                                        )}
                                    </Button>
                                    <Button
                                        variant="danger"
                                        type="reset"
                                        className="ms-3"
                                        onClick={() => {
                                            setLoader(true); resetForm();
                                            setTimeout(() => { setLoader(false) }, 1000)
                                        }}
                                    >
                                      { props.t('base:general-reset')}
                                    </Button>
                                </Form.Group>
                                {false && (
                                    <div className={"row"}>
                                        <div className={"col-12"}>
                                            <code>
                                                <pre>Values: {JSON.stringify(values, null, 2)}</pre>
                                            </code>
                                        </div>
                                        <div className={"col-12"}>
                                            <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                                        </div>
                                        <div className={"col-12"}>
                                            <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}
                    </Formik>
                </>
            )}
        </div>
    );
};

export default withTranslation(['base', 'shorex'])(AddVehicle)