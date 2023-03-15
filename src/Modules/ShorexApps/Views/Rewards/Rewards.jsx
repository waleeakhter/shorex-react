import React, {useState} from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'points', order: 'desc' }]

const Rewards = (props) => {
    const [showAddBtn, setShowAddBtn] = useState(false)
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const disableDelete=!currentUser.roles.includes('Admin')
    const columns = [

        {
            dataField: 'points',
            text: props.t('shorex:points'),
            sort: true,
        },
        {
            dataField: 'reward',
            text: props.t('shorex:in-euros'),
            sort: true,
            formatter: (cell) => cell+"€"
        },
    ]

    const editCallback = (row) => {
        props.history.push(`/apps/manage-rewards/${row.id}/edit`)
    }
    return (
        <div className="business-categories">
            <Row>
                <Col sm="6">
                    <h4 className="heading mb-4">{props.t('shorex:manage-rewards')}</h4>
                </Col>
                <Col sm="6" className="text-end">
               { showAddBtn && <Button variant="success" onClick={() => props.history.push("/apps/manage-rewards/add")}>{props.t('shorex:add-reward-points')}</Button> }
                </Col>

                <Col >
                    <RemoteTable
                        entity="rewards"
                        customEntity="rewards"
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
                        getRows={(rows)=>{
                                setShowAddBtn(!rows.length)
                        }}

                    />
                </Col>
            </Row>
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Rewards)