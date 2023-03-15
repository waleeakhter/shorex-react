import React from 'react'
import { Button, Badge } from 'react-bootstrap'
import userImage from './../../../assets/images/customer.svg'
import block from './../../../assets/images/blocklock.svg'
import giftboxred from './../../../assets/images/giftboxred.svg'
import giftboxcolorfull from './../../../assets/images/giftboxcolorful.svg'
import mail from './../../../assets/images/mail.svg'
import {withTranslation} from 'react-i18next'

const CustomerProfile = () => {
    return (
        <div className="CustomerProfile">
            <div className="customerInfo">
                <img src={userImage} alt="userimage" />
                <small className="text-gray">(JS234423)</small>
                <h4>Jonathan Smith  <img src={block} alt="block" /></h4>
                <p>Smurfit Kappa Recycling Spain - Pinto</p>
                <Button variant="info"><i className="fa-light fa-comment"></i> Message</Button>
                <Badge bg="warning">
                    <span> <img src={giftboxred} alt="gift" /> Available Rewards</span>
                    <span>5048pts</span>
                </Badge>
                <Badge bg="success">
                    <span> <img src={giftboxred} alt="gift" />Total Gained Rewards</span>
                    <span>1029pts</span>
                </Badge>
                <Badge bg="danger">
                    <span> <img src={giftboxcolorfull} alt="gift" /> Total Donated Points</span>
                    <span>1029pts</span>
                </Badge>
            </div>

            <ul className="customerEdit">
                <li>
                    <img src={mail} alt="" />
                    <h2>Email <br />
                        <small>jonathan_smith@abc.com</small>
                    </h2>
                </li>
            </ul>
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(CustomerProfile)