import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
const AddPromotion = (props) => {
  const { id } = props.match.params

  let fields = {
    title: {
      type: 'text',
      label: 'Title',
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter promotion title',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    title_fr: {
      type: 'text',
      label: 'Title (French)',
      required: true,
      name: 'title_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter promotion title in french',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    description: {
      type: 'textarea',
      label: 'Description',
      required: true,
      name: 'description',
      col: ' col-md-6 col-6 ',
      placeholder: 'Enter some text',
      className: 'form-control-lg',
      autoComplete: 'off',
      rows: 5
    },
    description_fr: {
      type: 'textarea',
      label: 'Description (French)',
      required: true,
      name: 'description_fr',
      col: ' col-md-6 col-6 ',
      placeholder: 'Enter some text in french',
      className: 'form-control-lg',
      autoComplete: 'off',
      rows: 5
    },
    promo_image: {
      type: 'filePic',
      label: 'Product Image',
      required: id ? false : true,
      name: 'promo_image',
      col: ' col-md-6 ',
      placeholder: 'Enter category name',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? 'Edit' : "Add"}  Promotional Banners</h4>
      <Row>
        <Col xxl="10">
          <FormGenerator
            targetEntity={'promotions'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/promotions"
            extraVals={{ _method: id && 'Patch' }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddPromotion
