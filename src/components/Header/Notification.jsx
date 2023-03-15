import React from 'react'
import { Dropdown } from 'react-bootstrap';
import { onMessageListener } from '../../Firebase/firebase';
import Api from "@evenlogics/whf-api"
import {withTranslation} from 'react-i18next'
import { useDetectClickOutside } from 'react-detect-click-outside';
const Notification = (props) => {
    const [notification, setNotification] = React.useState({});
    const [count, setCount] = React.useState(0);
    const [show, setShow] = React.useState(false);
    const lessString = (str) => str.length > 52 ? str.substring(0, 52) + ' ...' : str

    const ref = useDetectClickOutside({ onTriggered: ()=>setShow(false) });
    
    const getNotifications = () => {
        Api.request("get", "/userNotifications?sort=id|desc&limit=99999999999").then(res => {
            // console.log(res)
            setNotification(res.data)
            const count = res?.data?.length && res?.data.filter(noti => {
                return Number(noti?.hasRead) === 0
            })
            setCount(count?.length ?? 0)
        }).catch((err) => {
            console.log(err)
        })
    }

    React.useEffect(() => {
        getNotifications()

    }, [])


    onMessageListener(getNotifications)
        .then((payload) => {
            console.log(payload, "payload noti")
            getNotifications()
        })
        .catch((err) => console.log('failed: ', err));

    const readAllNotifications = () => {
        Api.request("patch", "/user/notifications/hasRead/1").then(res => { setCount(0) }).catch((err) => console.log('failed: ', err))
    }
    // console.log(show)
    return (
        <div className="notifications" ref={ref}>
            <div className='dropdown'>
            <button onClick={() => { setShow(!show); count > 0 && readAllNotifications() }} type="button"  className='dropdown-toggle btn'>
                    <i className="fas fa-bell"></i>
                    <span className="noti-counts">{count}</span>
            </button>
            </div>
            { show && 
            <Dropdown>

                <Dropdown.Menu show={true}>
                    <div className="heading">
                        <h4>{props.t('shorex:notifications')}</h4>
                    </div>
                    <div className="list">
                        {notification?.length > 0 &&
                            notification.map((noti, i) =>
                                i < 3 && <Dropdown.Item key={i.toString()} href="#/action-1">
                                    <img src={noti?.notification_img?.url} alt="" />
                                    <div className="noti-text">
                                        <h6>{noti.title}</h6>
                                        <p>
                                            {lessString(noti.text)}
                                        </p>
                                        <span>{new Date(noti.received_at).toDateString()}</span>
                                    </div>
                                </Dropdown.Item>)
                        }
                    </div>
                    <div className="footer">
                        {/* <a href="#/" >{props.t('shorex:view-all-notifications')}</a> */}
                    </div>
                </Dropdown.Menu>
            </Dropdown>}
        </div>
    )
}

export default withTranslation(['base', 'shorex'])(Notification)