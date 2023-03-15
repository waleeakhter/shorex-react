import React from 'react'
import { useLocation } from "react-router-dom";
import Tabs from '../../../../Common/Tabs/Tabs'
import Warehouse from './Warehouse'
import { Row, Col, Button } from 'react-bootstrap'
import ToggleButtons from '../../../../Common/ToggleButtons/ToggleButtons';
import ListView from '../../../../Common/ListView/ListView';
import Filters from './Filters';
import Api from '@evenlogics/whf-api'
import {withTranslation} from 'react-i18next'
// import moment from 'moment';

const Lists = (props) => {

  const [filters, setFilters] = React.useState(null)
  // const [storeKeepers, setStoreKeeper] = React.useState([])
  const [view, setView] = React.useState('list')
  
  const [filter, setFilter] = React.useState(true)
  const location = useLocation();
  const tabs = [
    { name: props.t('shorex:warehouses'), component: <Warehouse /> },
    {
      name: props.t('shorex:storekeeper'),
      component: <ListView  redirect="/warehouses-list/storekeepers/:id/details"  filterShow={filter} Filters={Filters} view={view} target="managers" deleteTarget='users' edit="warehouses-list/storekeepers" />
    }
  ]
  const [key, setKey] = React.useState(tabs[0].name)
  const changeView = (view) => setView(view)
  const callback = (tab) => {
    setKey(tab)
  }
  // const search = (_filters) => {
    
  //   let filters={..._filters}
  //   if(filters?.created_at){
  //     filters.created_at=moment(_filters.created_at).format('yyyy-MM-DD')
  //   }
  //   let params = ''
  //   if (Object.keys(filters).length > 0) {
  //     Object.keys(filters).forEach((key, i) => {
  //       if (filters[key] !== null) {
  //         params = `${params}${i !== 0 ? "&" : ""}${key}=${filters[key]}`
  //       }
  //     })
      
  //     setFilters(params)
  //   } else {
  //     setFilters(null)
  //   }
  // }

  React.useEffect(() => {
    console.log(location.state)
    location.state && setKey(location.state)
  }, [location.state])

  React.useEffect(() => {
    Api.request('get', `/managers?${filters === null ? "" : filters}`).then((res) => {
      // console.log(res)
      // setStoreKeeper(res.data)
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
            {(key === "Storekeeper" ||  key==="Almacenista") && <ToggleButtons changeView={changeView} />}

           
            <Button variant="success" className="btn-add" onClick={() =>
              props.history.push(`${key === "Warehouses" ? '/warehouses-list/add' : `/warehouses-list/storekeeper/add`}`)}>
              {/* Add {key === "Warehouses" ? 'Warehouses' : `Storekeeper`} */}

              {key === "Warehouses" ?props.t('shorex:add-warehouse'):props.t('shorex:add-storekeeper')}
            </Button>


            {(key === "Storekeeper" ||  key==="Almacenista") &&<Button variant="" className="btn-filter" onClick={() => {
              setFilter(!filter); !filter && setFilters(null)
            }} >Filters</Button>}
          </div>
        </Col>
      </Row>
      {/* {!filter && <Filters search={search} filter={storeKeepers} />} */}

      {tabs.map(tab =>
        <div className={` ${key === tab.name ? "d-block" : "d-none"}`} key={tab.name}>
          {tab.component}
        </div>
      )}
    </div>
  )
}

export default withTranslation(['base', 'shorex'])(Lists)