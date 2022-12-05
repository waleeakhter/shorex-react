import React from 'react'
import AddForm from "./../../../../Common/TermsAndPolicey/AddForm"
const AddPrivacy = (props) => {
    const query = new URLSearchParams(props.location.search);
    return (
        <AddForm heading={'Privacy Policy'}  target="privacy-policy" redirect="/apps/privacy-policy" edit={query?.get('edit')} />
    )
}

export default AddPrivacy