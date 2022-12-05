import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
const AddStorekeeper = (props) => {
    const { id } = props.match.params
    const [maskedValue] = React.useState("+33-000-000-000")



    let fields = {
        first_name: {
            type: 'text',
            label: 'First Name',
            required: true,
            name: 'first_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter first name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        last_name: {
            type: 'text',
            label: 'Last Name',
            required: true,
            name: 'last_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter last name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        email: {
            type: 'email',
            label: 'Email',
            required: true,
            name: 'email',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter email',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        phone: {
            type: 'masked',
            label: 'Phone',
            required: true,
            name: 'phone',
            col: ' col-sm-6 col-xl-4',
            placeholder: maskedValue,
            mask: maskedValue,
            className: 'form-control-lg',
            autoComplete: 'off',
            formatChars: {
                '0': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
              },
        },
        mobile: {
            type: 'masked',
            label: `Mobile Number`,
            required: true,
            name: 'mobile',
            col: ' col-sm-6 col-xl-4',
            placeholder: maskedValue,
            mask: maskedValue,
            className: 'form-control-lg',
            autoComplete: 'off',
            formatChars: {
                '0': '[0-9]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
              },
        },
        manager_id: {
            type: 'text',
            label: `Warehouse Manager ID`,
            required:true,
            name: 'manager_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter warehouse manager ID',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        password: {
            type: 'password',
            label: `Password`,
            required: id ? false : true,
            name: 'password',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter password',
            className: 'form-control-lg',
            autoComplete: 'new-password',
        },
        warehouse_id: {
            type: 'advanceSelect',
            target:"warehouses?limit=9999",
            optionLabel: "item_type",
            optionValue: "id",
            label: `Warehouse`,
            required: true,
            name: 'warehouse_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Select warehouse',
            className: 'form-control-lg',
            autoComplete: 'off',
            multi:true
        },
        iban: {
            type: 'text',
            label: `IBAN`,
            required: true,
            name: 'iban',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter IBAN',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
       
        joining_date: {
            type: 'date',
            label: `Joining Date`,
            required: true,
            name: 'joining_date',
            col: ' col-sm-6 col-xl-4',
            placeholderText: 'Select Joining Date',
            className: 'form-control-lg',
            autoComplete: 'off',
            dateFormat:"dd/MM/yyyy",
        },
        bank_name: {
            type: 'text',
            label: `Bank Name`,
            required: true,
            name: 'bank_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter bank name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
 
        notes: {
            type: 'textarea',
            label: `Notes`,
            required: true,
            name: 'notes',
            rows:5,
            col:12,
            placeholder: 'Enter Some Notes',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        // heading: {
        //     type: 'h4',
        //     name: 'Media',
        //     className: 'form-control-lg',
        // },

        // warehouse_id_img: {
        //     type: 'filePic',
        //     label: `warehouse ID`,
        //     required: id ? false : true,
        //     name: 'warehouse_id_img',
        //     col: ' col-sm-6 col-xl-4',
        //     placeholder: 'Assign Vehicles',
        //     className: ' form-control-lg ',
        //     autoComplete: 'off',
        // },
    }

    return (
        <div>
            <h4 className="heading mb-4">{id ? 'Edit' : "Add"} Storekeeper</h4>
            <FormGenerator
                targetEntity="managers"
                fields={fields}
                targetId={id}
                // getInitialValues={getInitialValues}
                name="Storekeepers"
                debug={false}
                extraVals={{ _method: id && 'PATCH' }}
                redirect={{url: "/warehouses-list" , params:"Storekeeper"}}
            // repeater={true}
            />
        </div>
    )
}

export default AddStorekeeper
