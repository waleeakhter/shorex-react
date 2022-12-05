import React from 'react'
import { Col, Row, Form, Button, Spinner } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { initialValues } from "./functions/IntialValues"
import { validationSchema } from "./functions/validationSchema"
import AdvanceSelect from "./../../../../Common/AdvanceSelect/AdvanceSelect"
import { onSubmit, handleSelectChange, getData } from "./functions/generic"

const AddNotification = (props) => {
    const { id } = props.match.params
    const [notifications, setNotifications] = React.useState(initialValues);
    const [spinner, setSpinner] = React.useState(true)
    const [image, setImage] = React.useState(null)
    React.useEffect(() => {
        id ?
            getData(id, setNotifications, setSpinner, setImage)
            :
            setSpinner(false)
    }, [id])

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={notifications}
            onSubmit={(values) => onSubmit(values, setSpinner, id, props.history)}
            enableReinitialize={true}
        >
            {({ values, errors, touched, setFieldValue, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    {!spinner ?
                        <Row className="gx-5 gy-3 align-items-center">
                            <Form.Group as={Col} xs="12" className="mb-4">
                                <h4 className="heading">{id ? 'Edit' : 'Add'} Promotional Banners</h4>
                            </Form.Group>

                            <Form.Group as={Col} md="6" xl="4" controlId="title_en" className="form-group"
                            >
                                <Form.Label>Notification Title (English) *</Form.Label>
                                <Field
                                    name="title_en" type="text" value={values.title_en ?? ""}
                                    placeholder="Enter promotion title" className="form-control"
                                />
                                <div className="text-red mt-2">
                                    <ErrorMessage name="title_en" />
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="6" xl="4" controlId="title_fr" className="form-group"
                            >
                                <Form.Label>Notification Title (French) *</Form.Label>
                                <Field
                                    name="title_fr" type="text" value={values.title_fr ?? ""}
                                    placeholder="Enter promotion title in french" className="form-control"
                                />
                                <div className="text-red mt-2">
                                    <ErrorMessage name="title_en" />
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} xs="12" className="form-group h-100 "
                                role="group" aria-labelledby="my-radio-group">

                                <div className="d-flex">
                                    <div className="form-check pl-0 flex-align">
                                        <Field type="radio" name="type" value="group" id="group" />
                                        <Form.Label htmlFor="group">For Group</Form.Label>

                                    </div>
                                    <div className="form-check pl-0 flex-align">
                                        <Field type="radio" name="type" value="single" id="single" />
                                        <Form.Label htmlFor="single" >For Single User</Form.Label >
                                    </div>
                                </div>
                                <div className="text-red pl-3">
                                    <ErrorMessage name="type" />
                                </div>
                            </Form.Group>


                            <Form.Group as={Col} md="6" xl="4" controlId="role_id"
                                className={`form-group ${values.type === 'group' ? 'd-block' : 'd-none'}`} >
                                <Form.Label>Select Group *</Form.Label>
                                <AdvanceSelect target="roles" name="role_id"
                                    setFieldValue={setFieldValue}
                                    callback={handleSelectChange}
                                    value={values.role_id}
                                />
                                <div className="text-red mt-2">
                                    <ErrorMessage name="role_id" />
                                </div>
                            </Form.Group>


                            <Form.Group as={Col} md="6" xl="4" controlId="user_id"
                                className={`form-group ${values.type === 'single' ? 'd-block' : 'd-none'}`} >
                                <Form.Label>Name *</Form.Label>
                                <AdvanceSelect target="users" name="user_id"
                                    setFieldValue={setFieldValue}
                                    callback={handleSelectChange}
                                    lableValue={'first_name'}
                                    extraLabelValue={'last_name'}
                                    extra="nif"
                                    value={values.user_id}
                                />
                                <div className="text-red mt-2">
                                    <ErrorMessage name="user_id" />
                                </div>
                            </Form.Group>

                            <Form.Group as={Col} md="6" xl="4" controlId="nif"
                                className={`form-group ${values.type === 'single' ? 'd-block' : 'd-none'}`}
                            >
                                <Form.Label>ID *</Form.Label>
                                <Field
                                    name="nif" type="text" value={values.nif ?? ""}
                                    placeholder="Enter user ID" className="form-control"
                                    rows="5"
                                />
                                <div className="text-red mt-2">
                                    <ErrorMessage name="nif" />
                                </div>
                            </Form.Group>

                            <div as={Col} xs="12">
                                <Row>
                                    <Form.Group as={Col} xs="12" md="6" xl="4" controlId="text_en" className="form-group">
                                        <Form.Label>Notes (English) *</Form.Label>
                                        <Field
                                            name="text_en" as="textarea" value={values.text_en ?? ""}
                                            placeholder="Enter some text english" className="form-control"
                                            rows="5"
                                        />
                                        <div className="text-red mt-2">
                                            <ErrorMessage name="text_en" />
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} xs="12" md="6" xl="4" controlId="text_fr" className="form-group"
                                    >
                                        <Form.Label>Notes (French) *</Form.Label>
                                        <Field
                                            name="text_fr" as="textarea" value={values.text_fr ?? ""}
                                            placeholder="Enter some text in french" className="form-control"
                                            rows="5"
                                        />
                                        <div className="text-red mt-2">
                                            <ErrorMessage name="text_fr" />
                                        </div>
                                    </Form.Group>
                                </Row>
                            </div>

                            <Form.Group as={Col} lg="12" className="mb-4">
                                <h4 className="heading">Media</h4>
                            </Form.Group>

                            <Form.Group as={Col} md="6" xl="4" controlId="notification_img" className="form-group"
                            >
                                <Form.Label>Notification Image</Form.Label>
                                <input
                                    name="notification_img" type="file"
                                    placeholder="Enter promotion title" className="form-control"
                                    rows="5"
                                    onChange={(e) => {
                                        setFieldValue("notification_img", e.target.files[0], setImage(e.target.files[0]));
                                    }}
                                />
                            </Form.Group>
                            {image && <Form.Group as={Col} xs="12"  >
                                <img src={image?.url ? image.url : URL.createObjectURL(image)} alt="" width="200" height="200" className=" img-thumbnail " />
                            </Form.Group>}

                            <div className="from-group w-100  my-5">
                                <Button type="submit" variant='success' style={{ width: 130, height: 36, fontSize: 15, lineHeight: "25px" }}> Send </Button>
                            </div>

                        </Row>
                        : <div className="py-5 text-center">
                            <Spinner animation="border" />
                        </div>
                    }
                    {/* {true && (
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
                    )} */}
                </form>
            )
            }
        </Formik >
    )
}

export default AddNotification