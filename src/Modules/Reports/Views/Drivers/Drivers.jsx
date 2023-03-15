import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'first_name', order: 'desc' }]

const Drivers = (props) => {
    const columns = [

        {
            dataField: 'first_name',
            text: props.t('shorex:customer-name'),
            sort: true,
            formatter: (cell, row) => cell + " " + row.last_name

        },
        {
            dataField: 'nif',
            text: props.t('id'),
            sort: true,
        },
        {
            dataField: 'email',
            text: props.t('email'),
            sort: true,
        },
        {
            dataField: 'mobile',
            text: props.t('shorex:customer-number'),
            sort: true,
        },
        {
            dataField: 'created_at',
            text: props.t('shorex:created-at'),
            sort: true,
            formatter: cell => {
                return `${moment(cell).format('MMM DD, YYYY')} at ${moment(cell).format('hh:ss a')}`
            }
        }

    ]
    const filters = {


        created_at: {
            type: 'date',
            label: props.t('shorex:account-creation-date'),
            name: 'created_at',
            col: ' col-md-4 col-xxl-3',
            placeholderText: "DD/MM/YYYY",
            dateFormat: "dd/MM/yyyy"
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
                entity="drivers"
                customEntity="drivers"
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

export default withTranslation(['base', 'shorex'])(Drivers)