import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import {withTranslation} from 'react-i18next'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]


const RecentRequests = (props) => {
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const disableDelete=!currentUser.roles.includes('Admin')
    const { id } = props;
    const columns = [

        {
            dataField: 'title',
            text: props.t('shorex:warehouse-name'),
            sort: true,
        },
        {
            dataField: 'manager',
            text:  props.t('shorex:storekeeper'),
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">Not Assigned</span>
        },
        {
            dataField: 'item_type',
            text:  props.t('shorex:type'),
            sort: true,
        },
        {
            dataField: 'stock',
            text: props.t('shorex:available-stock'),
            sort: true,
            formatter: (cell) => cell ?? <span className="text-red">{props.t('shorex:not-available')}</span>
        },
    ]

    return (
        <div className="RecentRequests">
            <RemoteTable
                entity="warehouses"
                customEntity="warehouses"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={disableDelete}
                hideQuickSearch={true}
                query={{ "manager_id": id }}
            />
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(RecentRequests)