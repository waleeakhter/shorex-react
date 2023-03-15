import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'title', order: 'desc' }]

const BusinessCategories = (props) => {
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const disableDelete=!currentUser.roles.includes('Admin')
    const columns = [

        {
            dataField: 'title',
            text: props.t('shorex:holiday-title'),
            sort: true,
        },
        {
            dataField: 'notes',
            text: props.t('shorex:reason'),
            sort: true,
        },
        {
            dataField: 'date',
            text: props.t('shorex:date'),
            sort: true,
        },
    ]
    const editCallback = (row) => {
        props.history.push(`/apps/manage-official-holidays/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">{props.t('shorex:manage-official-holidays')}</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/apps/manage-official-holidays/add")}>{props.t('shorex:manage-holidays')}</Button>
                </Col>

                <Col sm="12">
                    <RemoteTable
                        entity="holidays"
                        customEntity="holidays"
                        columns={columns}
                        sort={defaultSorted}
                        hideEdit={true}
                        hideDetail={true}
                        disableDelete={disableDelete}
                        hideQuickSearch={true}
                        customButton={{
                            name: props.t('shorex:edit'),
                            color: "success",
                            callback: editCallback,
                        }}

                    />
                </Col>
            </Row>
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(BusinessCategories)