import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const AddCategory = (props) => {
  const { id } = props.match.params



  let fields = {
    title: {
      type: 'text',
      label: props.t('shorex:category-name'),
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-category-name'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? props.t('shorex:edit-business-categories') : props.t('shorex:add-business-categories')}</h4>
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

export default withTranslation(['base', 'shorex'])(AddCategory)
