import React, { useState, useEffect, useRef } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Col, Row, Form, Button, Spinner, Alert } from "react-bootstrap";
import { initialVals } from "./JS/intialvalues"
import { validationSchema } from "./JS/validationSchema"
import AdvanceSelect from "./../../../Common/AdvanceSelect/AdvanceSelect"
import Geosuggest from "react-geosuggest";
import InputMask from 'react-input-mask';
import { onSubmit, handleInputChange, handleSelectChange, onSuggestSelect, getCustomer } from "./JS/generic"
import {withTranslation} from 'react-i18next'

const AddCustomer = (props) => {


    const { id } = props.match.params;
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [initialValues, setInitialValues] = useState(initialVals);
    const geosuggestEl = useRef(null);

    useEffect(() => {
        if (id) {
            getCustomer(id, setInitialValues, setLoader)
        } else {
            setLoader(false)
        }
    }, [id])






    return (
        <div>
            {loader ? (
                <div className=" text-center h-25 card-body">
                    <Spinner animation="grow" />
                </div>
            ) : (
                <div className="">
                    {error.length > 0 ? (
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
                        initialValues={initialValues}
                        onSubmit={(values) => onSubmit(values, id, setSubmitting, props, setError)}
                        enableReinitialize={true}
                    >
                        {({ values, errors, touched, setFieldValue, handleSubmit, }) => (
                            <form onSubmit={handleSubmit}>
                                <Row className="mb-3" style={{ gap: '20px 0px', girdGap: '20px 0px' }}  >

                                    <Form.Group as={Col} xs="12">
                                        <h4 className="heading mb-4">{id?props.t('shorex:edit-customer'):props.t('shorex:add-customer')}</h4>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="first_name" >
                                        <Form.Label>{props.t('shorex:first-name')} <span className="text-red">*</span></Form.Label>
                                        <Field name="first_name" type="text" value={values.first_name ?? ""}
                                            placeholder={props.t('shorex:enter-first-name')} className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="first_name" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="last_name" >
                                        <Form.Label>{props.t('shorex:last-name')} <span className="text-red">*</span></Form.Label>
                                        <Field name="last_name" type="text" value={values.last_name ?? ""}
                                            placeholder={props.t('shorex:enter-last-name')} className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="last_name" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="email" >
                                        <Form.Label>{props.t('email')} <span className="text-red">*</span></Form.Label>
                                        <Field name="email" type="email" value={values.email ?? ""}
                                            placeholder="your@email.com" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="email" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="phone" >
                                        <Form.Label>{props.t('shorex:landline-number')} <span className="text-red">*</span></Form.Label>
                                        <InputMask mask="+34-000-000-000" maskChar=" " placeholder="+34-000-000-000"
                                            name="phone" value={values.phone ?? ""} autoComplete='off'
                                            formatChars={
                                                {
                                                    '0': '[0-9]',
                                                    'a': '[A-Za-z]',
                                                    '*': '[A-Za-z0-9]'
                                                }
                                            }
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }} />
                                        <span className="text-red" ><ErrorMessage name="phone" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="mobile" >
                                        <Form.Label>{props.t('shorex:mobile-number')} <span className="text-red">*</span></Form.Label>
                                        <InputMask mask="+34-000-000-000" maskChar=" " placeholder="+34-000-000-000"
                                            name="mobile" value={values.mobile ?? ""} autoComplete='off'
                                            formatChars={
                                                {
                                                    '0': '[0-9]',
                                                    'a': '[A-Za-z]',
                                                    '*': '[A-Za-z0-9]'
                                                }
                                            }
                                            onChange={(e) => {
                                                handleInputChange(e, setFieldValue);
                                            }} />
                                        <span className="text-red" ><ErrorMessage name="mobile" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="post_code" >
                                        <Form.Label>{props.t('shorex:postal-code')} <span className="text-red">*</span></Form.Label>
                                        <Field name="post_code" type="text" maxlength="5" value={values.post_code ?? ""}
                                            placeholder="" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="post_code" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} sm="6" xl="4" controlId="business_name" >
                                        <Form.Label>{props.t('shorex:business-name')} <span className="text-red">*</span></Form.Label>
                                        <Field name="business_name" type="text" value={values.business_name ?? ""}
                                            placeholder="" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="business_name" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} sm="6" xl="4" controlId="nif" >
                                        <Form.Label>{props.t('shorex:license-no')}<span className="text-red">*</span></Form.Label>
                                        <Field name="nif" type="text" value={values.nif ?? ""}
                                            placeholder={props.t('shorex:enter-postal-code')} className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="nif" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} sm="6" xl="4" controlId="address" >
                                        <Form.Label>{props.t('shorex:address-map-location')} <span className="text-red">*</span></Form.Label>
                                        <Geosuggest
                                            ref={geosuggestEl} initialValue={values.address} placeholder="Start typing!"
                                            onSuggestSelect={(suggest) =>
                                                onSuggestSelect(suggest, "address", setFieldValue)
                                            }
                                            name="address"
                                        />
                                        <span className="text-red" ><ErrorMessage name="address" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" xl="4" controlId="category_id" >
                                        <Form.Label>{props.t('base:business-category')} <span className="text-red"></span></Form.Label>
                                        <AdvanceSelect target="categories" name="category_id" value={values.category_id}
                                            callback={handleSelectChange} setFieldValue={setFieldValue} lableValue="title" />
                                        <span className="text-red" ><ErrorMessage name="category_id" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} sm="6" xl="4" controlId="incharge_staff" >
                                        <Form.Label>{props.t('shorex:other-staff-incharge')} </Form.Label>
                                        <Field name="incharge_staff" type="text" value={values.incharge_staff ?? ""}
                                            placeholder={props.t('shorex:enter-incharge-staff-name')} className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="incharge_staff" /></span>
                                    </Form.Group>
                                    <Form.Group as={Col} sm="6" controlId="bank_name" xl={{ span: 4 }} ></Form.Group>

                                    <Form.Group as={Col} sm="6" controlId="bank_name" xl="4">
                                        <Form.Label>{props.t('shorex:bank-name')} </Form.Label>
                                        <Field name="bank_name" type="text" value={values.bank_name ?? ""}
                                            placeholder="Enter bank name" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="bank_name" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" controlId="iban" xl="4">
                                        <Form.Label>{props.t('shorex:iban')} </Form.Label>
                                        <Field name="iban" type="text" value={values.iban ?? ""}
                                            placeholder="" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="iban" /></span>
                                    </Form.Group>

                                    <Form.Group as={Col} sm="6" controlId="account_hldr_name" xl="4">
                                        <Form.Label>{props.t('shorex:account-holder-name')} </Form.Label>
                                        <Field name="account_hldr_name" type="text" value={values.account_hldr_name ?? ""}
                                            placeholder="" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="account_hldr_name" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} xs="12" controlId="notes" >
                                        <Form.Label>{props.t('shorex:notes')} </Form.Label>
                                        <Field name="notes" as="textarea" value={values.notes ?? ""} rows="5"
                                            placeholder="Enter notes" className="form-control" autoComplete='off'
                                        />
                                        <span className="text-red" ><ErrorMessage name="notes" /></span>
                                    </Form.Group>


                                    <Form.Group as={Col} xs="12" controlId="notes" >
                                        <h4 className="heading mb-4">{props.t('shorex:media')}</h4>

                                    </Form.Group>


                                    <Form.Group as={Col} xl="4" sm="6" controlId="notes" >
                                        <Form.Label>{props.t('shorex:license-image')} <span className="text-red">{!id && ""} </span></Form.Label>
                                        <input id="file" name="license_img" className="form-control" type="file" onChange={(e) => {
                                            setFieldValue("license_img", e.currentTarget.files[0] ?? "");
                                        }} />
                                        <span className="text-red" ><ErrorMessage name="license_img" /></span>

                                        <div className="mt-3" style={{ maxWidth: 150 }}>
                                            {(values.license_img || values.license_img_url) &&
                                                <img src={values.license_img ? URL.createObjectURL(values.license_img) : values.license_img_url} alt="" className="avatar img-thumbnail" />
                                            }
                                        </div>
                                    </Form.Group>




                                    <Form.Group as={Col} lg="12" className="form-group">
                                        <Button
                                            variant="success"
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
                                                    &nbsp; {props.t('shorex:submitting')}...
                                                </>
                                            ) : (
                                                props.t('shorex:save')
                                            )}
                                        </Button>
                                    </Form.Group>
                                </Row>

                                {false && (
                                    <div className={'row'}>
                                        <div className={'col-12'}>
                                            <code>
                                                <pre>Values: {JSON.stringify(values, null, 2)}</pre>
                                            </code>
                                        </div>
                                        <div className={'col-12'}>
                                            <pre>Errors: {JSON.stringify(errors, null, 2)}</pre>
                                        </div>
                                        <div className={'col-12'}>
                                            <pre>Touched: {JSON.stringify(touched, null, 2)}</pre>
                                        </div>
                                    </div>
                                )}
                            </form>
                        )}
                    </Formik>
                </div>
            )}
        </div>
    );
};

export default withTranslation(['base', 'shorex'])(AddCustomer)