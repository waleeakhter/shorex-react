const filters = {
    business_category: {
        type: 'advanceSelect',
        label: 'Business Categories',
        name: 'business_category',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "categories?limits=9999",
        optionValue: 'id',
        optionLabel: 'title',
    },
    customer: {
        type: 'advanceSelect',
        label: 'Customers',
        name: 'customer',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "customers?limits=9999",
        optionValue: 'id',
        optionLabel: 'username',
    },
    postal_code: {
        type: 'text',
        label: 'Postal Code',
        name: 'postal_code',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
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
    period_from: {
        type: 'date',
        label: 'Date Range Start',
        name: 'period_from',
        col: ' col-md-4 col-xxl-3',
        autoComplete: "off"
    },
    period_to: {
        type: 'date',
        label: 'Date Range End',
        name: 'period_to',
        col: ' col-md-4 col-xxl-3',
        autoComplete: "off"
    },
}

export default filters