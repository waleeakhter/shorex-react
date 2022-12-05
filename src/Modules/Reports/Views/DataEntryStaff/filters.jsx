const filters = {
    delivery_date: {
        type: 'advanceSelect',
        label: 'Delivery Date',
        name: 'delivery_date',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        options: [
            { label: '26/10/2022', value: 'Metal' }
        ]
    },
    item_type: {
        type: 'advanceSelect',
        label: 'Item Type',
        name: 'item_type',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "products?limits=9999",
        optionValue: 'id',
        optionLabel: 'title',
    },
    warehouse: {
        type: 'advanceSelect',
        label: 'Warehouse',
        name: 'warehouse',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "warehouses?limits=9999",
        optionValue: 'id',
        optionLabel: 'title',
    },

    storekeeper: {
        type: 'advanceSelect',
        label: 'Storekeeper',
        name: 'manager',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "managers?limits=9999",
        optionValue: 'id',
        optionLabel: 'username',
    },

    drivers: {
        type: 'advanceSelect',
        label: 'Search By Driver',
        name: 'driver',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "drivers?limits=9999",
        optionValue: 'id',
        optionLabel: 'username',
    },
    business_category: {
        type: 'advanceSelect',
        label: 'business_categories',
        name: 'business_category',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "categories?limits=9999",
        optionValue: 'id',
        optionLabel: 'title',
    },
    
    date: {
        type: 'date',
        label: 'Date Range',
        name: 'date',
        col: ' col-md-4 col-xxl-3',
    },
}

export default filters