import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
const defaultSorted = [{ dataField: 'id', order: 'desc' }]
const columns = [
    {
        dataField: 'id',
        text: '#ID',
        sort: true,
    },
    {
        dataField: 'warehouse.manager',
        text: 'Warehouse Manager',
        sort: true,
        formatter: (cell) => cell ?? <span className="text-red">Not Assigned</span>
    },
    {
        dataField: 'title',
        text: 'Product Name',
        sort: true,
        formatter: (cell, row) => "Aluminum Cans"
    },
    {
        dataField: 'vehicle_stock',
        text: 'Quantity',
        sort: true,
        formatter: (cell) => cell ?? 0
    },
    {
        dataField: 'updated_at',
        text: 'Delivery Time',
        sort: true,
        formatter: (cell) => {
            const date = new Date(cell);
            return `${moment(date).format('MMM DD, YYYY')} at ${moment(date).format('hh:ss a')}`
        }
    },
    {
        dataField: 'driver.vehicle.reg_no',
        text: 'Vehicle Number',
        sort: true,
    },
    {
        dataField: 'driver.first_name',
        text: 'Driver Name',
        sort: true,
        formatter: (cell ,row) => `${cell} ${row.driver.last_name}` ?? <span className="text-red">Not Assigned</span>
    },
    {
        dataField: 'status',
        text: 'Status',
        sort: true,
        formatter: (cell) => <span className="text-success">Completed</span>
    },
]



const InWarehouse = (props) => {
    return (
        <RemoteTable
            entity="products"
            customEntity="products"
            columns={columns}
            sort={defaultSorted}
            hideEdit={true}
            hideDetail={true}
            disableDelete={false}
            hideQuickSearch={true}
            hideActionCol={true}
            query={{'stock_status' : 'Completed'}}
            
        />
    )
}

export default InWarehouse