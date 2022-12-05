import Api from "@evenlogics/whf-api";
import { toast } from "react-toastify";

// get customer
export const getCustomer = (id , setInitialValues , setLoader) => {
    Api.request('get', `/customers/${id}`).then((response) => {
        setInitialValues(response?.data)
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    }).catch((error) => {
        toast.error("Somthing went wrong");
    })
}

// input values function
export const handleInputChange = (e, setFieldValue) => {
    if (e.target) {
        setFieldValue(e.target.name, e.target.value);
    }
};

// advance select function

export const handleSelectChange = (value, setFieldValue, name) => {
    console.log(value);
    setFieldValue(name, value);
};

// location set function
export const onSuggestSelect = (suggest, name, setFieldValue) => {
    console.log(suggest, "hello");
    setFieldValue(name, suggest?.description);
    setFieldValue("latitude", suggest?.location.lat);
    setFieldValue("longitude", suggest?.location.lng);
};



// onsubmit function

export const onSubmit = (values, id, setSubmitting, props, setError) => {
    console.log(values);
    setSubmitting(true);
    let formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    })
    if (id) {
        formData.append("_method", "PATCH");
    }
    setTimeout(() => {
        let url = "/customers";
        let method = "post";
        if (id) {
            url = "/customers/" + id;
        }
        Api.request(method, url, formData)
            .then((response) => {
                console.log("res", response);
                if (response?.message) {
                    setSubmitting(false);
                    toast.success(response.message);
                    props.history.push("/customers");
                }
            })
            .catch((err) => {
                console.log("err", err.response?.data?.errors);
                setSubmitting(false);
                if (err.response?.data?.errors) {
                    setError(Object.values(err.response?.data?.errors));
                    window.scrollTo(0, 0);
                }
            });
    }, 1000);
};