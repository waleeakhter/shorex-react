import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Col, Row, Button, } from "react-bootstrap";
import notiImage from "./../../../../assets/images/noti.jpg"
import "./Notifications.scss"
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'id', order: 'desc' }]

const Notifications = (props) => {
    
  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const disableDelete=!currentUser.roles.includes('Admin')
    let columns = [

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

    if (props.i18n.language === 'es') {
        columns.splice(
            0, 1,
            {
                dataField: 'name',
                text: '',
                sort: true,
                formatter: (cell, data) =>
                    <div className="notifcationList">
                        <img src={data?.notification_img ? data?.notification_img.url : notiImage } alt="" />
                        <div className="textDetails">
                            <h6>{data.title_fr} <span>({data.role_title ?? data.user_name})</span></h6>
                            <p>{data.text_fr}</p>
                            <span>{new Date(data.created_at).toDateString()}</span>
                        </div>
                    </div>
            }
        )
    }
    const filters = {
        // role_id: {
        //     type: 'advanceSelect',
        //     label: 'Role',
        //     col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        //     // target: "roles?limits=9999",
        //     options:
        //     [
        //         { "value": 3,"label": "Driver"},
        //         { "value": 4,"label": "Warehouse Manager"},
        //         { "value": 5, "label": "Business"},
        //         { "value": "null", "label": "Individual"}
        //     ],
        //     callback:(e)=>{
        //         console.log(e)
        //     }
        // },
        title: {
            type: 'text',
            label: props.t('shorex:search-by-title-name'),
            name: 'title',
            col: ' col-md-4 col-xxl-3 '
        },
    }

    const editCallback = (row) => {
        props.history.push(`/apps/notifications/${row.id}/edit`)
    }
    return (
        <div className="notifications">
            <Row className="align-items-center ">
                <Col sm="6" className="text-start">
                    <h4 className="heading">{props.t('shorex:notifications')}</h4>
                </Col>
                <Col sm="6" className="text-end">
                    <Button variant="success" className="btn-add margin-right" onClick={() => props.history.push("/apps/notifications/add")}>{props.t('shorex:create-notification')}</Button>
                </Col>
            </Row>
            <RemoteTable
                entity="push-notifications"
                customEntity="push-notifications"
                columns={columns}
                sort={defaultSorted}
                hideEdit={true}
                hideDetail={true}
                disableDelete={disableDelete}
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

export default withTranslation(['base', 'shorex'])(Notifications)