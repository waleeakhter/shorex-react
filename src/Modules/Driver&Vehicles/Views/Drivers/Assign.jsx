import React from 'react'
import { OverlayTrigger, Tooltip, Row, Col, Button } from 'react-bootstrap'
import UserProfile from '../../../../Common/UserProfile/UserProfile'
import AdvanceSelect from "./../../../../Common/AdvanceSelect/AdvanceSelect"
import Api from '@evenlogics/whf-api'
import { toast } from "react-toastify"
const Assign = (props) => {
    const [products, setProducts] = React.useState([])
    const [driver, setDriver] = React.useState(null)
    const { id } = props.match.params;
    const [errors, setErrors] = React.useState("");
    const [values, setValues] = React.useState({ route: "", notes: "", ids: [] });
    
    React.useEffect(() => {
        id &&
            Api.request('get', `/drivers/${id}`)
                .then(res => Object.keys(res).length > 0 && setDriver(res.data))
    }, [id])


    React.useEffect(() => {

        let getLocalData = localStorage.getItem('requests');
        getLocalData = JSON.parse(getLocalData)
        console.log(getLocalData, 'getLocalData')
        setProducts(getLocalData)
        values.ids = getLocalData ? getLocalData?.map(value => value.id) : []
        console.log(values, "values")
        setValues(values)

    }, [values])

    const options = [
        { value: '1', label: 'Route 1' },
        { value: '2', label: 'Route 2' },
        { value: '3', label: 'Route 3' },
    ]

    const callback = (value) => {
        console.log(value)
        setValues({ ...values, route: value })
    }

    const assign = (e) => {
        const btn =   e.target
        btn.disabled = true
        if (values.route === "") {
            toast.error("route is required");
            btn.disabled = false
            return false
        }
        if (errors.route !== "") {

            Api.request("patch", `/recycles/assign?recycle=${values.ids.toString()}&driver=${id}&route=${values.route}&vehicle=${driver.vehicle_id}`)
                .then(response => {
                    console.log(response.success)
                    response.message && toast.success(response.message)
                    localStorage.removeItem('requests')
                    props.history.push('/customer-request')
                    btn.disabled = false
                }).catch(err => {
                    console.log("err", err.response?.data?.errors);
                    btn.disabled = false
                    if (err.response?.data?.errors) {
                        setErrors(Object.values(err.response?.data?.errors));
                        window.scrollTo(0, 0);
                    }
                })
        }
    }

    return (
        <Row>
            <Col xxl="8" xl="7">
                {errors?.length > 0 &&
                    <ul className="alert alert-danger px-5">
                        {errors.map(err => <li key={err}>{err}</li>)}
                    </ul>
                }
                <div className="request-assign" style={{ borderRadius: 10, overflow: 'hidden' }}>

                    <ul className="request-list">
                        {products?.length > 0 ?
                            products?.map(req => {
                                const schedule = req.schedule;
                                return req?.products?.map((pro, i) =>
                                    <li key={i.toString()}>
                                        <div className="request-left-side">
                                            <div className="text">
                                                <p>Items</p>
                                                <p>{pro.title}</p>
                                            </div>
                                            <div className="text">
                                                <p>Quantity / Units</p>
                                                <p>20 Bags</p>
                                            </div>
                                            <div className="text">
                                                <p>Location</p>
                                                <OverlayTrigger placement="bottom-start" overlay={<Tooltip id="tooltip">{req?.customer?.address}</Tooltip>}>
                                                    <p>{req?.customer?.address}</p>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="request-right-side">
                                            <div className="text">
                                                <p>Pickup Time & Date</p>
                                                <div className="schedule">
                                                    {
                                                        Object.keys(schedule).length > 0 &&
                                                        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                                                          <li>Date: {schedule.date}</li>
                                                          <li><h6 className="mb-0">Morning Time</h6></li>
                                                          <li><small>Start: {schedule.morning_start_time}</small> <small>End: {schedule.morning_end_time}</small></li>
                                                          <li><h6 className="mb-0">Evening Time</h6></li>
                                                          <li><small>Start: {schedule.evening_start_time}</small> <small>End: {schedule.evening_end_time}</small></li>
                                                        </ul>
                                                    }
                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>Status</p>
                                                <p className="text-red text-end">{pro.status}</p>
                                            </div>
                                        </div>
                                    </li>

                                )
                            }) : " No requestes are selected yet ! "
                        }
                    </ul>
                    <hr />
                    <div className="routes p-4">
                        <Col lg="5" className="form-group">
                            <label >Route *</label>
                            <AdvanceSelect options={options} callback={callback} />
                        </Col>
                        <Col lg="12" className="form-group">
                            <label htmlFor="notes" className="d-block" >Notes</label>
                            <textarea className="form-control" id="notes" rows="6" placeholder="Some text"></textarea>
                        </Col>

                        <Col xs="12" className="text-end">
                            <Button variant="danger" className="dangerBtn" onClick={assign}>Assign Task</Button>
                        </Col>


                    </div>
                </div>
            </Col>

            <Col>

                <UserProfile profile={driver} />
            </Col>
        </Row>
    )
}

export default Assign