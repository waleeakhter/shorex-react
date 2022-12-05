import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
const AddCategory = (props) => {
  const { id } = props.match.params
  const date = new Date()


  let fields = {
    title: {
      type: 'text',
      label: 'Holiday Title',
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter holiday title',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    date: {
      type: 'date',
      label: 'Select Date',
      required: true,
      name: 'date',
      col: ' col-sm-6 col-xl-4',
      placeholderText: 'Select Date',
      className: 'form-control-lg',
      autoComplete: 'off',
      dateFormat:"dd/MM/yyyy",
      minDate:date.setDate(date.getDate() + 1)
    },
    notes: {
      type: 'textarea',
      label: 'Aditional Notes',
      required: true,
      name: 'notes',
      col: ' col-12',
      placeholderText: 'Select Date',
      className: 'form-control-lg',
      autoComplete: 'off',
      rows:5
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Business Category</h4>
      <Row>
        <Col xxl="10">
          <FormGenerator
            targetEntity={'holidays'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/manage-official-holidays"
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddCategory
