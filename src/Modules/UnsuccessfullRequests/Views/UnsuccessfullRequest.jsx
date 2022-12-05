import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, } from "react-bootstrap";
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
    dataField: 'products',
    text: 'Quantity',
    sort: true,
    formatter: (cell) => {
      let count = 0;
      cell.map(pro => count += Number(pro.wtqt));
      return count
    }
  },
  {
    dataField: 'driver_comments',
    text: ' Reason To Unsuccessfull ',
    sort: true,
  },
  {
    dataField: 'schedule',
    text: 'Pickup Time & Date',
    sort: true,
    formatter: (cell) => {
      const dates = JSON.parse(cell);

      return Object.keys(dates).length > 0 &&
        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
          <li>Date: {dates.date}</li>
          {dates.morning_start_time && <> <li><h6 className="mb-0">Morning Time</h6></li>
            <li><small>Start: {dates.morning_start_time}</small> <small>End: {dates.morning_end_time}</small></li></>}
          {dates.evening_start_time && <><li><h6 className="mb-0">Evening Time</h6></li>
            <li><small>Start: {dates.evening_start_time}</small> <small>End: {dates.evening_end_time}</small></li></>}
        </ul>
    }
  },
]



const UnsuccessfullRequest = (props) => {
  const customerDetail = (row) => {
    console.log(row)
    props.history.push({
      pathname: '/unsuccessfull-requests/detail',
      unSuccessFullRequest: row
    })
  }

  return (
    <div className="UnsuccessfullRequest">
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
        hideQuickSearch={true}
        query={{ status: 'false' }}
        customButton={{
          name: "Detail",
          color: "success",
          callback: customerDetail,
        }}
      //   Query={query}
      />
    </div>
  )
}

export default UnsuccessfullRequest