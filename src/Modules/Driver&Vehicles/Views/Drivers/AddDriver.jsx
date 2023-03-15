import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import {withTranslation} from 'react-i18next'

const AddDriver = (props) => {
    const { id } = props.match.params
    const [maskedValue] = React.useState("+34-000-000-000")

    let fields = {
        first_name: {
            type: 'text',
            label: props.t('shorex:first-name'),
            required: true,
            name: 'first_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        last_name: {
            type: 'text',
            label: props.t('shorex:last-name'),
            required: true,
            name: 'last_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter last name',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        email: {
            type: 'email',
            label: props.t('email'),
            required: true,
            name: 'email',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        phone: {
            type: 'masked',
            label: props.t('landline-number'),
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
            label: props.t('shorex:mobile-number'),
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
            label: props.t('user:password'),
            required: id ? false : true,
            name: 'password',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter password',
            className: 'form-control-lg',
            autoComplete: 'new-password',
   
        },
        nif: {
            type: 'text',
            label: props.t('shorex:driver-id'),
            required: true,
            name: 'nif',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'rutjfkde',
        },
        license: {
            type: 'text',
            label: props.t('entity:license-no'),
            required: true,
            name: 'license',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'rutjfkde',
        },
       
        joining_date: {
            type: 'date',
            label: props.t('shorex:joining-date'),
            required: true,
            name: 'joining_date',
            col: ' col-sm-6 col-xl-4',
            placeholderText: '',
            className: 'form-control-lg',
            autoComplete: 'off',
            dateFormat:"dd/MM/yyyy",
        },
        bank_name: {
            type: 'text',
            label: props.t('shorex:bank-name'),
            required: true,
            name: 'bank_name',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        iban: {
            type: 'text',
            label: props.t('shorex:iban'),
            required: true,
            name: 'iban',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        vehicle_id: {
            key:"vehicle_id",
            type: 'advanceSelect',
            target:"vehicles",
            label: props.t('shorex:vehicle'),
            required: true,
            name: 'vehicle_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Assign Vehicles',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
 
        notes: {
            type: 'textarea',
            label: props.t('shorex:notes'),
            required: false,
            name: 'notes',
            rows:5,
            col:12,
            placeholder: props.t('shorex:enter-some-notes'),
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        heading: {
            type: 'h4',
            name: props.t('shorex:media'),
            className: 'form-control-lg',
        },

        license_img: {
            type: 'filePic',
            label: props.t('shorex:driving-license-image'),
            required: id ? false : true,
            name: 'license_img',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: ' form-control-lg ',
            autoComplete: 'off',
        },
        nif_img: {
            type: 'filePic',
            label: props.t('shorex:driving-id-image'),
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
            <h4 className="heading mb-4">{id ? props.t('shorex:edit-driver') : props.t('shorex:add-driver')}</h4>
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

export default withTranslation(['base', 'shorex', 'user', 'entity'])(AddDriver)
