import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
const AddProduct = (props) => {
  const { id } = props.match.params



  let fields = {
    title: {
      type: 'text',
      label: 'Sub Item',
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter sub item name',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    title_fr: {
      type: 'text',
      label: 'Sub Item (French)',
      required: true,
      name: 'title_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter sub item name in french',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    item_type: {
      type: 'advanceSelect',
      target: "warehouses",
      optionLabel: "item_type",
      optionValue: "item_type",
      label: 'Item',
      required: true,
      name: 'item_type',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Select Item',
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    pts: {
      type: 'number',
      label: `Item Points`,
      required: true,
      name: 'pts',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter some pts',
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    questions: {
      type: 'text',
      label: `Quantity Question`,
      required: true,
      name: 'questions',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter question',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    questions_fr: {
      type: 'text',
      label: `Quantity Question (French)`,
      required: true,
      name: 'questions_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter question in french',
      className: 'form-control-lg',
      autoComplete: 'off',
    },

    "Media": {
      type: "h4",
      col: 12,
    },

    product_img: {
      type: 'filePic',
      label: `Item Image`,
      required: id ? false : true,
      name: 'product_img',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter question',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Products</h4>
      <Row>
        <Col xxl="10">
          <FormGenerator
            targetEntity={'products'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/products"
            extraVals={{ _method: id ? 'Patch' : null }}
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddProduct
