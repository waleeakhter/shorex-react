import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col } from 'react-bootstrap'
import Api from '@evenlogics/whf-api'
import { toast } from 'react-toastify'
import UserProfile from './../../../Common/UserProfile/UserProfile'
const defaultSorted = [{ dataField: 'id', order: 'desc' }]
const columns = [
    {
        dataField: 'id',
        text: '',
        sort: true,
        formatter: (cell) => " "
    },
    {
        dataField: 'business_name',
        text: 'Business Name',
        sort: true,
    },
    {
        dataField: 'quantity',
        text: 'Quantity',
        sort: true,
    },
    {
        dataField: 'recycle_requests',
        text: 'Time & Date',
        sort: true,
        formatter: cell => {
            return <div className="scrollbar" style={{ maxHeight: 115, overflowY: 'auto' }}>
                {cell.map((item, i) => {
                    const dates = JSON.parse(item?.schedule)
                    return Object.keys(dates).length > 0 ?
                        <>
                            <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                                <li>Date: {dates.date}</li>
                               {dates.morning_start_time && <> <li><h6 className="mb-0">Morning Time</h6></li>
                                <li><small>Start: {dates.morning_start_time}</small> <small>End: {dates.morning_end_time}</small></li></>}
                                {dates.evening_start_time && <><li><h6 className="mb-0">Evening Time</h6></li>
                                <li><small>Start: {dates.evening_start_time}</small> <small>End: {dates.evening_end_time}</small></li></>}
                            </ul>
                            {(cell.length > 0 && i + 1 !== cell.length && <hr />)}
                        </>
                        : ""
                })
                }

            </div>
        }

    }, {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },
    {
        dataField: 'notes',
        text: 'Reason',
        sort: true,
        formatter: (cell) => <span className="text-red">{cell}</span>
    },
]


const CustomerProfile = (props) => {

    const { id } = props.match.params
    const [driver, setDriver] = React.useState(null)

    React.useEffect(() => {
        id &&
            Api.request('get', `/customers/${id}`)
                .then(res => {
                    console.log(res?.data)
                    setDriver(res?.data)
                })
                .catch(err => {
                    console.error(err);
                    toast.error(" Somthing Went Wrong ")
                })
    }, [id])
    return (
        <div className="DriverProfile">
            <Row>
                <Col lg="8">
                    {driver?.first_name && <h4 className='heading'>{driver?.first_name + " " + driver?.last_name} Profile</h4>}
                    <RemoteTable
                        entity={`customers/${id}/recycles/all`}
                        customEntity={`customers/${id}/recycles/all`}
                        columns={columns}
                        sort={defaultSorted}
                        hideEdit={false}
                        hideDetail={true}
                        disableDelete={false}
                        showAdvanceFilters={false}
                        hideQuickSearch={true}
                        hideActionCol={true}
                    //   Query={query}
                    //   query={queryParams}
                    />
                </Col>
                <Col lg="4">
                    <UserProfile profile={driver} msgBtn={true} />
                </Col>
            </Row>
        </div>
    )
}

export default CustomerProfile