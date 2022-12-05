import React from 'react'
import { Dropdown } from 'react-bootstrap';
import userImage from './../../assets/images/user1.png'
import { NavLink } from 'react-router-dom';
const Profile = (props) => {
    return (
        <div className="logout">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic" drop="end">
                    <span>David Stephen</span>
                    <img src={userImage} alt="user" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <NavLink className="dropdown-item" to="/admin-profile">Profile</NavLink>
                    <NavLink className="dropdown-item" to="/settings">Settings</NavLink>
                    <NavLink className="dropdown-item" to="logout" onClick={(e) => {
                        e.preventDefault()
                        localStorage.removeItem("currentUser");
                        window.location.reload();
                    }}>Logout
                    </NavLink>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Profile