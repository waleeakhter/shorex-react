import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, } from "react-bootstrap";
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'customer.first_name', order: 'desc' }]

const UnsuccessfullRequest = (props) => {

  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const disableDelete=!currentUser.roles.includes('Admin')
  const columns = [

    {
      dataField: 'customer.first_name',
      text: props.t('shorex:customer-name'),
      sort: true,
      formatter: (cell, row) => cell + ' ' + row?.customer?.last_name
    },
    {
      dataField: 'customer.business_name',
      text: props.t('shorex:business-name'),
      sort: true,
    },
    {
      dataField: 'products',
      text: props.t('shorex:shorex-products'),
      sort: true,
      formatter: (cell) => {
        let count = 0;
        cell.map(pro => count += Number(pro.wtqt));
        return count
      }
    },
    {
      dataField: 'products',
      text: props.t('shorex:driver'),
      sort: true,
      formatter: (cell) => {
        return cell.length>=1?cell[0].driver_pivot.first_name+' '+cell[0].driver_pivot.last_name:''
      }
    },
    {
      dataField: 'driver_comments',
      text: props.t('shorex:reasons-to-unsuccessful'),
      sort: true,
    },
    {
      dataField: 'schedule',
      text: props.t('shorex:pickup-time'),
      sort: true,
      formatter: (cell) => {
        const dates = JSON.parse(cell);

        return Object.keys(dates).length > 0 &&
            <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
              <li>{props.t('shorex:date')}: {dates.date}</li>
              {dates.morning_start_time && <> <li><h6 className="mb-0">{props.t('morning-time')}:</h6></li>
                <li><small>{props.t('shorex:start')}: {dates.morning_start_time}</small> <small>{props.t('shorex:end')}: {dates.morning_end_time}</small></li></>}
              {dates.evening_start_time && <><li><h6 className="mb-0">{props.t('shorex:evening-time')}</h6></li>
                <li><small>{props.t('shorex:start')}: {dates.evening_start_time}</small> <small>{props.t('shorex:end')}: {dates.evening_end_time}</small></li></>}
            </ul>
      }
    },
  ]

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
          <h4 className="heading">{props.t('shorex:unsuccessful-requests')}</h4>
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
        hideQuickSearch={true}
        query={{ status: 'false' }}
        customButton={{
          name: props.t('shorex:detail'),
          color: "success",
          callback: customerDetail,
        }}
      //   Query={query}
      />
    </div>
  )
}

export default withTranslation(['base', 'shorex'])(UnsuccessfullRequest)