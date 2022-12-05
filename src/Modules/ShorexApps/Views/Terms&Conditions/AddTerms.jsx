import React from 'react'
import AddForm from "./../../../../Common/TermsAndPolicey/AddForm"
const AddTerms = (props) => {
    const query = new URLSearchParams(props.location.search);
    return (
        <AddForm heading={'Terms And Conditions'}  target="terms-and-conditions" redirect="/apps/terms-conditions" edit={query?.get('edit')}  />
    )
    
}

export default AddTerms