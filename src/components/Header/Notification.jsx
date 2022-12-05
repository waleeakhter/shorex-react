import React from 'react'
import { Dropdown } from 'react-bootstrap';
import userImage from './../../assets/images/user.png'
const Notification = () => {

    const lessString = (str) => str.length > 52 ? str.substring(0 , 52)+' ...' : str
    
    return (
        <div className="notifications">
            <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                    <i className="fas fa-bell"></i>
                    <span className="noti-counts">2</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div className="heading">
                        <h4>Notification</h4>
                    </div>
                    <div className="list">
                        <Dropdown.Item href="#/action-1">
                            <img src={userImage} alt="" />
                            <div className="noti-text">
                                <h6>Jonathan Smith</h6>
                                <p>
                                    {lessString('David John send a request for pick up alumin-um cans ')}
                                </p>
                                    <span>{new Date().toDateString()}</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                            <img src={userImage} alt="" />
                            <div className="noti-text">
                                <h6>Jonathan Smith</h6>
                                <p>
                                    {lessString('David John send a request for pick up alumin-um cans ')}
                                </p>
                                    <span>{new Date().toDateString()}</span>
                            </div>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-1">
                            <img src={userImage} alt="" />
                            <div className="noti-text">
                                <h6>Jonathan Smith</h6>
                                <p>
                                    {lessString('David John send a request for pick up alumin-um cans ')}
                                </p>
                                    <span>{new Date().toDateString()}</span>
                            </div>
                        </Dropdown.Item>
                    </div>
                    <div className="footer">
                        <a href="#/" >View All Notification</a>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Notification