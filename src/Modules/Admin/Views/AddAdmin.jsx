import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { useParams } from "react-router-dom";
const UpdateProfile = (props) => {
    const params = useParams();
    const [maskedValue] = React.useState("+33-000-000-000")


    let fields = {
        first_name: {
            type: 'text',
            label: 'First Name',
            required: true,
            name: 'first_name',
            col: 6,
            placeholder: 'Enter first name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        last_name: {
            type: 'text',
            label: 'Last Name',
            required: true,
            name: 'last_name',
            col: 6,
            placeholder: 'Enter last name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        email: {
            type: 'email',
            label: 'Email',
            required: true,
            name: 'email',
            col: 6,
            placeholder: 'Enter email',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        mobile: {
            type: 'masked',
            label: 'Contact Number',
            required: true,
            name: 'mobile',
            col: 6,
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
        address: {
            type: 'location',
            label: 'Address',
            required: true,
            name: 'address',
            col: 6,
            placeholder: maskedValue,
            className: 'form-control-lg',
            autoComplete: 'off',
        },

        heading: {
            type: 'h4',
            name: 'Change Password',
            className: 'form-control-lg',
        },
        password: {
            type: 'password',
            label: `Password`,
            name: 'password',
            col: 6,
            placeholder: 'Enter password',
            className: 'form-control-lg',
            autoComplete: 'new-password',
        },
        password_confirmation: {
            type: 'password',
            label: `Password Confirmation`,
            name: 'password_confirmation',
            col: 6,
            placeholder: 'Enter password',
            className: 'form-control-lg',
            autoComplete: 'new-password',
            oneOf: "password"
        },


    }

    return (
        <FormGenerator
            targetEntity={'admins'}
            fields={fields}
            targetId={params?.id ?? props.id}
            name="products"
            debug={false}
            redirect="admin-profile"
        />
    )
}

export default UpdateProfile
