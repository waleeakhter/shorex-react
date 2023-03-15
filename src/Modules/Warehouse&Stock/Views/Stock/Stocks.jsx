import React from 'react'
import Tabs from './../../../../Common/Tabs/Tabs'
import InVehicle from './InVehicle';
import InWarehouse from './InWarehouse';
import {  Col, Row,Button } from "react-bootstrap";
import AlertModal from '../../../../Common/AlertModal';
import {withTranslation} from 'react-i18next'

const currentUser=JSON.parse(localStorage.getItem('currentUser'))

const Stocks = (props) => {
    const [reload, setReload] = React.useState(false)
    const tabs = [
        { name: "In Vehicle", component: <InVehicle /> },
        { name: "In Warehouse", component: reload?<></>:<InWarehouse /> }
    ]
    const [key, setKey] = React.useState(tabs.at(0).name);
    const callback = (key) => setKey(key)
    const [modal, setModal] = React.useState(false)
    const styles = {
        width: 127.96,
        height: 35,
        fontSize: 14,
        fontWeight: 500,
        borderRadius: 2
    }
    const resetSuccessCallback=()=>{
        setReload(true)
        setTimeout(() => {
            setReload(false)
        }, 500);
    }
    return (
        <>
            <Row className="align-items-center ">
                <Col> <Tabs tabs={tabs} current={key} callback={callback} /></Col>
                {
                     currentUser.roles.includes('Admin') && 
                     <Col className="text-end">
                    {key === tabs.at(1).name && <Button variant="success" style={styles}
                     onClick={() => setModal(true)}
                     >{props.t('general-reset')}</Button>}
                </Col>
                }
                
            </Row>
            {
                tabs.map((tab, i) =>
                    <div className={`mt-5 ${key === tab.name ? 'd-block' : 'd-none'}`} key={i.toString()} >
                        {tab.component}
                    </div>
                )
            }

            <AlertModal
                text={props.t('shorex:alert-clearing-list')}
                confirmButton={props.t('shorex:confirm')}
                showModal={modal}
                setModal={setModal}
                actionType={'stockReset'}
                successCallback={resetSuccessCallback}
             />
        </>
    )
}

export default withTranslation(['base', 'shorex'])(Stocks)