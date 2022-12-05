import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
const AddCategory = (props) => {
  const { id } = props.match.params



  let fields = {
    title: {
      type: 'text',
      label: 'Category Name',
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter category name',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Business Category</h4>
      <Row>
        <Col xxl="10">
          <FormGenerator
            targetEntity={'categories'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/business-categories"
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddCategory
