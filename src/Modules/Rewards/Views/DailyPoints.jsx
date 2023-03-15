import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'customer_name', order: 'desc' }]

const DailyPoints = (props) => {
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
            dataField: 'product_title',
            text: props.t('shorex:product-title'),
            sort: true,
        },
        {
            dataField: 'quantity',
            text: props.t('shorex:quantity'),
            sort: true,
        },
        {
            dataField: 'driver_name',
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
            dataField: 'gained_points',
            text: props.t('shorex:gained-points'),
            sort: true,
        },

    ]

    return (
        <div className="DailyPoints">
            <RemoteTable
                entity="daily-gained-points"
                customEntity="daily-gained-points"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={false}
                hideQuickSearch={true}
                hideActionCol={true}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(DailyPoints)