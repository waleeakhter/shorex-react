
import React from 'react'
import { Button, Modal } from "react-bootstrap";
import Api from "@evenlogics/whf-api"
import { toast } from "react-toastify"
import {useHistory} from 'react-router-dom'
import {withTranslation} from 'react-i18next'

const AlertModal = (props) => {
    const { showModal, setModal, text, confirmButton, user, actionType,successCallback}=props
    const history = useHistory()
    const style = {
        p: {
            fontSize: 15,
            textAlign: 'center',
            fontWeight: 500,
            lineHeight: "23px",
            color: '#39414F'
        },
        modal_body: {
            padding: '0% 20% 5%',
        },
        button: {
            fontSize: 15,
            fontWeight: 500,
            borderRadius: 4,
            color: 'white'
        }

    }

    const onConfirm = () => {
        if(actionType==='block')blockUser()
        if(actionType==='delete')deleteUser()
        if(actionType==='stockReset')resetStock()
        
    }
    const blockUser = () => {
        
        Api.request("PATCH", `/users/${user?.id}/status/${parseInt(user?.status) === 1 ? 0 : 1}`).then(res => {
            // console.log(res);
            user.setUser({ ...res.data })
            toast.success(props.t('shorex:'+res.message))
            setModal(false)
        }).catch(err => console.log(err))
    }
    const deleteUser = () => {
        console.log(user)
        Api.request("DELETE", `/users/${user?.id}`).then(res => {
            // console.log(res);
            toast.success(props.t('shorex:'+res.message))
            setModal(false)
            history.goBack()

        }).catch(err => {
            setModal(false)
            if (err?.response?.data?.message) {
                toast.error(props.t('shorex:'+err?.response?.data?.message))
            }else{
                toast.error('Something went wrong')
            }
        }

        )
    }
    const resetStock=()=>{
        Api.request("DELETE", `/reset/warehouse-stock`).then(res => {
            // console.log(res); 
            toast.success(props.t('shorex:'+res.message))
            successCallback()
            setModal(false)
        }).catch(err => {
            setModal(false)
            if(err?.response?.data?.message){
                toast.error(props.t('shorex:'+err.response.data.message))
            }else{
                toast.error("Something Went Wrong");
            }
        })
    }

    return (
        <>
            <Modal
                show={showModal}
                onHide={() => setModal(false)}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >
                <Modal.Header closeButton className="border-0 ">
                </Modal.Header>
                <Modal.Body style={style.modal_body} >
                    <p style={style.p}>{text}</p>
                    <div className="d-flex justify-content-center mt-4">
                        <Button variant=" me-2" style={{ ...style.button, minWidth: 109, backgroundColor: '#FB6B6B' }} onClick={() => setModal(false)}>{props.t('shorex:cancel')}</Button>
                        <Button variant="success" style={{ ...style.button, minWidth: 164 }} onClick={onConfirm}>{confirmButton ?? props.t('shorex:confirm')}</Button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}


export default withTranslation(['base', 'shorex']) (AlertModal)         