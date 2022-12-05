import React from 'react'
import VehiclesList from '../../../Driver&Vehicles/Views/Vehicles/VehiclesList'
const Vehicles = () => {
  const filters = {


    date: {
      type: 'date',
      label: 'Date Range',
      name: 'date',
      col: ' col-md-4 col-xxl-3',
      placeholderText:"DD/MM/YYYY",
      dateFormat : "dd/MM/yyyy"
    },
    Newest: {
      type: 'date',
      label: 'Newest',
      name: 'Newest',
      col: ' col-md-4 col-xxl-3',
      placeholderText:"DD/MM/YYYY",
      dateFormat : "dd/MM/yyyy"
    },
    Oldest: {
      type: 'date',
      label: 'Oldest',
      name: 'Oldest',
      col: ' col-md-4 col-xxl-3',
      placeholderText:"DD/MM/YYYY",
      dateFormat : "dd/MM/yyyy"
    },
  }

  return (
    <VehiclesList hideActionCol={true} filters={filters} />
  )
}

export default Vehicles