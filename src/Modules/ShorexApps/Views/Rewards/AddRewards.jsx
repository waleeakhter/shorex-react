import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
const AddRewards = (props) => {
  const { id } = props.match.params



  let fields = {
    points: {
      type: 'number',
      label: 'Points',
      required: true,
      name: 'points',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter points',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    rewards: {
      type: 'number',
      label: 'In Euro',
      required: true,
      name: 'reward',
      col: ' col-sm-6 col-xl-4',
      placeholder: 'Enter reward amount',
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
            targetEntity={'rewards'}
            fields={fields}
            targetId={id}
            name="products"
            debug={false}
            redirect="apps/manage-rewards"
          />
        </Col>
      </Row>
    </div>
  )
}

export default AddRewards
