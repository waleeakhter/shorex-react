import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import {withTranslation} from 'react-i18next'

const ProductsList = (props) => {
    const { requests } = props;
    const {notes,images,driver_comments}=requests
    const [products, setProducts] = React.useState([])
    const [schedule, setSchedule] = React.useState([])
    const history = useHistory()
    React.useEffect(() => {
        setProducts(requests?.products);
        const schedule = requests?.schedule && JSON.parse(requests?.schedule)
        setSchedule(schedule)
    }, [requests])

    const assignDriver = () => {
        history.push({
            pathname: '/lists',
            requests: [requests]
        });
    }

    return (
        <>
            {
                products?.length > 0 ?
                    <div>
                        <ul className="request-list">
                            {
                                products.map((product, i) =>
                                    <li key={i.toString()}>
                                        <div className="request-left-side">
                                            <div className="text">
                                                <p>{props.t('shorex:items')}</p>
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="text">
                                                <p>{props.t('shorex:quantities')}</p>
                                                <p>{product.wtqt} </p>
                                            </div>
                                            <div className="text">
                                                <p>Location</p>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{requests?.address}</Tooltip>}>
                                                    <p>{requests?.address}</p>
                                                </OverlayTrigger>
                                            </div>
                                        </div>
                                        <div className="request-right-side">
                                            <div className="text">
                                                <p>{props.t('shorex:pickup-time')}</p>
                                                <div className="dates">
                                                    {
                                                        Object.keys(schedule).length > 0 &&
                                                        <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                                                            <li>Date: {schedule?.date.toString()}</li>
                                                            {
                                                                schedule.shift==='Morning Slot' &&
                                                                <> 
                                                                    <li><h6 className="mb-0">Morning Time</h6></li>
                                                                    <li><small>Start: {schedule.morning_start_time}</small> <small>End: {schedule.morning_end_time}</small></li>
                                                                </>
                                                            }
                                                            {
                                                                schedule.shift==='Evening Slot' &&
                                                                <> 
                                                                    <li><h6 className="mb-0">Evening Time</h6></li>
                                                                    <li><small>Start: {schedule.evening_start_time}</small> <small>End: {schedule.evening_end_time}</small></li>
                                                                </>
                                                            }
                                                           
                                                            
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
                      
                           

                        <div>
                            {notes && <p><strong>Notes: </strong>{notes}</p>}
                            {driver_comments && <p><strong>Driver Comments: </strong>{driver_comments}</p>}
                            {
                                images && images.length>0 && <>
                                    <div className='mb-2'><strong>Images</strong></div>
                                    {
                                        images.map((pic)=>{
                                            return <img src={pic} className='w-50 img-thumbnail ml-2 mt-2' alt='licenseImg' />
                                        })
                                    }
                                </>
                            }

                        </div>
                       
                        <div className="text-end">
                            <Button variant="danger" style={{width:'204px'}} className="dangerBtn" onClick={assignDriver}>{props.t('shorex:assign-to-driver')}</Button>
                        </div>
                    </div>
                    : "No Products found"
            }
        </>
    )
}

export default withTranslation(['base', 'shorex'])(ProductsList)