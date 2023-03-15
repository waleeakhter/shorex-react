import React from 'react'
import { Dropdown } from 'react-bootstrap'; 
import { NavLink } from 'react-router-dom';
import {withTranslation} from 'react-i18next'
import { useAppContext } from '../../Context';
import userImgPlaceholder from '../../assets/images/placeholder.jpg'
const Profile = (props) => {
    const {loggedInUser}=useAppContext()
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    return (
        <div className="logout">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" drop="end">
                    {/*<span>David Stephen</span>*/}
                    <img src={loggedInUser?.avatar?.thumbnail||userImgPlaceholder} alt="user" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <NavLink className="dropdown-item" to="/admin-profile">{props.t('profile')}</NavLink>
                    {
                        currentUser.roles.includes('Admin') && <NavLink className="dropdown-item" to="/settings">{props.t('settings')}</NavLink>
                    }
                   
                    <NavLink className="dropdown-item" to="logout" onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem("currentUser");
                        window.location.reload();
                    }}>{props.t('logout')}
                    </NavLink>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Profile)