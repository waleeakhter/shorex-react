import React from 'react'
import block from './../../assets/images/blocklock.svg'
import userImage from './../../assets/images/placeholder.jpg'
import { Button } from "react-bootstrap"
const Header = ({ user, Style, role , msgBtn }) => {

    return (
        <div className={`${Style.header}  ${!user && Style.placeholder}`}>
            <img src={user?.avatar_url ?? user?.avatar?.url ?? userImage} alt="userimage" />
            <small className="text-gray">({user?.nif})</small>
            <h4>{user?.first_name + ' ' + user?.last_name} <img src={block} alt="block" /></h4>
            <p>{user?.business_name}</p>
            {msgBtn &&
                <Button variant="" className={Style.btnMsg}><i className="fa-light fa-comment"></i> Message</Button>
            }
        </div>
    )
}

export default Header