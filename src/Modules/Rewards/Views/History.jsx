import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
const defaultSorted = [{ dataField: 'customer_name', order: 'desc' }]
const columns = [

    {
        dataField: 'customer_name',
        text: 'Customer Name',
        sort: true,

    },
    {
        dataField: 'business_name',
        text: 'Business Name',
        sort: true,
    },
    {
        dataField: 'created_at',
        text: 'Date & Time',
        sort: true,
        formatter: (cell) => {
            const date = new Date(cell);
            return `${moment(date).format('MMM DD, YYYY')} at ${moment(date).format('hh:ss a')}`
        }
    },
    {
        dataField: 'redeemed_points',
        text: 'Gained Points',
        sort: true,
        formatter: cell => cell > 0 ? cell : 0
    },
    {
        dataField: 'donate_points',
        text: 'Donated Points',
        sort: true,
        formatter: cell => cell > 0 ? cell : 0
    }
]


const History = (props) => {

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

export default History