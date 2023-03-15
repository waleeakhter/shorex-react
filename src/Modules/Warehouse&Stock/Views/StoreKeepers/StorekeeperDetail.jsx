import React,{useEffect,useState} from 'react'
import Tabs from '../../../../Common/Tabs/Tabs'
import RecentRequests from "./RecentRequests"
import UserProfile from './../../../../Common/UserProfile/UserProfile'
import {withTranslation} from 'react-i18next'
import Api from "@evenlogics/whf-api"

const StorekeeperDetail = (props) => {
  
  const { id } = props.match.params
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    Api.request("get", `/users/${id}`).then(res => {
      setProfile({ ...res.data })
  }).catch(err => console.log(err))
  }, [id])
  

  const [key, setKey] = React.useState(props.t('shorex:recent-requests'))
  const callback = (tab) => {
    setKey(tab)
  }

  const tabs = [
    { name: props.t('shorex:recent-requests'), component: <RecentRequests id={id} /> },
    // { name: props.t('shorex:available-stock'), }
  ]
  return (
    <div>
      <Tabs tabs={tabs} current={key} callback={callback} />
      {tabs.map((tab, i) =>
        <div className={` col-xl-8 ${key === tab.name ? "d-block" : "d-none"}`} key={tab.name}>
          {tab.component}
          {console.log(tab.name)}
        </div>
      )}
      <UserProfile profile={profile}/>
    </div>
  )
}

export default  withTranslation(['base', 'shorex'])(StorekeeperDetail)