import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ToggleButtons from '../../../Common/ToggleButtons/ToggleButtons'
import ListView from './../../../Common/ListView/ListView'
import Filters from './Filters'
const CustomerDetail = (props) => {
  const [view, setView] = React.useState('list')
  const [filterShow, setFilterShow] = React.useState(false)
  const changeView = (view) => setView(view)




  return (
    <>
      <Row>
        <Col md="4">
          <h4 className="heading mb-4">Customers</h4>
        </Col>
        <Col md="8" className="text-end">
          <div className="d-flex align-items-center justify-content-end" style={{ gap: 20 }}>
            <ToggleButtons changeView={changeView} />
            <Button variant="success" className="btn-add" onClick={() => props.history.push('/customers/add')}>Add Customer</Button>
            <Button variant="" className="btn-filter" onClick={() => setFilterShow(!filterShow)}>Filters</Button>
          </div>
        </Col>
      </Row>



      <ListView
        target="customers"
        view={view}
        edit={`customers`}
        redirect={'customers/:id/profile'}
        Filters={Filters}
        filterShow={filterShow}
      />

    </>
  )
}

export default CustomerDetail