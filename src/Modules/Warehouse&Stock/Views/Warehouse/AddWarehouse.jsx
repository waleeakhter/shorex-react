import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '../../../Helper/Wrapper'
import {withTranslation} from 'react-i18next'

const AddWarehouse = (props) => {
    const { id } = props.match.params

    let fields = {
        title: {
            type: 'text',
            label: props.t('shorex:warehouse-name'),
            required: true,
            name: 'title',
            col: ' col-sm-6 col-xl-4',
            placeholder: props.t('shorex:enter-warehouse-name'),
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        address: {
            type: 'location',
            label: props.t('address'),
            required: true,
            name: 'address',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        empty: {
            type: 'h4',
            name: ' ',
            col: ' col-sm-6 col-xl-4',
        },
        // item_type: {
        //     type: 'text',
        //     label: props.t('shorex:item-type'),
        //     required: true,
        //     name: 'item_type',
        //     col: ' col-sm-6 col-xl-4',
        //     placeholder: '',
        //     className: 'form-control-lg',
        //     autoComplete: 'off',
        // },
        item_type: {
            type: 'advanceSelect',
            label: 'Item Type',
            name: 'item_type_id',
            col: ' col-sm-6 col-xl-4',
            target: "item-types?limit=9999",
            optionValue: 'id',
            optionLabel: 'title',
            required:true
        },
        notes: {
            type: 'textarea',
            label: props.t('shorex:notes'),
            required: false,
            name: 'notes',
            rows: 7,
            col: 12,
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
    }

    return (
        <Wrapper>
            <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Warehouse</h4>
            <Row>
                <Col xxl="10">
                    <FormGenerator
                        targetEntity={'warehouses'}
                        fields={fields}
                        targetId={id}
                        name="warehouses"
                        debug={false}
                        redirect="warehouses-list"
                    />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default withTranslation(['base', 'shorex'])(AddWarehouse)
