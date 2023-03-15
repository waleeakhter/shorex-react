import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]

const ProductsList = (props) => {
  
  const currentUser=JSON.parse(localStorage.getItem('currentUser'))
  const disableDelete=!currentUser.roles.includes('Admin')
  console.log(props.i18n.language)
  
  const columns = [

    {
      dataField: 'product_img',
      text: props.t('shorex:item'),
      sort: true,
      formatter: (cell) => <img src={cell.url} alt={cell.name} style={{ height: 42, width: 42, objectFit: 'cover' }} />
    },
    {
      dataField: 'title',
      text: props.t('shorex:sub-item-name'),
      sort: true,
    },
    {
      dataField: 'questions',
      text: props.t('shorex:quantity-question'),
      sort: true,
    },
    {
      dataField: 'item_type',
      text: props.t('shorex:item-types'),
      sort: true,
    },
    {
      dataField: 'pts',
      text: props.t('shorex:sub-item-points'),
      sort: true,
    },
  ]
  if (props.i18n.language === 'es') {
    columns.splice(
      1, 2,
      {
        dataField: 'title_fr',
        text: props.t('shorex:sub-item-name'),
        sort: true
      },
      {
        dataField: 'questions_fr',
        text: props.t('shorex:quantity-question'),
        sort: true,
      })
  }
  const editCallback = (row) => {
    props.history.push(`/apps/products/${row.id}/edit`)
  }
  return (
    <div className="products">
      <Row>
        <Col>
          <h4 className="heading mb-4">{props.t('shorex:shorex-products')}</h4>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={() => props.history.push("/apps/products/add")}>{props.t('shorex:add-products')}</Button>
        </Col>
      </Row>
      <RemoteTable
        entity="products"
        customEntity="products"
        columns={columns}
        sort={defaultSorted}
        hideEdit={true}
        hideDetail={true}
        disableDelete={disableDelete}
        hideQuickSearch={true}
        customButton={{
          name:props.t('edit'),
            color: "success",
            callback: editCallback,
          }}

      />
    </div>
  )
}

export default withTranslation(['base', 'shorex'])(ProductsList)