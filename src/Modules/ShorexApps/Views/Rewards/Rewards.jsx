import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
const defaultSorted = [{ dataField: 'points', order: 'desc' }]
const columns = [

    {
        dataField: 'points',
        text: 'Points',
        sort: true,
    },
    {
        dataField: 'reward',
        text: 'In Euros',
        sort: true,
        formatter: (cell) => cell+"€"
    },
]


const Rewards = (props) => {
    const editCallback = (row) => {
        props.history.push(`/apps/manage-rewards/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">Manage Rewards Points</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" onClick={() => props.history.push("/apps/manage-rewards/add")}>Add Rewards Points</Button>
                </Col>

                <Col >
                    <RemoteTable
                        entity="rewards"
                        customEntity="rewards"
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

export default Rewards