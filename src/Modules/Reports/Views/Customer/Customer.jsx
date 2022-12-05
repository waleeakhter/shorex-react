import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
const defaultSorted = [{ dataField: 'first_name', order: 'desc' }]
const columns = [

    {
        dataField: 'first_name',
        text: 'Customer Name',
        sort: true,
        formatter : (cell , row) => cell +" "+ row.last_name

    },
    {
        dataField: 'business_name',
        text: 'Business Name',
        sort: true,
    },
    {
        dataField: 'nif',
        text: 'ID',
        sort: true,
    },
    {
        dataField: 'post_code',
        text: 'Postal Code',
        sort: true,
    },
    {
        dataField: 'email',
        text: 'Email',
        sort: true,
    },
    {
        dataField: 'mobile',
        text: 'Contact Number',
        sort: true,
    },

    {
        dataField: 'earned_pts',
        text: 'Gained Rewards',
        sort: true,
        formatter: (cell) => {
            return <span className=" text-center">{ cell ?? 0}</span>
        }
    },

]

const filters = {
    account_creation_date: {
        type: 'advanceSelect',
        label: 'Account Creation Date',
        name: 'account_creation_date',
        col: ' col-md-4 col-xxl-3 ',
        options: [
            { label: 'Newest', value: 'Newest' },
            { label: 'Oldest', value: 'Oldest' }
        ]
    },
    
    date: {
        type: 'date',
        label: 'Date Range',
        name: 'date',
        col: ' col-md-4 col-xxl-3',
    },
}


const Customer = (props) => {

    return (
        <div className="Customer">
            <RemoteTable
                entity="customers"
                customEntity="customers"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={false}
                filters={filters}
                hideQuickSearch={true}
                hideActionCol={true}
            //   Query={query}
            //   query={queryParams}
            />
        </div>
    )
}

export default Customer