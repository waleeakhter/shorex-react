import React from 'react'
import { Spinner, Alert } from 'react-bootstrap'
import CommonCard from "./../../../../Common/CommonCardView/CommonCard"
import {withTranslation} from 'react-i18next'

const DriverList = ({ drivers, view, spinner }) => {
  const [driversList, setDrivers] = React.useState(undefined)
  React.useEffect(() => {
    drivers.length > 0 && setDrivers(drivers)
  }, [drivers])

  return (
    <>
      {!spinner ?

        (
          driversList?.length > 0 ?
            <div className="customerRow">
              {driversList.map((driver, i) =>
                <CommonCard
                  text1={driver.first_name + " " + driver.last_name}
                  view={view} key={driver?.id}
                  link={`lists/drivers/${driver.id}/edit`}
                  avatar={driver?.avatar}
                />
              )}
            </div>
            : <Alert className="mt-5 fs-6" variant={'danger'}>
                {props.t('shorex:no-data-found')} <i className="fa-solid fa-diamond-exclamation"></i>
            </Alert>
        )

        : <div className="py-5 text-center"><Spinner animation="border" /></div>}
    </>
  )
}

export default withTranslation(['base', 'shorex'])(DriverList)