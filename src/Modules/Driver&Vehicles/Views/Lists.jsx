import React from 'react'
import { useLocation } from "react-router-dom";
import { Row, Col, Button } from 'react-bootstrap'
import ListView from './../../../Common/ListView/ListView'
import DriverFilters from "./Drivers/DriverFilters"
import VehiclesList from './Vehicles/VehiclesList'
import ToggleButtons from '../../../Common/ToggleButtons/ToggleButtons'
import Tabs from '../../../Common/Tabs/Tabs'
import Wrapper from '../../Helper/Wrapper';
import {withTranslation} from 'react-i18next'

const List = (props) => {
  const [view, setView] = React.useState('list')
  const [filterShow, setFilterShow] = React.useState(false)
  const [requests, setRequests] = React.useState(null)
  const changeView = (view) => setView(view)
  const location = useLocation();
  // tabs
  const tabs = [
    {
      name: props.t('shorex:drivers'),
      component: <ListView view={view} Filters={DriverFilters}
      deleteTarget="users"
        target="drivers" filterShow={filterShow}
        hide={requests ? true : false}
        edit={'lists/drivers'}
        redirect={requests ? "/lists/driver/:id/assign-driver" : "/lists/drivers/:id/profile"}
      />
    },
    !requests && { name: props.t('shorex:vehicles'), component: <VehiclesList /> }
  ]
  const [key, setKey] = React.useState(tabs.at(0).name);



  React.useEffect(() => {
    location.state && setKey(location.state?.key)
  }, [location.state])

  React.useEffect(() => {
    console.log(location?.requests, "requests")
    if (location?.requests) {
      setRequests(location?.requests)
      localStorage.setItem('requests', JSON.stringify(location?.requests));
    }
  }, [location.requests])





  const tabSelect = (tab) => setKey(tab)

  return (
    <Wrapper>
      <Row>
        <Col sm="6">
          <Tabs tabs={tabs} callback={tabSelect} current={key} />
        </Col>

        <Col sm="6" className="text-end">
          <div className={`d-flex align-items-center justify-content-end`} style={{ gap: 20 }}>
            {key === "Drivers" && <ToggleButtons changeView={changeView} />}
            {!requests && <Button variant="success" className="btn-add" onClick={() => props.history.push(`${key === "Vehicles" ? '/lists/vehicles/add' : `/lists/drivers/add`}`)}>
              {key === "Vehicles" ? props.t('shorex:add-vehicle') : props.t('shorex:add-driver')}
            </Button>}
            {key === "Drivers" && <Button variant="" className="btn-filter"
              onClick={() => {
                setFilterShow(!filterShow);
              }} >{props.t('general-filters')}</Button>}
          </div>
        </Col>

        {/* __list */}
        {
          tabs.map((tab, i) =>
            <Col xs="12" key={i.toString()} className={key === tab.name ? 'd-block' : 'd-none'}>
              {tab.component}
            </Col>
          )
        }
      </Row>

    </Wrapper>
  )
}

export default withTranslation(['base', 'shorex'])(List)