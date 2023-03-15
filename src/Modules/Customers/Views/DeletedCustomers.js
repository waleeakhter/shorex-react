import React from 'react'
import { Row, Col } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'
import RemoteTable from '@evenlogics/whf-remote-table'
function DeletedCustomers(props) {
    const navigateToCustomers=()=>props.history.push('/customers')
    const defaultSorted = [{ dataField: 'id', order: 'desc' }]
    const columns = [
        {
            dataField: 'id',
            text: props.t('user:id'),
            sort: true,
            hidden:true
        },
        {
            dataField: 'username',
            text: props.t('user:username'),
            sort: true,
        },
        {
            dataField: 'email',
            text: props.t('base:email'),
            sort: true,
        },
        {
            dataField: 'fields.user_deleted_notes',
            text: props.t('shorex:notes'),
            sort: true,
        },
    ]
  return (
    <div>
        <Row>
        <Col md="4" className='d-flex'>
          <h4 className="heading mb-4 mr-3" onClick={navigateToCustomers} >{props.t('customers')}</h4> 
          <h4 className="heading mb-4"  >{props.t('shorex:deleted-customers')}</h4> 
        </Col>
      </Row>
      <Row>
      <RemoteTable
                entity="deleted-users"
                customEntity="deleted-users"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={true}
                hideQuickSearch={true}
                hideActionCol={true}
            />
      </Row>
    </div>
  )
}
export default withTranslation(['base', 'shorex','user'])(DeletedCustomers)