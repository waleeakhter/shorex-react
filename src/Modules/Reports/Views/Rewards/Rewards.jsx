import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
// import filters from './filters'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'customer_name', order: 'desc' }]

const Rewards = (props) => {
    const filters = {
        business_category: {
            type: 'advanceSelect',
            label: props.t('shorex:business-categories'),
            name: 'business_category',
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "categories?limits=9999",
            optionValue: 'id',
            optionLabel: 'title',
        },
        customer_id: {
            type: 'advanceSelect',
            label: props.t('shorex:customer'),
            name: 'customer_id',
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "customers?limits=9999",
            optionValue: 'id',
            optionLabel: 'username',
        },
        // postal_code: {
        //     type: 'text',
        //     label: props.t('shorex:postal-code'),
        //     name: 'postal_code',
        //     col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        // },
        sort: {
            type: 'advanceSelect',
            label: props.t('shorex:sort'),
            name: 'sort',
            col: ' col-md-4 col-xxl-3',
            placeholderText: "DD/MM/YYYY",
            dateFormat: "dd/MM/yyyy",
            options: [
                { value: "id|desc", label: props.t('shorex:newest') },
                { value: "id|asc", label: props.t('shorex:oldest') }
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
            name: 'created_at_to',
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
    }

    const columns = [

        {
            dataField: 'customer_name',
            text: props.t('shorex:customer-name'),
            sort: true,

        },
        {
            dataField: 'business_name',
            text: props.t('shorex:business-name'),
            sort: true,
        },
        {
            dataField: 'nif',
            text: props.t('shorex:items'),
            sort: true,
        },
        {
            dataField: 'post_code',
            text: props.t('shorex:quantity'),
            sort: true,
        },
        {
            dataField: 'email',
            text: props.t('shorex:driver-name'),
            sort: true,
        },
        {
            dataField: 'created_at',
            text: props.t('shorex:date-time'),
            sort: true,
            formatter: (cell) => {
                const date = new Date(cell);
                return `${moment(date).format('MMM DD, YYYY')} at ${moment(date).format('hh:ss a')}`
            }
        },

        {
            dataField: 'redeemed_points',
            text: 'Redeem Points',
            sort: true,
            formatter: (cell) => {
                return <span className="text-success"><i class="fa-regular fa-euro-sign"></i>{cell ?? 0}</span>
            }
        },

        {
            dataField: 'donate_points',
            text: props.t('shorex:donated-points'),
            sort: true,
            formatter: (cell) => {
                return <span className="text-success"><i class="fa-regular fa-euro-sign"></i>{cell ?? 0}</span>
            }
        },

    ]


    return (
        <div className="Rewards">
            <RemoteTable
                entity="redeem-rewards"
                customEntity="redeem-rewards"
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
                query={{status:1}}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Rewards)