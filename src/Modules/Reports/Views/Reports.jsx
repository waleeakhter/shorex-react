import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ReportsTabs from './ReportsTabs'
import {withTranslation} from 'react-i18next'

const Reports = (props) => {
  // const btn = { minWidth: 211.96, fontSize: 14, height: 35 }

  return (
    <>
      <Row className='align-items-center mb-5 gy-5'>
        <Col md="6">
          <h4 className="heading">{props.t('shorex:reports')}</h4>
        </Col>
        <Col md="6" className="text-ends d-flex justify-content-end flex-wrap" style={{ gap: 20 }} >
          {/* <Button variant="success" style={btn}>Export As Excel Sheet</Button> */}
          {/*<Button variant="success" style={btn} >{props.t('shorex:download-pdf')}</Button>*/}
        </Col>
      </Row>

      <ReportsTabs />
    </>
  )
}

export default withTranslation(['base', 'shorex'])(Reports)