import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'first_name', order: 'desc' }]

const Storekeeper = (props) => {
    const columns = [

        {
            dataField: 'first_name',
            text: props.t('shorex:customer-name'),
            sort: true,
            formatter: (cell, row) => cell + " " + row.last_name

        },
        {
            dataField: 'warehouse_title',
            text: props.t('shorex:warehouse'),
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
            dataField: 'joining_date',
            text: props.t('shorex:joining-date'),
            sort: true,
        },

    ]
    const filters = {


        created_at: {
            type: 'date',
            label: props.t('account-creation-date'),
            name: 'created_at',
            col: ' col-md-4 col-xxl-3',
            placeholderText: "DD/MM/YYYY",
            dateFormat: "dd/MM/yyyy"
        },
        created_at_from: {
            type: 'date',
            label: props.t('date-range-start'),
            name: 'created_at_from',
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
        created_at_to: {
            type: 'date',
            label: props.t('date-range-end'),
            name: 'created_at_to',
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
    }

    return (
        <div className="Storekeeper">
            <RemoteTable
                entity="managers"
                customEntity="managers"
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

export default withTranslation(['base', 'shorex'])(Storekeeper)