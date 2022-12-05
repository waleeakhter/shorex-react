import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]
const columns = [

    {
        dataField: 'title',
        text: 'Category Name',
        sort: true,
    },
]


const BusinessCategories = (props) => {
    const editCallback = (row) => {
        props.history.push(`/apps/business-categories/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">Business Categories</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/apps/business-categories/add")}>Add Business Categories</Button>
                </Col>

                <Col xxl="8" xl="9">
                    <RemoteTable
                        entity="categories"
                        customEntity="categories"
                        columns={columns}
                        sort={defaultSorted}
                        hideEdit={true}
                        hideDetail={true}
                        disableDelete={false}
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

export default BusinessCategories