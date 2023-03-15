import React from 'react'
import { OverlayTrigger, Tooltip, Spinner } from 'react-bootstrap'
import {withTranslation} from 'react-i18next'

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
    console.log(request)
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
                                                <p>{props.t('shorex:shorex-products')}</p>
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="text">
                                                <p>{props.t('shorex:quantity-units')}</p>
                                                <p>{product.wtqt}</p>
                                            </div>
                                            <div className="text">
                                                <p>{props.t('shorex:location')}</p>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{request?.customer?.address}</Tooltip>}>
                                                    <p>{request?.customer?.address}</p>
                                                </OverlayTrigger>
                                            </div>
                                            
                                                <p style={{color: '#51ab1d',fontWeight: 600}}>{props.t('shorex:comment')}</p>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{request?.driver_comments}</Tooltip>}>
                                                    <p>{request?.driver_comments}</p>
                                                </OverlayTrigger>

                                               
                                           
                                        </div>
                                        <div className="request-right-side">
                                            <div className="text">
                                                <p>{props.t('shorex:pickup-time')}</p>
                                                <div className="dates">
                                                    {
                                                        Object.keys(schedule).length > 0 &&
                                                        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                                                            <li>{props.t('shorex:date')}: {schedule?.date.toString()}</li>
                                                            <li><h6 className="mb-0">{props.t('shorex:morning-time')}</h6></li>
                                                            {schedule.morning_start_time ? <li><small>{props.t('shorex:start')}: {schedule.morning_start_time}</small> <small>{props.t('shorex:end')}: {schedule.morning_end_time}</small></li> : <small>{props.t('shorex:none')}</small>}
                                                            <li><h6 className="mb-0">{props.t('shorex:evening-time')}</h6></li>
                                                           {schedule.evening_start_time ? <li><small>{props.t('shorex:start')}: {schedule.evening_start_time}</small> <small>{props.t('shorex:end')}: {schedule.evening_end_time}</small></li> : <small>{props.t('shorex:none')}</small>}
                                                        </ul>
                                                    }

                                                </div>
                                            </div>
                                            <div className="text">
                                                <p>{props.t('shorex:status')}</p>
                                                <p className="text-red text-end">{product.status}</p>
                                            </div>
                                        </div>
                                    </li>
                                )


                            }
                        </ul>
                        {
                            request.img_false && <img src={request.img_false} className="img-thumbnail w-25 " alt="dfg" />
                        }
                    </div>
                    : <Spinner animation="border" />
            }
        </>
    )
}

export default withTranslation(['base', 'shorex'])(Detail)