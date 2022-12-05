import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import ReportsTabs from './ReportsTabs'

const Reports = () => {
  const btn = { minWidth: 211.96, fontSize: 14, height: 35 }

  return (
    <>
      <Row className='align-items-center mb-5 gy-5'>
        <Col md="6">
          <h4 className="heading">Report</h4>
        </Col>
        <Col md="6" className="text-ends d-flex justify-content-end flex-wrap" style={{ gap: 20 }} >
          <Button variant="success" style={btn}>Export As Excel Sheet</Button>
          <Button variant="success" style={btn} >Download PDF</Button>
        </Col>
      </Row>

      <ReportsTabs />
    </>
  )
}

export default Reports