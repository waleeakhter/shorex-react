import React from 'react'
import Tabs from '../../../../Common/Tabs/Tabs'
import RecentRequests from "./RecentRequests"
import UserProfile from './../../../../Common/UserProfile/UserProfile'
const StorekeeperDetail = () => {
  const [key, setKey] = React.useState("Recents Requests")
  const callback = (tab) => {
    setKey(tab)
  }

  const tabs = [
    { name: "Recents Requests", component: <RecentRequests /> },
    { name: "Available Stocks", }
  ]
  return (
    <div>
      <Tabs tabs={tabs} current={key} callback={callback} />
      {tabs.map((tab, i) =>
        <div className={` col-xl-8 ${key === tab.name ? "d-block" : "d-none"}`} key={tab.name}>
          {tab.component}
        </div>
      )}
      <UserProfile />
    </div>
  )
}

export default StorekeeperDetail