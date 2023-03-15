import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'product.title', order: 'desc' }]

const InVehicle = (props) => {
    const columns = [
        // {
        //     dataField: 'id',
        //     text: props.t('id'),
        //     sort: true,
        // },
        {
            dataField: 'warehouse.manager',
            text: props.t('shorex:warehouse-manager'),
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">{props.t('shorex:not-assigned')}</span>
        },
        {
            dataField: 'product.title',
            text: props.t('shorex:product-name'),
            sort: true,
            //formatter: (cell, row) => {props.t('shorex:aluminum-cans')}
        },
        {
            dataField: 'wtqt',
            text: props.t('shorex:quantity'),
            sort: true,
            formatter: (cell) => cell ?? 0
        },
        {
            dataField: 'updated_at',
            text: props.t('shorex:delivery-time'),
            sort: true,
            formatter: (cell) => {
                const date = new Date(cell);
                return `${moment(date).format('MMM DD, YYYY')} at ${moment(date).format('hh:ss a')}`
            }
        },
        {
            dataField: 'vehicle_number',
            text: props.t('shorex:vehicle-number'),
            sort: true,
        },
        {
            dataField: 'driver_name',
            text: props.t('shorex:driver-name'),
            sort: true,
            
        },
        {
            dataField: 'status',
            text: props.t('status'),
            sort: true,
            formatter: (cell) => <span className="text-red">{props.t('shorex:on-the-way')}</span>
        },
    ]

    return (
        <RemoteTable
            entity="stock"
            customEntity="stock"
            columns={columns}
            sort={defaultSorted}
            hideEdit={true}
            hideDetail={true}
            disableDelete={false}
            hideQuickSearch={true}
            hideActionCol={true}
            query={{'status' : 'Received'}}
            
        />
    )
}

export default withTranslation(['base', 'shorex'])(InVehicle)