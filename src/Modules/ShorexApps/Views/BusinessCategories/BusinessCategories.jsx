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
            text: props.t('shorex:category-name'),
            sort: true,
        },
    ]

    const editCallback = (row) => {
        props.history.push(`/apps/business-categories/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">{props.t('shorex:business-categories')}</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/apps/business-categories/add")}>{props.t('shorex:add-business-categories')}</Button>
                </Col>

                <Col xxl="8" xl="9">
                    <RemoteTable
                        entity="categories"
                        customEntity="categories"
                        columns={columns}
                        sort={defaultSorted}
                        hideEdit={true}
                        hideDetail={true}
                        disableDelete={disableDelete}
                        hideQuickSearch={true}
                        customButton={{
                            name: "Edit",
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