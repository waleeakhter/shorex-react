import React from 'react'
import Tabs from '../../../Common/Tabs/Tabs'
import Stock from './Stock/Stock'
import Customer from './Customer/Customer'
import Rewards from './Rewards/Rewards'
import Vehicles from './Vehicle/Vehicles'
import Warehouses from './Warehouses/Warehouses'
import Drivers from './Drivers/Drivers'
import Storekeeper from './Storekeeper/Storekeeper'
// import DataEntryStaff from './DataEntryStaff/DataEntryStaff'
import {withTranslation} from 'react-i18next'

const ReportsTabs = (props) => {
    const tabs = [
        { name: props.t('shorex:available-stock'), component: <Stock /> },
        { name: props.t('shorex:customer'), component: <Customer /> },
        { name: props.t('shorex:rewards'), component: <Rewards /> },
        { name: props.t('shorex:vehicle'), component: <Vehicles /> },
        { name: props.t('shorex:warehouses'), component: <Warehouses /> },
        { name: props.t('shorex:drivers-vehicles'), component: <Drivers /> },
        { name: props.t('shorex:storekeeper'), component: <Storekeeper /> },
        // { name: props.t('shorex:data-entry-staff'), component: <DataEntryStaff /> },

    ]
    const [key, setKey] = React.useState(tabs.at(0).name)
    const callback = (key) => setKey(key)
    return (
        <>
            <Tabs tabs={tabs} current={key} callback={callback} style={{ gap: 20, flexWrap: 'wrap' }} childStyle={{ flex: '1 1 auto' }} />

            {tabs.map((tab, i) =>
                <div className={`mt-5 ${key === tab.name ? 'd-block' : 'd-none'}`} key={i.toString()}>
                    {tab.component}
                </div>
            )}
        </>
    )
}

export default withTranslation(['base', 'shorex'])(ReportsTabs)