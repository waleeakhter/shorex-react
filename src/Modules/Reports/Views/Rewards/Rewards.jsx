import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import filters from './filters'
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
        dataField: 'nif',
        text: 'Items',
        sort: true,
    },
    {
        dataField: 'post_code',
        text: 'Quantity',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Driver Name',
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
        dataField: 'redeem_amt',
        text: 'Redeem Points',
        sort: true,
        formatter: (cell) => {
            return <span className="text-success"><i class="fa-regular fa-euro-sign"></i>{cell ?? 0}</span>
        }
    },
    
    {
        dataField: 'donate_amt',
        text: 'Donated Money',
        sort: true,
        formatter: (cell) => {
            return <span className="text-success"><i class="fa-regular fa-euro-sign"></i>{cell ?? 0}</span>
        }
    },

]


const Rewards = (props) => {

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
                filters={ filters }
                hideQuickSearch={true}
                hideActionCol={true}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default Rewards