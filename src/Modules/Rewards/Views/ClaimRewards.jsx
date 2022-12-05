import React from 'react'
import RemoteTable from '@evenlogics/whf-remote-table'
import { Button } from 'react-bootstrap'
import moment from 'moment'
import Api from '@evenlogics/whf-api'
import { toast } from 'react-toastify'
const defaultSorted = [{ dataField: 'customer_name', order: 'desc' }]


const ClaimRewards = (props) => {
    const [refresh, setRefresh] = React.useState(false)
    const columns = [

        {
            dataField: 'customer_name',
            text: 'Customer Name',
            sort: true,

        },
        {
            dataField: 'business_name',
            text: 'Business Name',
            sort: true,
        },
        {
            dataField: 'created_at',
            text: 'Date & Time',
            sort: true,
            formatter: (cell) => {
                const date = new Date(cell);
                return `${moment(date).format('MMM DD, YYYY')} at ${moment(date).format('hh:ss a')}`
            }
        },
        {
            dataField: 'redeem_amt',
            text: 'Requested Redeem',
            sort: true,
            formatter: (cell) => <span className="text-success"><i className="fa-regular fa-euro-sign"></i>{cell}</span>
        },
        {
            dataField: 'donate_amt',
            text: 'Requested Donation',
            sort: true,
            alignCenter: "center",
            formatter: (cell) => <span className="text-success"><i className="fa-regular fa-euro-sign"></i>{cell}</span>
        },
        {
            dataField: '',
            text: '',
            sort: true,
            formatter: (cell, row) =>
                <div className="button-tables flex-center flex-wrap" style={{ gap: 10 }} >
                    {row.donate_amt > 0 && <Button variant="success" name="donate_amt" className="m-0"
                        onClick={(e) => claimReward(e, `/redeem-rewards/${row.id}/donate`)}>
                        Donate
                    </Button>}
                    {row.redeem_amt > 0 && <Button variant="danger" className="m-0"
                        onClick={(e) => claimReward(e, `/redeem-rewards/${row.id}/redeem`)}>
                        Claim Reward
                    </Button>}
                </div>
        }
    ]

    const claimReward = (e, target) => {
        const btn = e.target
        btn.disabled = true
        Api.request("patch", target).then(res => {
            console.log(res);
            setRefresh((prev) => prev = !prev)
            toast.success(res.message)
            btn.disabled = false
        }).catch(err => {
            btn.disabled = false
            toast.error("Somthing Went Wrong");
            const errors = Object.values(err.response?.data?.errors)
            errors.length > 0 && errors.map(err => toast.error(err.toString()))

            console.log("Errors for claim reward", Object.values(err))

        })
    }
    return (
        <div className="ClaimRewards">
            <RemoteTable
                entity="redeem-rewards"
                customEntity="redeem-rewards"
                columns={columns}
                sort={defaultSorted}
                hideEdit={false}
                hideDetail={true}
                disableDelete={false}
                showAdvanceFilters={false}
                hideQuickSearch={true}
                hideActionCol={true}
                Query={refresh}
                query={{ status: 0 }}
            />
        </div>
    )
}

export default ClaimRewards