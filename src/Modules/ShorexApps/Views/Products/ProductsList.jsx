import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col, Button } from 'react-bootstrap'
const defaultSorted = [{ dataField: 'title', order: 'desc' }]
const columns = [

  {
    dataField: 'product_img',
    text: 'Item',
    sort: true,
    formatter: (cell) => <img src={cell.url} alt={cell.name} style={{ height: 42, width: 42, objectFit: 'cover' }} />
  },
  {
    dataField: 'title',
    text: 'Sub Item Name',
    sort: true,
  },
  {
    dataField: 'questions',
    text: 'Quantity Question',
    sort: true,
  },
  {
    dataField: 'item_type',
    text: 'Item Type',
    sort: true,
  },
  {
    dataField: 'pts',
    text: 'Sub Item Points',
    sort: true,
  },
]


const ProductsList = (props) => {
  const editCallback = (row) => {
    props.history.push(`/apps/products/${row.id}/edit`)
  }
  return (
    <div className="products">
      <Row>
        <Col>
          <h4 className="heading mb-4">Products</h4>
        </Col>
        <Col className="text-end">
          <Button variant="success" onClick={() => props.history.push("/apps/products/add")}>Add Products</Button>
        </Col>
      </Row>
      <RemoteTable
        entity="products"
        customEntity="products"
        columns={columns}
        sort={defaultSorted}
        hideEdit={true}
        hideDetail={true}
        disableDelete={false}
        hideQuickSearch={true}
        customButton={{
          name:"Edit",
            color: "success",
            callback: editCallback,
          }}

      />
    </div>
  )
}

export default ProductsList