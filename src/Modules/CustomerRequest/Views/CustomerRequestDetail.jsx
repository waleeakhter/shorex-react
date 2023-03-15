import React from 'react'
import { Row, Col, Spinner, } from 'react-bootstrap'
import UserProfile from '../../../Common/UserProfile/UserProfile'
import './CustomerRequest.scss'
import ProductsList from './ProductsList'
import Api from '@evenlogics/whf-api'
import { toast } from "react-toastify"
import {withTranslation} from 'react-i18next'

const CustomerDetail = (props) => {
  const { id } = props.match.params;
  const [requests, setRequests] = React.useState({})
  const [spinner, setSpinner] = React.useState(true)
  React.useEffect(() => {
    id &&
      Api.request('get', `/recycles/${id}`)
        .then(res => {
          setRequests(res.data)
          setSpinner(false)
        })
        .catch(err => {
          console.error(err);
          toast.error(" Somthing Went Wrong ")
        })
  }, [id])

  return (
    <Row>
      <Col xl="8" >
        <h4 className="heading mb-4">{props.t('shorex:recent-requests')}</h4>
        {!spinner ?
          <ProductsList requests={requests} />
          :
          <div className="text-center py-5">
            <Spinner animation="border" />
          </div>
        }
      </Col>
      <Col xl="4" >
        <UserProfile profile={requests?.customer} />
      </Col>
    </Row>
  )
}

export default withTranslation(['base', 'shorex'])(CustomerDetail)