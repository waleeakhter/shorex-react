import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const AddCategory = (props) => {
  const { id } = props.match.params
  const date = new Date()


  let fields = {
    title: {
      type: 'text',
      label: props.t('shorex:holiday-title'),
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: '',
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    date: {
      type: 'date',
      label: props.t('shorex:select-date'),
      required: true,
      name: 'date',
      col: ' col-sm-6 col-xl-4',
      placeholderText: '',
      className: 'form-control-lg',
      autoComplete: 'off',
      dateFormat:"dd/MM/yyyy",
      minDate:date.setDate(date.getDate() + 1)
    },
    notes: {
      type: 'textarea',
      label: props.t('shorex:additional-notes'),
      name: 'notes',
      col: ' col-12',
      placeholderText: '',
      className: 'form-control-lg',
      autoComplete: 'off',
      rows:5
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? props.t('shorex:edit-holiday') : props.t('shorex:add-holiday')}</h4>
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

export default withTranslation(['base', 'shorex'])(AddCategory)