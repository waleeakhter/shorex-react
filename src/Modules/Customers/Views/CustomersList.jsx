import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ToggleButtons from '../../../Common/ToggleButtons/ToggleButtons'
import ListView from './../../../Common/ListView/ListView'
import Filters from './Filters'
import {withTranslation} from 'react-i18next'

const CustomerDetail = (props) => {
  const [view, setView] = React.useState('list')
  const [filterShow, setFilterShow] = React.useState(false)
  const changeView = (view) => setView(view)
  const navigateToDeleted=()=>{
    props.history.push('/customers/deleted')
  }
  return (
    <>
      <Row>
        <Col md="4" className='d-flex'>
          <h4 className="heading mb-4 mr-3">{props.t('customers')}</h4> 
          <h4 className="heading mb-4" onClick={navigateToDeleted} >{props.t('shorex:deleted-customers')}</h4> 
        </Col>
        <Col md="8" className="text-end">
          <div className="d-flex align-items-center justify-content-end" style={{ gap: 20 }}>
            <ToggleButtons changeView={changeView} />
            {/* <Button variant="success" className="btn-add" onClick={() => props.history.push('/customers/add')}>{props.t('shorex:add-customer')}</Button> */}
            <Button variant="" className="btn-filter" onClick={() => setFilterShow(!filterShow)}>{props.t('shorex:filters')}</Button>
          </div>
        </Col>
      </Row>



      <ListView
        target="customers"
        deleteTarget="users"
        view={view}
        edit={`customers`}
        redirect={'customers/:id/profile'}
        Filters={Filters}
        filterShow={filterShow}
      />

    </>
  )
}

export default withTranslation(['base', 'shorex'])(CustomerDetail)