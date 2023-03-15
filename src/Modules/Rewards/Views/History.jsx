import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'customer_name', order: 'desc' }]


const History = (props) => {
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
            text: props.t('shorex:gained-points'),
            sort: true,
            formatter: cell => cell > 0 ? cell : 0
        },
        {
            dataField: 'donate_points',
            text: props.t('shorex:donated-points'),
            sort: true,
            formatter: cell => cell > 0 ? cell : 0
        }
    ]

    return (
        <div className="History">
            <RemoteTable
                entity="redeem-rewards"
                customEntity="redeem-rewards"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={false}
                hideQuickSearch={true}
                hideActionCol={true}
                //   Query={query}
                query={{ status: 1 }}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(History)