import React from 'react'
import AddForm from "./../../../../Common/TermsAndPolicey/AddForm"
import {withTranslation} from 'react-i18next'

const AddPrivacy = (props) => {
    const query = new URLSearchParams(props.location.search);
    return (
        <AddForm heading={props.t('shorex:privacy-policy')}  target="privacy-policy" redirect="/apps/privacy-policy" edit={query?.get('edit')} />
    )
}

export default withTranslation(['base', 'shorex'])(AddPrivacy)