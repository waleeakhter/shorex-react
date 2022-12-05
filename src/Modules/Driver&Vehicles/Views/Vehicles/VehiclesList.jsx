import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import DocsModal from "./DocsModal"
const defaultSorted = [{ dataField: 'name', order: 'desc' }]
const columns = [

  {
    dataField: 'name',
    text: 'Vehicles Name',
    sort: true,
  
  },
  {
    dataField: 'reg_no',
    text: 'Vehicles Number',
    sort: true,
  },
  {
    dataField: 'trade_mark',
    text: 'Trade Mark',
    sort: true,
  },
  {
    dataField: 'chassis_no',
    text: 'Chassis Number',
    sort: true,
  },
  {
    dataField: 'engine_no',
    text: 'Engine Number',
    sort: true,
  },
  {
    dataField: 'reg_doc',
    text: 'Registration Documents',
    sort: true,
    formatter: (cell , row) => <DocsModal docs={row.reg_doc} /> 
  },
]


const VehiclesList = (props) => {

  return (
    <div className="VehiclesList">
      <RemoteTable
        entity="vehicles"
        customEntity="vehicles"
        columns={columns}
        sort={defaultSorted}
        hideEdit={false}
        hideDetail={true}
        disableDelete={false}
        showAdvanceFilters={true}
        hideQuickSearch={true}
        filters={props.filters}
        hideActionCol={props?.hideActionCol}
      //   Query={query}
      //   query={queryParams}
      />
    </div>
  )
}

export default VehiclesList