import React from 'react'
import { useLocation } from "react-router-dom";
import Tabs from '../../../../Common/Tabs/Tabs'
import Warehouse from './Warehouse'
import { Row, Col, Button } from 'react-bootstrap'
import ToggleButtons from '../../../../Common/ToggleButtons/ToggleButtons';
import ListView from '../../../../Common/ListView/ListView';
import Filters from './Filters';
import Api from '@evenlogics/whf-api'
const Lists = (props) => {

  const [filters, setFilters] = React.useState(null)
  const [storeKeepers, setStoreKeeper] = React.useState([])
  const [view, setView] = React.useState('list')

  const tabs = [
    { name: "Warehouses", component: <Warehouse /> },
    {
      name: "Storekeeper",
      component: <ListView  redirect="/warehouses-list/storekeepers/:id/details"  view={view} target="managers" edit="warehouses-list/storekeepers" />
    }
  ]
  const [key, setKey] = React.useState(tabs[0].name)
  const [filter, setFilter] = React.useState(true)
  const location = useLocation();

  const changeView = (view) => setView(view)
  const callback = (tab) => {
    setKey(tab)
  }
  const search = (filters) => {
    console.log(filters)
    let params = ''
    if (Object.keys(filters).length > 0) {
      Object.keys(filters).forEach((key, i) => {
        if (filters[key] !== null) {
          params = `${params}${i !== 0 ? "&" : ""}${key}=${filters[key]}`
        }
      })
      console.log(params)
      setFilters(params)
    } else {
      setFilters(null)
    }
  }

  React.useEffect(() => {
    console.log(location.state)
    location.state && setKey(location.state)
  }, [location.state])


  React.useEffect(() => {
    Api.request('get', `/managers?${filters === null ? "" : filters}`).then((res) => {
      console.log(res)
      setStoreKeeper(res.data)
    }).catch((err) => console.log(err))
  }, [filters])
  return (
    <div>
      <Row>
        <Col sm="6">
          <Tabs tabs={tabs} callback={callback} current={key} />
        </Col>
        <Col sm="6">
          <div className={`d-flex align-items-center justify-content-end`} style={{ gap: 20 }}>
            {key === "Storekeeper" && <ToggleButtons changeView={changeView} />}
            <Button variant="success" className="btn-add" onClick={() =>
              props.history.push(`${key === "Warehouses" ? '/warehouses-list/add' : `/warehouses-list/storekeeper/add`}`)}>
              Add {key === "Warehouses" ? 'Warehouses' : `Storekeeper`}
            </Button>
            {key === "Storekeeper" && <Button variant="" className="btn-filter" onClick={() => {
              setFilter(!filter); !filter && setFilters(null)
            }} >Filters</Button>}
          </div>
        </Col>
      </Row>
      {!filter && <Filters search={search} filter={storeKeepers} />}

      {tabs.map(tab =>
        <div className={` ${key === tab.name ? "d-block" : "d-none"}`} key={tab.name}>
          {tab.component}
        </div>
      )}
    </div>
  )
}

export default Lists