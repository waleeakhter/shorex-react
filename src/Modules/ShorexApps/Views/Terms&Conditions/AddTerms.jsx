import React from 'react'
import AddForm from "./../../../../Common/TermsAndPolicey/AddForm"
import {withTranslation} from 'react-i18next'

const AddTerms = (props) => {
    const query = new URLSearchParams(props.location.search);
    return (
        <AddForm heading={props.t('shorex:terms-conditions')}  target="terms-and-conditions" redirect="/apps/terms-conditions" edit={query?.get('edit')}  />
    )
    
}

export default withTranslation(['base', 'shorex'])(AddTerms)