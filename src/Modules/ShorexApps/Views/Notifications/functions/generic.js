import Api from "@evenlogics/whf-api"
import { toast } from "react-toastify"

export const onSubmit = (values, setSpinner, id, redirect) => {
    console.log(values)
    setSpinner(true)
    const formData = new FormData();
    Object.keys(values).forEach(key => {
        key !== "selection" &&
            (values[key] !== null && formData.append(key, values[key]))
    })
    id && formData.append('_method', 'patch')
    Api.request("post", `/push-notifications/${id ?? ""}`, formData)
        .then(response => {
            console.log(response);
            toast.success(response.success)
            redirect.push("/apps/notifications")
        })
        .catch(err => {
            console.log(err)
            setSpinner(false)
        }
        )
}


export const handleSelectChange = (value, setFieldValue, name, target) => {
    setFieldValue(name, value)
    console.log(name, target)
    name === "user_id" && setFieldValue('nif', target?.extra)

}




export const getData = (id, setNotifications, setSpinner, setImage) => {
    Api.request("get", `/push-notifications/${id}`)
        .then(res => {
            console.log(res.data)
            //  store and delete image
            if(res?.data?.notification_img){
                setImage(res?.data?.notification_img)
                 delete res?.data['notification_img'] 
            }
            

            setNotifications(res.data)
            setSpinner(false)
        })
        .catch(err => console.log(err))
}