import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]
const columns = [

    {
        dataField: 'title',
        text: 'Warehouse Name',
        sort: true,
    },
    {
        dataField: 'manager',
        text: 'Storekeeper Name',
        sort: true,
        formatter: (cell) => cell ?? <span className="text-red">Not Assigned</span>
    },
    {
        dataField: 'item_type',
        text: 'Type',
        sort: true,
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
        formatter: (cell, data) => ""
    },
    {
        dataField: 'stock',
        text: 'Available Stock',
        sort: true,
        formatter: (cell) => cell ?? <span className="text-red">Not Available</span>
    },
]



const RecentRequests = (props) => {

    return (
        <div className="RecentRequests">
            <RemoteTable
                entity="warehouses"
                customEntity="warehouses"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                hideQuickSearch={true}
            />
        </div>
    )
}

export default RecentRequests