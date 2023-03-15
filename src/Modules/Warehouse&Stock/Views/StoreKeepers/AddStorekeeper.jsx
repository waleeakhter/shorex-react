import React from 'react'
import { FormGenerator } from '@evenlogics/whf-form-generator'
import {withTranslation} from 'react-i18next'

const AddStorekeeper = (props) => {
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
            placeholder: '',
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
            label: props.t('shorex:landline-number'),
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
        manager_id: {
            type: 'text',
            label: props.t('shorex:warehouse-manager-id'),
            required:true,
            name: 'manager_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'off',
        },
        password: {
            type: 'password',
            label: props.t('password'),
            required: id ? false : true,
            name: 'password',
            col: ' col-sm-6 col-xl-4',
            placeholder: '',
            className: 'form-control-lg',
            autoComplete: 'new-password',
        },
        warehouse_id: {
            type: 'advanceSelect',
            target:"warehouses?limit=9999",
            optionLabel: "title",
            optionValue: "id",
            label: props.t('shorex:warehouse'),
            required: true,
            name: 'warehouse_id',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Select warehouse',
            className: 'form-control-lg',
            autoComplete: 'off',
            // multi:true
        },
        iban: {
            type: 'text',
            label: props.t('shorex:iban'),
            required: true,
            name: 'iban',
            col: ' col-sm-6 col-xl-4',
            placeholder: 'Enter IBAN',
            className: 'form-control-lg',
            autoComplete: 'off',
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
 
        notes: {
            type: 'textarea',
            label: props.t('shorex:notes'),
            required: false,
            name: 'notes',
            rows:5,
            col:12,
            placeholder: '',
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
            <h4 className="heading mb-4">{id ? props.t('shorex:edit-storekeeper') : props.t('shorex:add-storekeeper')}</h4>
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

export default withTranslation(['base', 'shorex'])(AddStorekeeper)