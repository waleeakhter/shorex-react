import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { Row, Col } from 'react-bootstrap'
import Wrapper from '../../../Helper/Wrapper'


const AddWarehouse = (props) => {
    const { id } = props.match.params



    let fields = {
        title: {
            type: 'text',
            label: 'Warehouse Name',
            required: true,
            name: 'title',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter warehouse name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        address: {
            type: 'location',
            label: 'Address',
            required: true,
            name: 'address',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter last name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        empty: {
            type: 'h4',
            name: ' ',
            col: ' col-sm-6 col-xl-4',
        },
        item_type: {
            type: 'text',
            label: 'Item Type',
            required: true,
            name: 'item_type',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter item type',
            className: 'form-control-lg',
            autoComplete: 'off',
        },

        notes: {
            type: 'textarea',
            label: `Notes`,
            required: true,
            name: 'notes',
            rows: 7,
            col: 12,
            placeholder: 'Enter Some Notes',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
    }

    return (
        <Wrapper>
            <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Warehous</h4>
            <Row>
                <Col xxl="10">
                    <FormGenerator
                        targetEntity={'warehouses'}
                        fields={fields}
                        targetId={id}
                        name="warehouses"
                        debug={true}
                        redirect="warehouses-list"
                    />
                </Col>
            </Row>
        </Wrapper>
    )
}

export default AddWarehouse
