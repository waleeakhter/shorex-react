import React from 'react'
import { Button } from 'react-bootstrap'
import giftboxred from './../../assets/images/giftboxred.svg'
import giftboxcolorfull from './../../assets/images/giftboxcolorful.svg'
import {withTranslation} from 'react-i18next'

const Buttons = (props) => {
    let { Style, user } = props;
    return (
        <div className={Style.Buttons}>
            <Button className={Style.btnWarning}>
                <span> <img src={giftboxred} alt="gift" /> {props.t('shorex:total-available-rewards')}</span>
                <span>{user?.earned_pts ?? 0}pts</span>
            </Button>
            <Button variant="success">
                <span> <img src={giftboxred} alt="gift" />{props.t('shorex:gained-rewards')}</span>
                <span>{user?.redeemed_pts ?? 0}pts</span>
            </Button>

            <Button variant="danger">
                <span> <img src={giftboxcolorfull} alt="gift" />{props.t('shorex:rewards-history')}</span>
            </Button>

        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Buttons)