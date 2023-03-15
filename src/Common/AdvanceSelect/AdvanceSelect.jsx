import React, { useEffect, useState } from 'react'
import Select from "react-select";
import Api from "@evenlogics/whf-api"
import { customStyles } from "./SelectStyle"
const AdvanceSelect = ({ target, callback, setFieldValue, name, value, options, lableValue, extraLabelValue, extra }) => {

    const [values, setValue] = useState(options ?? [])


    useEffect(() => {
        setValue(options)
    }, [options])
    useEffect(() => {
        let isApiSubscribed = true;
        target && Api.request('get', `/${target}`).then((response) => {
            if (isApiSubscribed) {
                setValue(response.data.map((val) => (
                    {
                        value: val.id,
                        label: lableValue ? `${val[lableValue]}  ${extraLabelValue ? val[extraLabelValue] : ""}` : val.name,
                        extra: val[extra]
                    }))
                )
            }
        }).catch((error) => {
            console.log(error)
        })
        return () => {
            isApiSubscribed = false;
        };
    }, [target, lableValue, extraLabelValue, extra])


    const selectValue = (e) => {
        callback && callback(e.value, setFieldValue, name, e)
    }

    return (
        <Select
            key={values} styles={customStyles} options={values}
            onChange={selectValue} defaultValue={values && values.filter(
                (val) => val.value === value
            )} />
    )
}

export default AdvanceSelect