const filters = {


    date: {
      type: 'date',
      label: 'Registration Date',
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
    items: {
        type: 'advanceSelect',
        label: 'items',
        name: 'items',
        col: ' col-md-4 col-xxl-3',
        target: "products?limit=9999",
        optionValue : "id",
        optionLabel : 'title',

      },
  }

export default filters