import React from 'react'
import VehiclesList from '../../../Driver&Vehicles/Views/Vehicles/VehiclesList'
import {withTranslation} from 'react-i18next'

const Vehicles = (props) => {
  const filters = {
    created_at_from: {
      type: 'date',
      label: props.t('shorex:date-range-start'),
      col: ' col-md-4 col-xxl-3',
      autoComplete: "off"
    },
    created_at_to: {
      type: 'date',
      label: props.t('shorex:date-range-end'),
      col: ' col-md-4 col-xxl-3',
      autoComplete: "off"
    },
    // account_creation_date: {
    //   type: 'advanceSelect',
    //   label: props.t('shorex:account-creation-date'),
    //   name: 'sort',
    //   col: ' col-md-4 col-xxl-3 ',
    //   options: [
    //     { label: props.t('shorex:newest'), value: 'id|desc' },
    //     { label: props.t('shorex:oldest'), value: 'id|asc' }
    //   ]
    // },

  }

  return (
    <VehiclesList hideActionCol={true} filters={filters} csvDownload={true} />
  )
}

export default withTranslation(['base', 'shorex'])(Vehicles)