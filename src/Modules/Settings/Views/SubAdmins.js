import React from 'react'
// import Api from '@evenlogics/whf-api'
import {  Col, Row,Button } from 'react-bootstrap';
import ListView from '../../../Common/ListView/ListView';
import {withTranslation} from 'react-i18next'


 function SubAdmins(props) {
    // const [id, setId] = React.useState(null);
    // const [admin , setAdmin] = React.useState(null);
   
    // React.useEffect(() => {
    //     console.log(window.location.href.indexOf("add") < 1)
    //     if (window.location.href.indexOf("add") < 1) {
    //         const getCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    //         console.log(getCurrentUser)
    //        if( getCurrentUser?.id){
    //            setId(getCurrentUser?.id)
    //            Api.request("get" , `/admins/${getCurrentUser?.id}`)
    //            .then(res =>{ 
    //                console.log(res)
    //                setAdmin(res.data)
    //             })
    //            .catch(err => console.log(err))
    //        }
    //     }
    // }, [])

    return (
        <section >
            <div className="align-items-center">
                <span className={'active'} >{props.t('shorex:subadmin')}</span>

                <Button variant="success" className="btn-add float-right" onClick={() => props.history.push(`${'/admin-profile/add'}`)}>
                    {props.t('shorex:add-subadmin')}
                </Button>
            </div>
            <Row>
                <Col xs="12" className={`  mt-5 `}>
                    <ListView target="admins" view={'list'} edit={"admin-profile"} />
                </Col>
            </Row>
        </section>
    )
}
export default withTranslation(['base', 'shorex'])(SubAdmins)