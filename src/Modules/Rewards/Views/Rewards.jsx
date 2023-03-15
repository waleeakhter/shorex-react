import React from 'react'
import Tabs from './../../../Common/Tabs/Tabs'
import ClaimRewards from './ClaimRewards';
import DailyPoints from './DailyPoints';
import History from './History';
import {withTranslation} from 'react-i18next'

const Rewards = (props) => {
  const tabs = [
    {
      name: props.t('claim-rewards'),
      component: <ClaimRewards />
    },
    {
      name: props.t('reward-history'),
      component: <History />
    },
    {
      name: props.t('daily-gained-points'),
      component: <DailyPoints />
    }
  ]
  const [key, setKey] = React.useState(tabs.at(0).name);
  const callback = (key) => setKey(key)
  return (
    <div>
      <Tabs tabs={tabs} current={key} callback={callback} />
      {tabs.map((tab, i) =>
        <div className={key === tab.name ? 'd-block' : 'd-none'} key={i.toString()} >
          {tab.component}
        </div>
      )}
    </div>
  )
}

export default withTranslation(['shorex'])(Rewards)