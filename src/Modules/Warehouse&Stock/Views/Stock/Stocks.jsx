import React from 'react'
import Tabs from './../../../../Common/Tabs/Tabs'
import InVehicle from './InVehicle';
import InWarehouse from './InWarehouse';
import { Button, Col, Row, } from "react-bootstrap";
import AlertModal from '../../../../Common/AlertModal';
const tabs = [
    { name: "In Vehicle", component: <InVehicle /> },
    { name: "In Warehouse", component: <InWarehouse /> }
]
const Stocks = () => {
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
    return (
        <>
            <Row className="align-items-center ">
                <Col> <Tabs tabs={tabs} current={key} callback={callback} /></Col>
                <Col className="text-end">
                    {key === tabs.at(1).name && <Button variant="success" style={styles} onClick={() => setModal(true)}>Reset</Button>}
                </Col>
            </Row>
            {
                tabs.map((tab, i) =>
                    <div className={`mt-5 ${key === tab.name ? 'd-block' : 'd-none'}`} key={i.toString()} >
                        {tab.component}
                    </div>
                )
            }

            <AlertModal
                text="Are you sure want to clear this list, on clicking confirm button
                all your stock list will be permanently clear"
                confirmButton="Confirm"
                showModal={modal}
                setModal={setModal} 
             />
        </>
    )
}

export default Stocks