import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Row, Col } from 'react-bootstrap'
import Api from '@evenlogics/whf-api'
import { toast } from 'react-toastify'
import UserProfile from './../../../../Common/UserProfile/UserProfile'
import {withTranslation} from 'react-i18next'

const defaultSorted = [{ dataField: 'id', order: 'desc' }]

const Profile = (props) => {
    const columns = [
        {
            dataField: 'id',
            text: props.t('id'),
            sort: true,
            formatter: (cell) => " "
        },
        {
            dataField: 'route_id',
            text: props.t('shorex:route'),
            sort: true,
            formatter: (cell) =>
                cell === 1 ? 'Route 1' : cell === 2 ? 'Route 2' : 'Route 3'
        },
        {
            dataField: 'schedule_type',
            text: props.t('shorex:schedule-type'),
            sort: true,
        },
        {
            dataField: 'schedule',
            text: props.t('shorex:schedule'),
            sort: true,
            formatter: cell => {
                const dates = JSON.parse(cell)
                return Object.keys(dates).length > 0 ?
                    <ul className=" list-unstyled " style={{ whiteSpace: 'nowrap' }}>
                        <li>Date: {dates.date}</li>
                        {dates.morning_start_time &&
                            <>
                                <li><h6 className="mb-0">{props.t('shorex:morning-time')}</h6></li>
                                <li><small>{props.t('shorex:start')}: {dates.morning_start_time}</small> <small>{props.t('shorex:end')}: {dates.morning_end_time}</small></li>
                            </>}
                        {dates.evening_start_time &&
                            <>
                                <li><h6 className="mb-0">{props.t('shorex:evening-time')}</h6></li>
                                <li><small>{props.t('shorex:start')}: {dates.evening_start_time}</small> <small>{props.t('shorex:end')}: {dates.evening_end_time}</small></li>
                            </>}
                    </ul>

                    : ""

            }
        },

        {
            dataField: 'status',
            text: props.t('status'),
            sort: true,
        },
    ]

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
                    toast.error(props.t('shorex:something-went-wrong'))
                })
    }, [id, props])
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

export default withTranslation(['base', 'shorex'])(Profile)