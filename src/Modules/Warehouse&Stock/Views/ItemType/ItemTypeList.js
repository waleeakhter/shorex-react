import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, Button } from "react-bootstrap";
import { withTranslation } from 'react-i18next'

const ItemTypeList = (props) => {

    const defaultSorted = [{ dataField: 'id', order: 'desc' }]
    const columns = [
        {
            dataField: 'id',
            text: props.t('shorex:id'),
            sort: true,
        },
        {
            dataField: 'title',
            text: props.t('shorex:title'),
            sort: true,
        }
    ]
    const disableDelete = !JSON.parse(localStorage.getItem("currentUser"))?.roles?.includes('Admin')
    return (
        <div className="CustomerRequest">
            <Row>
                <Col>
                    <h4 className="heading mb-4">{props.t('shorex:item-types')}</h4>
                </Col>
                <Col className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/warehouses/item-type/add")}>{props.t('shorex:add-item-types')}</Button>
                </Col>
            </Row>

            <RemoteTable
                entity="item-types"
                customEntity="item-types"
                columns={columns}
                sort={defaultSorted}
                hideEdit={true}
                hideDetail={true}
                disableDelete={disableDelete}
                hideQuickSearch={true}
            />

        </div>
    )
}

export default withTranslation(['base', 'shorex'])(ItemTypeList);