import React from 'react'
import ToggleButtons from './../../../Common/ToggleButtons/ToggleButtons'
import DashboardCard from '../../../Common/DashboardCard/DashboardCard'
import { dashboardCards, shorexApps, colorCards } from './Info'
import "./Dashboard.scss"
const Dashboard = () => {
  const [view, setView] = React.useState('list');
  const changeView = (view) => {
    setView(view)
  }
  return (
    <>
      <div className="d-flex justify-content-end">
        <ToggleButtons changeView={changeView} />
      </div>

      <div className={`dashboardCards ${view}`}>
        {dashboardCards.map(( card, index) => (

          <DashboardCard image={card.image} text1={card.text} type="dashboard" view={view}  key={card.id}/>

        ))}
      </div>
      
      <h1 className="w-100 heading text-dark mt-4">Shorex App</h1>
      <div  className={`dashboardCards ${view}`}>
        {shorexApps.map(( card, i) => (

          <DashboardCard image={card.image} text1={card.text} type="dashboard" view={view} key={card.id} />

        ))}
      </div>

      <div className={`dashboardCards list border-top pt-5 my-5`}>
        {colorCards.map(( card, i) => (

          <DashboardCard image={card.image} text1={card.text} text2={card.text2} type="colorFull" bg={card.bg} key={card.id} />

        ))}
      </div>
    </>
  )
}

export default Dashboard