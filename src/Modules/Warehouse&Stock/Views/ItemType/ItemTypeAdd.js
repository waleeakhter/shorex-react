import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { useParams } from "react-router-dom"; 
const ItemTypeAdd = (props) => {
    const params = useParams

    let fields = {
        title: {
            type: 'text',
            label: 'Item Name',
            required: true,
            name: 'title',
            col: 6,
            placeholder: 'Enter Name',
            className: 'form-control-lg',
            autoComplete: 'off',
        }
    }

    return (
        <>
                <FormGenerator
                    targetEntity={'item-types'}
                    fields={fields}
                    targetId={params?.id ?? props.id}
                    name="terms"
                    debug={false}
                    redirect="warehouses/item-type"
                />
        </>
       
    )
}



export default ItemTypeAdd
