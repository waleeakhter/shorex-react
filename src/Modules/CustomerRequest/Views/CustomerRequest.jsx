import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, } from "react-bootstrap";
import map from './../../../assets/images/map.svg'
import "./CustomerRequest.scss"
const defaultSorted = [{ dataField: 'customer.first_name', order: 'desc' }]
const columns = [

  {
    dataField: 'customer.first_name',
    text: 'Customer Name',
    sort: true,
    formatter: (cell, row) => cell + ' ' + row?.customer?.last_name
  },
  {
    dataField: 'customer.business_name',
    text: 'Business Name',
    sort: true,
  },
  {
    dataField: 'customer.address',
    text: 'Location',
    sort: true,
    formatter: (cell) => <address className="mb-0 addressTag"> <img src={map} alt="" /> <span>{cell}</span></address>
  },
  {
    dataField: 'customer.post_code',
    text: 'Postal Code',
    sort: true,
  },
  {
    dataField: 'quantity',
    text: 'Quantity',
    sort: true,
    formatter: (cell) => '20 Bags'
  },
  {
    dataField: 'schedule',
    text: 'Pickup Time & Date',
    sort: true,
    formatter: (cell, row) => {
      let dates = JSON.parse(row.schedule);
      console.log(dates)
      return Object.keys(dates).length > 0 &&
        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
          <li>Date:
            <ol className="ps-3">
              {dates?.date.map((date, i) => <li key={i.toString()}><span className="badge badge-light">{date}</span></li>)}
            </ol>
          </li>
          {dates.morning_start_time && <> <li><h6 className="mb-0">Morning Time</h6></li>
            <li><small>Start: {dates.morning_start_time}</small> <small>End: {dates.morning_end_time}</small></li></>}
          {dates.evening_start_time && <> <li><h6 className="mb-0">Evening Time</h6></li>
            <li><small>Start: {dates.evening_start_time}</small> <small>End: {dates.evening_end_time}</small></li></>}
        </ul>
    }
  },
  {
    dataField: 'status',
    text: 'Status',
    sort: true,
    formatter: cell => <span className="text-red">{cell}</span>
  },
]

const filters = {
  name: {
    type: 'advanceSelect',
    label: 'Sort By',
    name: 'sortby',
    col: ' col-md-4 col-xxl-3 ',
    options: [
      { label: 'Metal', value: 'Metal' }
    ]
  },
  time: {
    type: 'advanceSelect',
    label: 'Pickup Time',
    name: 'time',
    col: ' col-md-4 col-xxl-3 ',
    options: [
      { label: '10:30Am', value: '10:30Am' }
    ]
  },

  postal: {
    type: 'text',
    label: 'Postal Code',
    name: 'postal',
    col: ' col-md-4 col-xxl-3 ',

  },
  Quantities: {
    type: 'advanceSelect',
    label: 'Quantities',
    name: 'Quantities',
    col: ' col-md-4 col-xxl-3 ',
    options: [
      { label: '20', value: '20' }
    ]
  },
}

const CustomerRequest = (props) => {


  const customerDetail = (row) => {
    console.log(row)
    props.history.push(`/customer-request/${row.id}/details`)
  }
  const handleDistribute = (rows) => {
    console.log(rows)
    rows.length > 0 && props.history.push({
      pathname: '/lists',
      requests: rows
    });
  }
  return (
    <div className="CustomerRequest">
      <Row className="align-items-center ">
        <Col sm="6" className="text-start">
          <h4 className="heading">Customers Requests</h4>
        </Col>
      </Row>

      <RemoteTable
        entity="recycles"
        customEntity="recycles"
        columns={columns}
        sort={defaultSorted}
        hideEdit={true}
        hideDetail={true}
        disableDelete={false}
        showAdvanceFilters={true}
        filters={filters}
        hideQuickSearch={true}
        query={{ status: 'pending' }}
        selectedRows={true}
        getCustomRows={
          {
            callback: handleDistribute,
            heading: 'Assign To Driver',
            color: 'primary',
            className: "hello"
          }
        }
        customButton={{
          name: "Detail",
          color: "success",
          callback: customerDetail,
        }}
      />
    </div>
  )
}

export default CustomerRequest