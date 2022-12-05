import React from 'react'
import { Button } from 'react-bootstrap'
import giftboxred from './../../assets/images/giftboxred.svg'
import giftboxcolorfull from './../../assets/images/giftboxcolorful.svg'
import { Link } from "react-router-dom"
const Buttons = ({ Style, user }) => {
    return (
        <div className={Style.Buttons}>
            <Button className={Style.btnWarning}>
                <span> <img src={giftboxred} alt="gift" /> Total Available Rewards</span>
                <span>{user?.earned_pts ?? 0}pts</span>
            </Button>
            <Button variant="success">
                <span> <img src={giftboxred} alt="gift" />Gained Rewards</span>
                <span>{user?.redeemed_pts ?? 0}pts</span>
            </Button>
            <Link to="/customers/reward-history" >
                <Button variant="danger">
                    <span> <img src={giftboxcolorfull} alt="gift" /> Rewards History</span>
                </Button>
            </Link>
        </div>
    )
}

export default Buttons