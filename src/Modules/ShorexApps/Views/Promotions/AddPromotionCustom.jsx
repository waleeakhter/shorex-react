import React from 'react'
import { Col, Row, Form, Button } from "react-bootstrap";
import { Formik, Field, ErrorMessage } from "formik";
import { initialValues } from "./js/IntialValues"
import { validationSchema } from "./js/validationSchema"
import {withTranslation} from 'react-i18next'

const AddPromotion = (props) => {
  const onSubmit = (values) => {
    props.stepValues(2, values)
  }
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues()}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ values, errors, touched, setFieldValue, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Row className="gx-5 gy-3">
            <Form.Group as={Col} lg="12" className="mb-4">
              <h4 className="heading">Edit Promotional Banners</h4>
            </Form.Group>

            <Form.Group as={Col} md="6" xl="4" controlId="title" className="form-group"
            >
              <Form.Label>Title *</Form.Label>
              <Field
                name="title"
                type="text"
                value={values.title}
                placeholder="Enter promotion title"
                className="form-control"
              />
              <div className="text-red mt-2">
                <ErrorMessage name="title" />
              </div>
            </Form.Group>
            <Form.Group as={Col} xs="12" xl="10" controlId="description" className="form-group"
            >
              <Form.Label>{props.t('shorex:coupon-title')}</Form.Label>
              <Field
                as="textarea"
                name="description"
                value={values.description}
                placeholder={props.t('shorex:enter-coupon-title')}
                className="form-control"
                rows="5"
              />
              <div className="text-red mt-2">
                <ErrorMessage name="description" />
              </div>
            </Form.Group>

            <Form.Group as={Col} md="6" xl="4" controlId="promo_image" className="form-group"
            >
              <Form.Label>{props.t('shorex:product-image')} *</Form.Label>
              <Field
                name="promo_image"
                type="file"
                value={values.promo_image}
                placeholder={props.t('shorex:enter-coupon-detail')}
                className="form-control"
              />
              <div className="text-red mt-2">
                <ErrorMessage name="promo_image" />
              </div>
            </Form.Group>

            <Form.Group as={Col} md="6" xl="4" controlId="promo_image" className="form-group"
            >
              <Form.Label>{props.t('shorex:product-image')} *</Form.Label>
              <Field
                name="promo_image"
                type="file"
                value={values.promo_image}
                className="form-control"
              />
              <div className="text-red mt-2">
                <ErrorMessage name="promo_image" />
              </div>
            </Form.Group>


            <div className="from-group w-100 text-end">
              <Button type="submit" variant='dark' size="lg"> {props.t('general-next')} </Button>
            </div>

          </Row>
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
      )}
    </Formik>
  )
}

export default withTranslation(['base', 'shorex'])(AddPromotion)