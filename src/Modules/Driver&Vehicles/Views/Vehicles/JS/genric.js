import { toast } from "react-toastify";
import Api from "@evenlogics/whf-api";



export const getVehicles = (setInitialValues , setLoader , setFiles , id) => {
    Api.request('get', `/vehicles/${id}`).then((response) => {
        console.log(response.data)
        response.data?.reg_doc && setFiles(response.data.reg_doc);
        const newValues = response.data && { ...response.data, reg_doc: null };
        setLoader(false)
        return setInitialValues(newValues)
    })
}



export const handleInputChange = (e, setFieldValue) => {
    setFieldValue(e.target.name, e.target.value);
};

export const handleFileChange = (e, setFieldValue , setFiles) => {
    console.log(e.target.files)
    if (e.target?.files?.length > 0) {
        const files = [...e.target.files]
        setFiles(files)
        setFieldValue(e.target.name, files)
    } else {
        setFiles([])
        setFieldValue(e.target.name, [])
    }
}
export const deleteImage = (i, setFieldValue, files) => {
    const file = files;
    file.splice(i, 1)
    setFieldValue('reg_doc', file)
}



export const onSubmit = (values, setSubmitting, id, props, setError) => {
    try {
        setSubmitting(true);
        console.log(values);
        const formData = new FormData();
        Object.keys(values).forEach(key => {
            console.log(values[key])
            if (values[key] !== null && values[key] !== undefined) {
                if (key === 'reg_doc' && values[key] !== null) {
                    values[key].forEach(item => {
                        formData.append('reg_doc[]', item)
                    })

                } else {
                    formData.append(key, values[key]);
                }
            }

        })

        id && formData.append('_method', 'patch')
        Api.request("post", `/vehicles/${id ?? ""}`, formData).then((res) => {
            console.log(res)
            res.data && toast.success(`Vehicles ${id ? "Updated" : "Added"} Successfully`)
            props.history.push({
                pathname: '/lists',
                state: { key: "Vehicles" }
            })
        }).catch((err) => {
            console.log("err", err.response?.data?.errors);
            setSubmitting(false);
            if (err.response?.data?.errors) {
                setError(Object.values(err.response?.data?.errors));
                window.scrollTo(0, 0);
            } else {
                toast.error(`Something went wrong!`)
            }
        });
    } catch (err) {
        console.log("submiting error", err)
        toast.error("Somthing went wrong");
        setSubmitting(false);
    }
};