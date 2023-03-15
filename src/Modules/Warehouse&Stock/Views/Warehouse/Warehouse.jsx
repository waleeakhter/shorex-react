import React,{useCallback} from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import Switch from './Switch'
import moment from 'moment'
import {withTranslation} from 'react-i18next'
import Api from '@evenlogics/whf-api'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { deleteItem } from '../../../Helper/helper'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]

const Warehouse = (props) => {
    const [query,setQuery]=useState(false)
    const toggleQuery=useCallback( () => {
        setQuery((prev)=>!prev)
      }, [] )
    
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const disableDelete=!currentUser.roles.includes('Admin')
    const columns = [

        {
            dataField: 'title',
            text: props.t('shorex:warehouse-name'),
            sort: true,
        },
        {
            dataField: 'manager',
            text: props.t('shorex:storekeeper-name'),
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">{props.t('shorex:not-assigned')}</span>
        },
        {
            dataField: 'item_type',
            text: props.t('type'),
            sort: true,
        },
        (!props.hide && {
            dataField: 'status',
            text: props.t('shorex:status'),
            sort: true,
            formatter: (cell, data) => <Switch data={data} status={cell} onChange={(e)=>{
                // console.log(cell)
                Api.request('get',`/warehouses/${data.id}/status/${cell?0:1}`).then(()=>{
                    
                }).catch((err)=>{
                    Swal.fire('Cannot perform operation',err?.response?.data?.error,'error')
                }).finally(()=>toggleQuery())
            }} />
        }),
        {
            dataField: 'stock',
            text: props.t('shorex:available-stock'),
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">{props.t('shorex:not-available')}</span>
        },
        {
            dataField: 'created_at',
            text: props.t('shorex:create-at'),
            sort: true,
            formatter: cell => {
                return `${moment(cell).format('MMM DD, YYYY')} at ${moment(cell).format('hh:ss a')}`
            }
        }
    ]

    const deleteCallback=(e)=>{
        deleteItem(e.id, 'warehouses',props.t)
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
        <div className="Warehouse">
            <RemoteTable
                entity="warehouses"
                customEntity="warehouses"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={true}
                hideQuickSearch={true}
                hideActionCol={props.hide}
                showAdvanceFilters={true}
                filters={props.filters}
                csvDownload={props?.csvDownload ? true : false}
                Query={query}
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

export default withTranslation(['base', 'shorex'])(Warehouse)