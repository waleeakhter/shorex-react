import React from 'react'
import Warehouse from './../../../Warehouse&Stock/Views/Warehouse/Warehouse'
import {withTranslation} from 'react-i18next'
// import filters from './filters'
const Warehouses = (props) => {
  const filters = {
    created_at: {
      type: 'date',
      label: props.t('shorex:registration-date'),
      name: 'created_at',
      col: ' col-md-4 col-xxl-3',
      placeholderText: "DD/MM/YYYY",
      dateFormat: "dd/MM/yyyy"
    },
    sort: {
      type: 'advanceSelect',
      label: props.t('shorex:sort'),
      name: 'sort',
      col: ' col-md-4 col-xxl-3',
      placeholderText: "DD/MM/YYYY",
      dateFormat: "dd/MM/yyyy",
      options: [
        { value: "id|desc", label: "Newest" },
        { value: "id|asc", label: "Oldest" }
      ]
    },
    item_type: {
      type: 'advanceSelect',
      label: props.t('shorex:item-types'),
      name: 'item_type',
      col: ' col-md-4 col-xxl-3',
      target: "categories?limit=9999",
      optionValue: "title",
      optionLabel: 'title',

    }
  }

  return (
    <Warehouse hide={true} filters={filters} csvDownload={true} />
  )
}

export default withTranslation(['base', 'shorex'])(Warehouses)