import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const AddRewards = (props) => {
  const { id } = props.match.params

  let fields = {
    points: {
      type: 'number',
      label: props.t('shorex:points'),
      required: true,
      name: 'points',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-points'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    rewards: {
      type: 'number',
      label: props.t('shorex:in-euros'),
      required: true,
      name: 'reward',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-reward-amount'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? props.t('shorex:edit-rewards') : props.t('shorex:add-rewards')}</h4>
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

export default withTranslation(['base', 'shorex'])(AddRewards)
