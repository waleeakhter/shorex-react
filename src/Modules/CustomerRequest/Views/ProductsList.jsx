import React from 'react'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
const ProductsList = ({ requests }) => {

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
                                                <p>Items</p>
                                                <p>{product.title}</p>
                                            </div>
                                            <div className="text">
                                                <p>Quantity / Units</p>
                                                <p>20 Bags</p>
                                            </div>
                                            <div className="text">
                                                <p>Location</p>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="tooltip">{requests?.customer?.address}</Tooltip>}>
                                                    <p>{requests?.customer?.address}</p>
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
                                                            <li><small>Start: {schedule.morning_start_time}</small> <small>End: {schedule.morning_end_time}</small></li>
                                                            <li><h6 className="mb-0">Evening Time</h6></li>
                                                            <li><small>Start: {schedule.evening_start_time}</small> <small>End: {schedule.evening_end_time}</small></li>
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
                        <div className="text-end">
                            <Button variant="danger" className="dangerBtn" onClick={assignDriver}>Assign to Driver</Button>
                        </div>
                    </div>
                    : "No Products found"
            }
        </>
    )
}

export default ProductsList