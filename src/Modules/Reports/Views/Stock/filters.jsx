const filters = {
    item_type: {
        type: 'advanceSelect',
        label: 'Item Type',
        name: 'item_type',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "categories?limits=9999",
        optionValue: 'title',
        optionLabel: 'title',
    },
    warehouse_id: {
        type: 'advanceSelect',
        label: 'Warehouse',
        name: 'warehouse_id',
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

    driver_id: {
        type: 'advanceSelect',
        label: 'Search By Driver',
        name: 'driver_id',
        col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
        target: "drivers?limits=9999",
        optionValue: 'id',
        optionLabel: 'username',
    },
    // business_category: {
    //     type: 'advanceSelect',
    //     label: 'business_categories',
    //     name: 'business_category',
    //     col: ' col-md-4 col-xxl-2 col-xl-3 col-6 ',
    //     target: "categories?limits=9999",
    //     optionValue: 'id',
    //     optionLabel: 'title',
    // },

    delivered_at: {
        type: 'date',
        label: 'Delivery Date',
        name: 'delivered_at',
        col: ' col-md-4 col-xxl-3 ',
        autoComplete: "off"
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