import React from 'react'
import Card from "./CardList"
import Api from "@evenlogics/whf-api"
import Style from "./Promotion.module.scss"
import {Link} from "react-router-dom"
import { Spinner , Row , Col , Button } from 'react-bootstrap'
const Promotions = () => {
    const [data, setData] = React.useState([])
    const [spinner, setSpinner] = React.useState(true)
    React.useEffect(() => {
        Api.request('get', '/promotions')
            .then(res => {
                console.log(res?.data);
                setData(res.data);
                setSpinner(false)
            })
            .catch(err => console.log(err))
    }, [])
    return (
        <>  
           <Row className="align-items-center mb-4">
               <Col sm="6">
                   <h4 className="heading ">Promotional Banners</h4>
               </Col>
               <Col sm="6" className="text-end">
                  <Link to="promotions/add"><Button variant="success">Add Promotion</Button></Link>
               </Col>
           </Row>
            {!spinner ?
                <Card data={data} Style={Style} />
                :
                <div className="py-5 text-center">
                    <Spinner animation="border" />
                </div>
            }
        </>
    )
}

export default Promotions