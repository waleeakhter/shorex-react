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
        dataField: 'nif',
        text: 'ID',
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

]
const filters = {


    date: {
      type: 'date',
      label: 'Account Creation Date',
      name: 'date',
      col: ' col-md-4 col-xxl-3',
      placeholderText:"DD/MM/YYYY",
      dateFormat : "dd/MM/yyyy"
    },
    date_range: {
      type: 'date',
      label: 'Date Range',
      name: 'Newest',
      col: ' col-md-4 col-xxl-3',
      placeholderText:"DD/MM/YYYY",
      dateFormat : "dd/MM/yyyy"
    },
  }

const Drivers = (props) => {

    return (
        <div className="Customer">
            <RemoteTable
                entity="drivers"
                customEntity="drivers"
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

export default Drivers