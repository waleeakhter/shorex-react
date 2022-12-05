import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]
const columns = [

    {
        dataField: 'title',
        text: 'Holiday Title',
        sort: true,
    },
    {
        dataField: 'notes',
        text: 'Reason',
        sort: true,
    },
    {
        dataField: 'date',
        text: 'Date',
        sort: true,
    },
]


const BusinessCategories = (props) => {
    const editCallback = (row) => {
        props.history.push(`/apps/manage-official-holidays/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">Manage Offical Holidays</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/apps/manage-official-holidays/add")}>Manage Holidays</Button>
                </Col>

                <Col sm="12">
                    <RemoteTable
                        entity="holidays"
                        customEntity="holidays"
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