import React from 'react'
import ListView from "./../../../../Common/TermsAndPolicey/ListView"
const PrivacyPolicey = () => {
    return (
        <ListView heading={'Privacy Policy'} target="privacy-policy" edit="privacy-policy/edit?edit=true" add="privacy-policy/add" />
    )
}

export default PrivacyPolicey