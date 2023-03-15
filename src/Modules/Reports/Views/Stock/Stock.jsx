import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import moment from 'moment'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'id', order: 'desc' }]

const Stock = (props) => {
    const filters = {
        product_item_type: {
            type: 'advanceSelect',
            label: props.t('shorex:item-types'),
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "categories?limits=9999",
            optionValue: 'title',
            optionLabel: 'title',
        },
        warehouse_id: {
            type: 'advanceSelect',
            label: props.t('shorex:warehouses'),
            name: 'warehouse_id',
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "warehouses?limits=9999",
            optionValue: 'id',
            optionLabel: 'title',
        },

        storekeeper: {
            type: 'advanceSelect',
            label: props.t('shorex:storekeeper'),
            name: 'manager_id',
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "managers?limits=9999",
            optionValue: 'id',
            optionLabel: 'username',
        },

        driver_id: {
            type: 'advanceSelect',
            label: props.t('shorex:search-by-driver'),
            name: 'driver_id',
            col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
            target: "drivers?limits=9999",
            optionValue: 'id',
            optionLabel: 'username',
        },
        // business_category: {
        //     type: 'advanceSelect',
        //     label: 'business_categories',
        //     name: 'business_category',
        //     col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        //     target: "categories?limits=9999",
        //     optionValue: 'id',
        //     optionLabel: 'title',
        // },

        delivered_at: {
            type: 'date',
            label: props.t('shorex:delivery-date'),
            name: 'delivered_at',
            col: ' col-md-4 col-xxl-3 ',
            autoComplete: "off"
        },
        created_at_from: {
            type: 'date',
            label: props.t('shorex:date-range-start'),
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
        created_at_to: {
            type: 'date',
            label: props.t('shorex:date-range-end'),
            col: ' col-md-4 col-xxl-3',
            autoComplete: "off"
        },
    }

    const columns = [
        {
            dataField: 'id',
            text: '',
            sort: true,
        },
        {
            dataField: 'manager.first_name',
            text: props.t('shorex:storekeeper'),
            sort: true,
        },
        {
            dataField: 'product.title',
            text: props.t('product'),
            sort: true,
        },
        {
            dataField: 'wtqt',
            text: props.t('shorex:quantity'),
            sort: true,
        },
        {
            dataField: 'updated_at',
            text: props.t('shorex:delivery-time'),
            sort: true,
            formatter: cell => {
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
            text: props.t('shorex:status'),
            sort: true,
            formatter: (cell) => {
                return cell === "Completed" ? <span className='text-success'>{cell}</span> : <span className='text-red'>{cell}</span>
            }
        },

    ]

    return (
        <div className="Stock">
            <RemoteTable
                entity="stock"
                customEntity="stock"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={true}
                filters={filters}
                hideQuickSearch={true}
                hideActionCol={true}
                csvDownload={true}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Stock)