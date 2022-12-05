import React from 'react'
import { OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap'
const Detail = (props) => {
    const [request, setRequest] = React.useState(null)
    const [schedule, setSchedule] = React.useState([])
    React.useEffect(() => {
        console.log(props.location.unSuccessFullRequest)
        if (props.location.unSuccessFullRequest) {
            setRequest(props.location.unSuccessFullRequest)
            props.location.unSuccessFullRequest.schedule && setSchedule(JSON.parse(props.location.unSuccessFullRequest.schedule))
        }else{
            props.history.push("/unsuccessfull-requests")
        }
    }, [props.location.unSuccessFullRequest, props.history])
    return (
        <>
            {
                request !== null ?
                    <div>
                        <ul className="request-list">
                            {
                                request?.products.map((product, i) =>
                                    <li key={i.toString()}>
                                        <div className="request-left-side">
                                            <div className="text">
                                                <p>Items</p>
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="text">
                                                <p>Quantity / Units</p>
                                                <p>20 Bags</p>
                                            </div>
                                            <div className="text">
                                                <p>Location</p>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{request?.customer?.address}</Tooltip>}>
                                                    <p>{request?.customer?.address}</p>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="request-right-side">
                                            <div className="text">
                                                <p>Pickup Time & Date</p>
                                                <div className="dates">
                                                    {
                                                        Object.keys(schedule).length > 0 &&
                                                        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                                                            <li>Date: {schedule?.date.toString()}</li>
                                                            <li><h6 className="mb-0">Morning Time</h6></li>
                                                            {schedule.morning_start_time ? <li><small>Start: {schedule.morning_start_time}</small> <small>End: {schedule.morning_end_time}</small></li> : <small>None</small>}
                                                            <li><h6 className="mb-0">Evening Time</h6></li>
                                                           {schedule.evening_start_time ? <li><small>Start: {schedule.evening_start_time}</small> <small>End: {schedule.evening_end_time}</small></li> : <small>None</small>}
                                                        </ul>
                                                    }

                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>Status</p>
                                                <p className="text-red text-end">{product.status}</p>
                                            </div>
                                        </div>
                                    </li>
                                )


                            }
                        </ul>

                    </div>
                    : <Spinner animation="border" />
            }
        </>
    )
}

export default Detail