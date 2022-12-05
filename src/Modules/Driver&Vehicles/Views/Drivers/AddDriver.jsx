import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
const AddDriver = (props) => {
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
            label: `Mobile Number (This will be used for OTP)`,
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
        nif: {
            type: 'text',
            label: `Driver ID`,
            required: true,
            name: 'nif',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter Driver id',
            className: 'form-control-lg',
            autoComplete: 'rutjfkde',
        },
        license: {
            type: 'text',
            label: `Driver License`,
            required: true,
            name: 'license',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter driver license',
            className: 'form-control-lg',
            autoComplete: 'rutjfkde',
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
        vehicle_id: {
            key:"vehicle_id",
            type: 'advanceSelect',
            target:"vehicles",
            label: `Assign Vehicles`,
            required: true,
            name: 'vehicle_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Assign Vehicles',
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
        heading: {
            type: 'h4',
            name: 'Media',
            className: 'form-control-lg',
        },

        license_img: {
            type: 'filePic',
            label: `Driving License Image`,
            required: id ? false : true,
            name: 'license_img',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Assign Vehicles',
            className: ' form-control-lg ',
            autoComplete: 'off',
        },
        nif_img: {
            type: 'filePic',
            label: `Driving ID Image`,
            required: id ? false : true,
            name: 'nif_img',
            col: ' col-sm-6 col-xl-4',
            className: ' form-control-lg ',
            autoComplete: 'off',
            multi:true
        },
    }

    return (
        <div>
            <h4 className="heading mb-4">{id ? 'Edit Driver' : "Add Driver"}</h4>
            <FormGenerator
                targetEntity={"drivers"}
                fields={fields}
                targetId={id}
                // getInitialValues={getInitialValues}
                name="vendor"
                debug={false}
                extraVals={{ _method: id && 'PATCH' }}
                redirect="lists"
            // repeater={true}
            />
        </div>
    )
}

export default AddDriver
