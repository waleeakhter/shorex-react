import React from 'react'
import ListView from "./../../../../Common/TermsAndPolicey/ListView"
import {withTranslation} from 'react-i18next'

const PrivacyPolicey = (props) => {
    return (
        <ListView heading={props.t('shorex:privacy-policy')} target="privacy-policy" edit="privacy-policy/edit?edit=true" add="privacy-policy/add" />
    )
}

export default withTranslation(['base', 'shorex'])(PrivacyPolicey)