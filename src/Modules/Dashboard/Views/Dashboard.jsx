import React,{useEffect,useState} from 'react'
import "./Dashboard.scss"
import Api from '@evenlogics/whf-api'
import {NavLink} from 'react-router-dom';
import {withTranslation} from 'react-i18next'
import { dashboardCards, shorexApps } from './Info'
import coloricon2 from './../../../assets/images/coloricon2.svg'
import coloricon1 from './../../../assets/images/coloricon1.svg'
import coloricon4 from './../../../assets/images/coloricon4.svg'
import coloricon3 from './../../../assets/images/coloricon3.svg'
import ToggleButtons from './../../../Common/ToggleButtons/ToggleButtons'
import DashboardCard from '../../../Common/DashboardCard/DashboardCard'
const Dashboard = (props) => {
  const [stats, setstats] = useState({
    customers_available_rewards: { id: 1, image: coloricon1, text: 'shorex:customer-available', text2: '', bg: "var(--pink)" },
    claimed_rewards:{ id: 2, image: coloricon2, text: 'shorex:claimed-rewards', text2: '', bg: "var(--green)" },
    total_customers:{ id: 3, image: coloricon3, text: 'shorex:total-num-customers', text2: '', bg: "var(--blueCard)" },
    total_donated_rewards:{ id: 4, image: coloricon4, text: 'shorex:total-donated-rewards', text2: '', bg: "var(--purple)" },

  })
  
  const [view, setView] = React.useState('list');
  const changeView = (view) => setView(view)
  
  useEffect(() => {
    Api.request('get','/dashboard-stats').then(({data})=>{
        setstats((stats)=>{
            stats.customers_available_rewards.text2=data.customers_available_rewards
            stats.claimed_rewards.text2=data.claimed_rewards
            stats.total_customers.text2=data.total_customers
            stats.total_donated_rewards.text2=data.total_donated_rewards
            return JSON.parse(JSON.stringify(stats))
        })
    }).catch((err)=>console.log(err))
  }, [])
  
  return (
    <>
      <div className="d-flex justify-content-end">
        <ToggleButtons changeView={changeView} />
      </div>

      <div className={`dashboardCards ${view}`}>
        {dashboardCards.map(( card, index) => (
          <NavLink key={card.id} to={card?.path||''}  >
            <DashboardCard image={card.image} text1={props.t(card.text)} type="dashboard" view={view}  key={card.id}/>
          </NavLink>

        ))}
      </div>
      
      <h1 className="w-100 heading text-dark mt-4">Shorex App</h1>
      <div  className={`dashboardCards ${view}`}>
        {shorexApps.map(( card, i) => (
          <NavLink key={card.id} to={card?.path||''}  >
          <DashboardCard image={card.image} text1={props.t(card.text)} type="dashboard" view={view} key={card.id} />
          </NavLink>
        ))}
      </div>

      <div className={`dashboardCards list border-top pt-5 my-5`}>
        {Object.keys(stats).map(( key, i) => 
           {

             const card=stats[key]
             return <DashboardCard image={card.image} text1={props.t(card.text)} text2={props.t(card.text2)} type="colorFull" bg={card.bg} key={card.id} />

           }

        )}
      </div>
    </>
  )
}

export default withTranslation(['base', 'shorex'])(Dashboard);