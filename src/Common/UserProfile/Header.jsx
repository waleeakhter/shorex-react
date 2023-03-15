import React,{useState} from 'react'
import userImage from './../../assets/images/placeholder.jpg'
import { Button } from "react-bootstrap" 
import Modal from 'react-bootstrap/Modal';
import { FormGenerator } from '@evenlogics/whf-form-generator'
import { useAppContext } from '../../Context'; 
import {useHistory} from 'react-router-dom';
import {withTranslation} from 'react-i18next'

const Header = (props) => {
    let { user, Style, role , msgBtn } = props
    console.log(role,"role")
    const {setLoggedInUser}=useAppContext()
    const [show, setShow] = useState(false);
    const history = useHistory()
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const handleClose = () => setShow(false);
    const handleShow = () => {
        if(currentUser.id===user.id)
        setShow(true);
    }
    const sendMsg=()=>{
        history.push(`/apps/notifications/add?user=${user.id}&nif=${user.nif}`)
    }
    return (
        <div className={`${Style.header}  ${!user && Style.placeholder}`}>
            <img src={user?.avatar_url ?? user?.avatar?.url ?? userImage} alt="userimage"  onClick={handleShow} />
            {/* <small className="text-gray">({user?.nif})</small> */}
            <h4 className='mt-2'>{user?.first_name + ' ' + user?.last_name}</h4>
            <p>{user?.business_name}</p><span>{user?.uuid}</span>
            {msgBtn &&
                <Button variant="" className={Style.btnMsg} onClick={sendMsg} ><i className="fa-light fa-comment"></i> {props.t('shorex:message')}</Button>
            }
           

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Update Profile Picture</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <FormGenerator
                        targetEntity={'avatar'}
                        fields={{
                            avatar: {
                                type: 'filePic',
                                label: 'Avatar',
                                required: true,
                                name: 'avatar',
                                col: 6,
                            },
                        }}
                        successCallback={(res)=>{
                            setShow(false)
                            if(currentUser.id===user.id){
                                setLoggedInUser((prev)=>{
                                    return {
                                        ...prev,
                                        avatar:{
                                            ...prev.avatar,
                                            thumbnail:res.thumbnail,
                                            url:res.url
                                        }
                                    }
                                })
                            }
                        }}
                        redirect='admin-profile'
                        name="avatar"
                        debug={false}
                    />
                </Modal.Body>
               
               
            </Modal>
        </div>
    )
}
export default withTranslation(['base', 'shorex'])(Header)