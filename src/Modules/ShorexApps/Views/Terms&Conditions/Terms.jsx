import React from 'react'
import ListView from "./../../../../Common/TermsAndPolicey/ListView"
import {withTranslation} from 'react-i18next'
const Terms = (props) => {
    return (
        <ListView heading={props.t('shorex:terms-conditions')} target="terms-and-conditions" edit="terms-conditions/edit?edit=true" add="terms-conditions/add" />
    )
}

export default withTranslation(['base', 'shorex'])(Terms)