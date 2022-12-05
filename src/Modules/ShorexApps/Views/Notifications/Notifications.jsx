import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, Button, } from "react-bootstrap";
import notiImage from "./../../../../assets/images/noti.jpg"
import "./Notifications.scss"
const defaultSorted = [{ dataField: 'id', order: 'desc' }]
const columns = [

    {
        dataField: 'id',
        text: '',
        sort: true,
        formatter: (cell, data) =>
            <div className="notifcationList">
                <img src={data?.notification_img ? data?.notification_img.url : notiImage } alt="" />
                <div className="textDetails">
                    <h6>{data.title} <span>({data.role_title ?? data.user_name})</span></h6>
                    <p>{data.text}</p>
                    <span>{new Date(data.created_at).toDateString()}</span>
                </div>
            </div>
    },
]
const filters = {
    name: {
        type: 'text',
        label: 'Search By Name',
        name: 'name',
        col: ' col-md-4 col-xxl-3 ',
    },
    id: {
        type: 'text',
        label: 'Search By ID',
        name: 'id',
        col: ' col-md-4 col-xxl-3 ',

    },
}


const Notifications = (props) => {
    const editCallback = (row) => {
        props.history.push(`/apps/notifications/${row.id}/edit`)
    }
    return (
        <div className="notifications">
            <Row className="align-items-center ">
                <Col sm="6" className="text-start">
                    <h4 className="heading">Notifications</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" className="btn-add margin-right" onClick={() => props.history.push("/apps/notifications/add")}>Create Notification</Button>
                </Col>
            </Row>
            <RemoteTable
                entity="push-notifications"
                customEntity="push-notifications"
                columns={columns}
                sort={defaultSorted}
                hideEdit={true}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={true}
                filters={filters}
                hideQuickSearch={true}
                customButton={{
                    name: "Edit",
                    color: "success",
                    callback: editCallback,
                }}
            //   Query={query}
            //   query={queryParams}
            />
        </div >
    )
}

export default Notifications