import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import Switch from './Switch'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]




const Warehouse = (props) => {
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
       (!props.hide && {
            dataField: 'status',
            text: 'Status',
            sort: true,
            formatter: (cell, data) => <Switch data={data} status={cell} />
        }),
        {
            dataField: 'stock',
            text: 'Available Stock',
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">Not Available</span>
        },
    ]

    return (
        <div className="Warehouse">
            <RemoteTable
                entity="warehouses"
                customEntity="warehouses"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                hideQuickSearch={true}
                hideActionCol={props.hide}
                showAdvanceFilters={true}
                filters={props.filters}
            />
        </div>
    )
}

export default Warehouse