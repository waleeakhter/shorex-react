import React,{useState} from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import DocsModal from "./DocsModal"
import {withTranslation} from 'react-i18next'
import { deleteItem } from '../../../Helper/helper'

const defaultSorted = [{ dataField: 'name', order: 'desc' }]

const VehiclesList = (props) => {
  const [query,setQuery]=useState(false)


  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const disableDelete=!currentUser.roles.includes('Admin')
  const columns = [
    {
      dataField: 'name',
      text: props.t('shorex:vehicle-name'),
      sort: true,

    },
    {
      dataField: 'reg_no',
      text: props.t('shorex:vehicle-number'),
      sort: true,
    },
    {
      dataField: 'trade_mark',
      text: props.t('shorex:trade-mark'),
      sort: true,
    },
    {
      dataField: 'chassis_no',
      text: props.t('shorex:chasis-number'),
      sort: true,
    },
    {
      dataField: 'engine_no',
      text: props.t('shorex:engine-number'),
      sort: true,
    },
    {
      dataField: 'reg_doc',
      text: props.t('shorex:registration-documents'),
      sort: true,
      formatter: (cell, row) => <DocsModal docs={row.reg_doc} />
    },
  ]
  const deleteCallback=(e)=>{
    deleteItem(e.id, 'vehicles',props.t)
        .then(res => {
            setQuery(true)
            setTimeout(() => {
                setQuery(false)
            }, 200);
        }).catch((err)=>{
            console.log(err);
        })
}
  return (
    <div className="VehiclesList">
      <RemoteTable
        entity="vehicles"
        customEntity="vehicles"
        columns={columns}
        sort={defaultSorted}
        hideEdit={false}
        hideDetail={true}
        disableDelete={true}
        showAdvanceFilters={true}
        hideQuickSearch={true}
        filters={props.filters}
        hideActionCol={props?.hideActionCol}
        csvDownload={props?.csvDownload ? true : false}
        Query={query}
      //   query={queryParams}
      {...(!disableDelete && {
        ...{
            customButton:
            {
                name: props.t('table-delete-btn'),
                color: 'danger',
                callback: deleteCallback
            }
        }
    })}
      />
    </div>
  )
}

export default withTranslation(['base', 'shorex'])(VehiclesList)