import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Tabs from '../../../Common/Tabs/Tabs'
import UpdateProfile from './AddAdmin';
import ListView from '../../../Common/ListView/ListView';
import UserProfile from './../../../Common/UserProfile/UserProfile'
import Api from '@evenlogics/whf-api'

const Admin = (props) => {
    const [id, setId] = React.useState(null);
    const [admin , setAdmin] = React.useState(null);
    const tabs = [
        {
            name: 'Admin Profile',
            component: <UpdateProfile id={id} />
        },
        {
            name: 'Sub Admins',
            component: <ListView target="admins" view={'list'} edit={"admin-profile"} />
        }
    ]
    const [key, setKey] = React.useState(tabs.at(0).name);
    const tabSelect = (tab) => setKey(tab)


    React.useEffect(() => {
        console.log(window.location.href.indexOf("add") < 1)
        if (window.location.href.indexOf("add") < 1) {
            const getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
            console.log(getCurrentUser)
           if( getCurrentUser?.id){
               setId(getCurrentUser?.id)
               Api.request("get" , `/admins/${getCurrentUser?.id}`)
               .then(res =>{ 
                   console.log(res)
                   setAdmin(res.data)
                })
               .catch(err => console.log(err))
           }
        }
    }, [])

    return (
        <section >
            <Row className="align-items-center">
                <Col sm="6">
                    <Tabs tabs={tabs} callback={tabSelect} current={key} />
                </Col>
                <Col sm="6" className="text-end">
                    {
                        key === tabs.at(1).name && <Button variant="success" className="btn-add" onClick={() => props.history.push(`${'/admin-profile/add'}`)}>
                            Add Subadmin
                        </Button>
                    }
                </Col>
            </Row>
            <Row>
                {
                    tabs.map((tab, i) =>
                        <Col xs="12" lg={key !== 'Sub Admins' && 8} key={i.toString()} className={`  mt-5 ${key === tab.name ? 'd-block' : 'd-none'}`}>
                            {tab.component}
                        </Col>
                    )
                }
                <Col lg="4" className={` ${key === 'Sub Admins' ? 'd-none' : 'd-block'}`} style={{top: -27}}>
                    <UserProfile profile={admin} msgBtn={false} />
                </Col>
            </Row>
        </section>
    )
}

export default Admin