import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'first_name', order: 'desc' }]

const Customer = (props) => {

    const columns = [
        {
            dataField: 'first_name',
            text: props.t('shorex:customer-name'),
            sort: true,
            formatter: (cell, row) => cell + " " + row.last_name

        },
        {
            dataField: 'business_name',
            text: props.t('shorex:business-name'),
            sort: true,
        },
        {
            dataField: 'nif',
            text: props.t('id'),
            sort: true,
        },
        {
            dataField: 'post_code',
            text: props.t('shorex:postal-code'),
            sort: true,
        },
        {
            dataField: 'email',
            text: props.t('email'),
            sort: true,
        },
        {
            dataField: 'mobile',
            text: props.t('shorex:contact-number'),
            sort: true,
        },

        {
            dataField: 'earned_pts',
            text: props.t('shorex:gained-rewards'),
            sort: true,
            formatter: (cell) => {
                return <span className=" text-center">{cell ?? 0}</span>
            }
        },

    ]

    const filters = {
        account_creation_date: {
            type: 'advanceSelect',
            label: props.t('shorex:account-creation-date'),
            name: 'sort',
            col: ' col-md-4 col-xxl-3 ',
            options: [
                { label: props.t('shorex:newest'), value: 'id|desc' },
                { label: props.t('shorex:oldest'), value: 'id|asc' }
            ]
        },

        created_at_from: {
            type: 'date',
            label: props.t('shorex:date-range-start'),
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
        created_at_to: {
            type: 'date',
            label: props.t('shorex:date-range-end'),
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
    }

    return (
        <div className="Customer">
            <RemoteTable
                entity="customers"
                customEntity="customers"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={false}
                filters={filters}
                hideQuickSearch={true}
                hideActionCol={true}
                csvDownload={true}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Customer)