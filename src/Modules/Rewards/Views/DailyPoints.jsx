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
        dataField: 'product_title',
        text: 'Items',
        sort: true,
    },
    {
        dataField: 'quantity',
        text: 'Quantity',
        sort: true,
    },
    {
        dataField: 'driver_name',
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
        dataField: 'gained_points',
        text: 'Gained Points',
        sort: true,
    },

]


const DailyPoints = (props) => {

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

export default DailyPoints