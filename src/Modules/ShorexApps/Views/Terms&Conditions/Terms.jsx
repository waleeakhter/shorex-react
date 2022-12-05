import React from 'react'
import ListView from "./../../../../Common/TermsAndPolicey/ListView"
const Terms = () => {
    return (
        <ListView heading={'Terms Conditions'} target="terms-and-conditions" edit="terms-conditions/edit?edit=true" add="terms-conditions/add" />
    )
}

export default Terms