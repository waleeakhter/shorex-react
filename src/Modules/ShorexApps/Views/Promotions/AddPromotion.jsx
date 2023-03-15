import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const AddPromotion = (props) => {
  const { id } = props.match.params

  let fields = {
    title: {
      type: 'text',
      label: props.t('title'),
      required: true,
      name: 'title',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-promotion-title-en'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    title_fr: {
      type: 'text',
      label: props.t('shorex:title-es'),
      required: true,
      name: 'title_fr',
      col: ' col-sm-6 col-xl-4',
      placeholder: props.t('shorex:enter-promotion-title-es'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
    description: {
      type: 'textarea',
      label: props.t('description'),
      required: true,
      name: 'description',
      col: ' col-md-6 col-6 ',
      placeholder: props.t('shorex:enter-some-text-en'),
      className: 'form-control-lg',
      autoComplete: 'off',
      rows: 5
    },
    description_fr: {
      type: 'textarea',
      label: props.t('shorex:description-es'),
      required: true,
      name: 'description_fr',
      col: ' col-md-6 col-6 ',
      placeholder: props.t('shorex:enter-some-text-es'),
      className: 'form-control-lg',
      autoComplete: 'off',
      rows: 5
    },
    promo_file: {
      type: 'file',
      label: props.t('shorex:image-/-video'),
      required: id ? false : true,
      name: 'promo_file',
      col: ' col-md-6 ',
      placeholder: props.t('shorex:enter-category-name'),
      className: 'form-control-lg',
      autoComplete: 'off',
    },
  }

  return (
    <div>
      <h4 className="heading mb-4">{id ? props.t('shorex:edit-promotional-banners') : props.t('shorex:add-promotional-banners')}</h4>
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
            addComponent={<ShowFile />}
          />
        </Col>
      </Row>
    </div>
  )
}

const ShowFile = ({ values, setFieldValue, setDisableButton, initialValues, setserverError, id }) => {
  if (values.promo_file_url) {
    return <object data={values.promo_file_url}
      width="300px" height="300px">
    </object>
  }else{
    return false
  }
  
}
export default withTranslation(['base', 'shorex'])(AddPromotion)