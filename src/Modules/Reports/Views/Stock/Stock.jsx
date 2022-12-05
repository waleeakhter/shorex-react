import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import filters from './filters'
const defaultSorted = [{ dataField: 'name', order: 'desc' }]
const columns = [

    {
        dataField: 'name',
        text: 'Storekeeper',
        sort: true,

    },
    {
        dataField: 'reg_no',
        text: 'Product Name',
        sort: true,
    },
    {
        dataField: 'engine_no',
        text: 'Quantity',
        sort: true,
    },
    {
        dataField: 'engine_no',
        text: 'Delivery Time',
        sort: true,
    },
    {
        dataField: 'engine_no',
        text: 'Vehicle Number',
        sort: true,
    },
    {
        dataField: 'trade_mark',
        text: 'Driver Name',
        sort: true,
    },

    {
        dataField: 'chassis_no',
        text: 'Status',
        sort: true,
        formatter: (cell, row) => {
            return row.id % 2 === 0 ? <span className='text-success'>Delivered</span> : <span className='text-red'>On the Way</span>
        }
    },

]

const Stock = (props) => {

    return (
        <div className="Stock">
            <RemoteTable
                entity="vehicles"
                customEntity="vehicles"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={true}
                filters={filters}
                hideQuickSearch={true}
                hideActionCol={true}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default Stock