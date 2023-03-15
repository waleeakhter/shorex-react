import React from 'react'
import { Col, Row } from 'react-bootstrap';
import UpdateProfile from './AddAdmin';
import UserProfile from './../../../Common/UserProfile/UserProfile' 
import { useAppContext } from '../../../Context';
const Admin = (props) => {
 
    const {loggedInUser}=useAppContext()

    console.log(loggedInUser)
    return (
        <section >
            <Row className="align-items-center">
                <div className={`tabBtns `} >
                    <span className={'active'} >Admin Profile</span>

                </div>
            </Row>
            <Row>
            <Col xs="12" lg={8}  className={`  mt-5  d-block}`}>
                <UpdateProfile id={loggedInUser?.id} />
            </Col>
            <Col lg="4" style={{top: -27}}>
                    <UserProfile profile={loggedInUser} msgBtn={false} />
                </Col>
            </Row>
        </section>
    )
}

export default Admin