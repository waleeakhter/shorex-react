import React from 'react'
import Tabs from '../../../Common/Tabs/Tabs'
import Stock from './Stock/Stock'
import Customer from './Customer/Customer'
import Rewards from './Rewards/Rewards'
import Vehicles from './Vehicle/Vehicles'
import Warehouses from './Warehouses/Warehouses'
import Drivers from './Drivers/Drivers'
import Storekeeper from './Storekeeper/Storekeeper'
import DataEntryStaff from './DataEntryStaff/DataEntryStaff'

const ReportsTabs = () => {
    const tabs = [
        { name: 'Available Stock', component: <Stock /> },
        { name: 'Customer', component: <Customer /> },
        { name: 'Rewards', component: <Rewards /> },
        { name: 'Vehicle', component: <Vehicles /> },
        { name: 'Warehouses', component: <Warehouses /> },
        { name: 'Drivers', component: <Drivers /> },
        { name: 'Storekeeper', component: <Storekeeper /> },
        { name: 'Data Entry Staff', component: <DataEntryStaff /> },

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

export default ReportsTabs