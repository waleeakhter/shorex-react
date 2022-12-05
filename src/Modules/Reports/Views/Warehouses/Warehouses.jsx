import React from 'react'
import Warehouse from './../../../Warehouse&Stock/Views/Warehouse/Warehouse'
import filters from './filters'
const Warehouses = () => {
  return (
   <Warehouse hide={true} filters={ filters } />
  )
}

export default Warehouses