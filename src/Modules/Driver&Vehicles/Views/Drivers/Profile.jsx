import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col } from 'react-bootstrap'
import Api from '@evenlogics/whf-api'
import { toast } from 'react-toastify'
import UserProfile from './../../../../Common/UserProfile/UserProfile'
const defaultSorted = [{ dataField: 'id', order: 'desc' }]
const columns = [
    {
        dataField: 'id',
        text: '',
        sort: true,
        formatter: (cell) => " "
    },
    {
        dataField: 'route_id',
        text: 'Route',
        sort: true,
        formatter: (cell) =>
            cell === 1 ? 'Route 1' : cell === 2 ? 'Route 2' : 'Route 3'
    },
    {
        dataField: 'schedule_type',
        text: 'Schedule Type',
        sort: true,
    },
    {
        dataField: 'schedule',
        text: 'Schedule',
        sort: true,
        formatter: cell => {
            const dates = JSON.parse(cell)
            return Object.keys(dates).length > 0 ?
                <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                    <li>Date: {dates.date}</li>
                    {dates.morning_start_time &&
                        <>
                            <li><h6 className="mb-0">Morning Time</h6></li>
                            <li><small>Start: {dates.morning_start_time}</small> <small>End: {dates.morning_end_time}</small></li>
                        </>}
                    {dates.evening_start_time &&
                        <>
                            <li><h6 className="mb-0">Evening Time</h6></li>
                            <li><small>Start: {dates.evening_start_time}</small> <small>End: {dates.evening_end_time}</small></li>
                        </>}
                </ul>

                : ""

        }
    },

    {
        dataField: 'status',
        text: 'Status',
        sort: true,
    },
]


const Profile = (props) => {

    const { id } = props.match.params
    const [driver, setDriver] = React.useState(null)

    React.useEffect(() => {
        id &&
            Api.request('get', `/drivers/${id}`)
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
                    <RemoteTable
                        entity={`recycles/assigned/drivers/${id}`}
                        customEntity={`recycles/assigned/drivers/${id}`}
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
                    <UserProfile profile={driver} />
                </Col>
            </Row>
        </div>
    )
}

export default Profile