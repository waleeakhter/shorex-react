
const filters = {


  created_at: {
    type: 'date',
    label: 'Registration Date',
    name: 'created_at',
    col: ' col-md-4 col-xxl-3',
    placeholderText: "DD/MM/YYYY",
    dateFormat: "dd/MM/yyyy"
  },
  sort: {
    type: 'advanceSelect',
    label: 'Sort',
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
    label: 'Item Type',
    name: 'item_type',
    col: ' col-md-4 col-xxl-3',
    target: "products?limit=9999",
    optionValue: "title",
    optionLabel: 'title',

  },

}

export default filters