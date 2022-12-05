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
    
    oldest: {
        type: 'advanceSelect',
        label: 'Oldest',
        name: 'oldest',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        options: [
            { label : "Last Year" , value: "Last Year "},
            { label : "Last 2 Years" , value: "Last 2 Years"}
        ]
    },
    newest: {
        type: 'advanceSelect',
        label: 'Newest',
        name: 'newest',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        options: [
            { label : "This Year" , value: "This Year "},
        ]
    },
     date: {
        type: 'date',
        label: 'Date Range',
        name: 'date',
        col: ' col-md-4 col-xxl-3',
    },
}

export default filters