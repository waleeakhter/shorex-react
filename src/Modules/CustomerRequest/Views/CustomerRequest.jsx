import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, } from "react-bootstrap";
import map from './../../../assets/images/map.svg'
import "./CustomerRequest.scss"
import {withTranslation} from 'react-i18next' 


const CustomerRequest = (props) => {

  const defaultSorted = [{ dataField: 'customer.first_name', order: 'desc' }]
  const columns = [

    {
      dataField: 'customer.first_name',
      text: props.t('shorex:customer-name'),
      formatter: (cell, row) => cell + ' ' + row?.customer?.last_name
    },
    {
      dataField: 'customer.business_name',
      text: props.t('shorex:business-name'),
    },
    {
      dataField: 'address',
      text: props.t('shorex:location'),
      sort: true,
      formatter: (cell) => <address className="mb-0 addressTag"> <img src={map} alt="" /> <span>{cell}</span></address>
    
    },
    {
      dataField: 'customer.post_code',
      text: props.t('shorex:postal-code'),
    },
    {
      dataField: 'quantity',
      text: props.t('shorex:quantity'),
      formatter: (cell,row) =>  row.products.reduce((accumulator, current) => accumulator + parseInt(current.wtqt),0),
      sort: true,
  
    },
    {
      dataField: 'schedule',
      text: props.t('shorex:pickup-time'),
      formatter: (cell, row) => {
        let dates = JSON.parse(row.schedule);
        return Object.keys(dates).length > 0 &&
            <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
              <li>Date:
                <ol className="ps-3">
                  {dates?.date?.map((date, i) => <li key={i.toString()}><span className="badge badge-light">{date}</span></li>)}
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
      text: props.t('shorex:status'),
      sort: true,
      formatter: cell => <span className="text-red">{cell}</span>
    },
  ]

  const filters = {
    sort: {
      type: 'advanceSelect',
      label: 'Sort',
      name: 'sort',
      col: ' col-md-4 col-xxl-3',
      placeholderText: "DD/MM/YYYY",
      dateFormat: "dd/MM/yyyy",
      options: [
          { value: "id|desc", label: "Newest" },
          { value: "id|asc", label: "Oldest" }
      ]
  },
    // date: {
    //   type: 'date',
    //   label: props.t('shorex:pickup-date'),
    //   name: 'date',
    //   col: ' col-md-4 col-xxl-3 ',
     

    // },

    // wtqt: {
    //   type:'text',
    //   label: props.t('shorex:quantities'),
    //   name: 'quantities',
    //   col: ' col-md-4 col-xxl-3 '}
  }

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
  const disableDelete=!JSON.parse(localStorage.getItem("currentUser"))?.roles?.includes('Admin')
  return (
    <div className="CustomerRequest">
      <Row className="align-items-center ">
        <Col sm="6" className="text-start">
          <h4 className="heading">{props.t('shorex:customer-requests')}</h4>
        </Col>
      </Row>

      <RemoteTable
        entity="recycles"
        customEntity="recycles"
        columns={columns}
        sort={defaultSorted}
        hideEdit={true}
        hideDetail={true}
        disableDelete={disableDelete}
        showAdvanceFilters={true}
        filters={filters}
        hideQuickSearch={true}
        query={{ status: 'pending' }}
        selectedRows={true}
        getCustomRows={
          {
            callback: handleDistribute,
            heading: props.t('shorex:assign-to-driver'),
            color: 'primary',
            className: "hello"
          }
        }
        customButton={{
          name: props.t('shorex:detail'),
          color: "success",
          callback: customerDetail,
        }}
      />
    </div>
  )
}

export default withTranslation(['base', 'shorex'])(CustomerRequest);