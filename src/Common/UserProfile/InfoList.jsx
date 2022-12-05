import React from 'react'
import AdvanceSelect from '../../Common/AdvanceSelect/AdvanceSelect'
import AlertModal from '../AlertModal'
import icons from './../Icons/icons'
import Api from '@evenlogics/whf-api'
import {toast} from "react-toastify"
const InfoList = ({ user, Style }) => {
    const [modal, setModal] = React.useState(false)
    const callback = (val) => {
        Api.request("PATCH" , `/drivers/${user.id}/vehicles/${val}`).then(res => {
          console.log(res.message)
          res?.message &&  toast.success(res?.message)
        }).catch (err => {
            console.log(err)
            toast.error("Somthing Went Wrong")
        }
        ) 
    }
    return (
        <>
            <ul className={`${Style.infoList}  ${!user && Style.placeholder}`}>
                {user?.email && <li>
                    <div className={Style.image}>
                        <img src={icons.mail} alt="" />
                    </div>
                    <h2>Email <br />
                        <small>{user?.email}</small>
                    </h2>
                </li>}
                {user?.phone && <li>
                    <div className={Style.image}>
                        <img src={icons.phone2} alt="" />
                    </div>
                    <h2>Contact Number <br />
                        <small>{user?.phone}</small>
                    </h2>
                </li>}
                {user?.mobile && <li>
                    <div className={Style.image}>
                        <img src={icons.phone} alt="" />
                    </div>
                    <h2>Mobile Number <br />
                        <small>{user?.mobile}</small>
                    </h2>
                </li>}
                {user?.post_code && <li>
                    <div className={Style.image}>
                        <img src={icons.post} alt="" />
                    </div>
                    <h2>Post Office Code <br />
                        <small>{user?.post_code}</small>
                    </h2>
                </li>}
                {user?.business_name && <li>
                    <div className={Style.image}>
                        <img src={icons.business_name} alt="" />
                    </div>
                    <h2>Business Name <br />
                        <small>{user?.business_name}</small>
                    </h2>
                </li>}
                {user?.nif && <li>
                    <div className={Style.image}>
                        <img src={icons.license} alt="" />
                    </div>
                    <h2>License Code (CIF, DNI, NIF) <br />
                        <small>{user?.nif}</small>
                    </h2>
                </li>}
                {user?.license_img_url && <li>
                    <div className={Style.image}>
                        <img src={icons.blicense} alt="" />
                    </div>
                    <h2>Business License <br />
                        <small>License
                            <a href={user?.license_img_url ?? ""} target="_blank" rel="noopener noreferrer">(View)</a>
                        </small>
                    </h2>
                </li>}
                {user?.address && <li>
                    <div className={Style.image}>
                        <img src={icons.map} alt="" />
                    </div>
                    <h2>Address <br />
                        <small>{user?.address}</small>
                    </h2>
                </li>}
                {user?.category_name && <li>
                    <div className={Style.image}>
                        <img src={icons.category} alt="" />
                    </div>
                    <h2>Business Category <br />
                        <small>{user?.category_name}</small>
                    </h2>
                </li>}
                {user?.bank_name && <li>
                    <div className={Style.image}>
                        <img src={icons.bank} alt="" />
                    </div>
                    <h2>Bank Name <br />
                        <small>{user?.bank_name}</small>
                    </h2>
                </li>}
                {user?.iban && <li>
                    <div className={Style.image}>
                        <img src={icons.iban} alt="" />
                    </div>
                    <h2>IBAN <br />
                        <small>{user?.iban}</small>
                    </h2>
                </li>}
                {user?.account_hldr_name && <li>
                    <div className={Style.image}>
                        <img src={icons.account} alt="" />
                    </div>
                    <h2>Account Holder Name <br />
                        <small>{user?.account_hldr_name}</small>
                    </h2>
                </li>}
                {(user?.roles.length > 0 && user?.roles.at(0).name === "Driver" ) && <li>
                    <label className="w-100">Assign New Vehicle</label>
                    <AdvanceSelect target="vehicles?limit=9999" value={user?.vehicle_id} callback={callback}/>
                </li>}
                <li className="pointer" onClick={() => setModal(true)}>
                    <div className={Style.image}>
                        <img src={user?.status_id === 1 ? icons.block : icons.unblock} alt="" />
                    </div>
                    <h2>{user?.status_id === 1 ? "Block" : "Unblock"} This User</h2>
                </li>
                {user?.roles.length > 0 &&  
                <li className="pointer" onClick={() => setModal(true)}>
                <div className={Style.image}>
                        <img src={icons.delete} alt="" />
                    </div>
                    <h2>Delete This User<br />
                    </h2>
                </li>}
                {user?.created_at && <li>
                    <div className={Style.image}>
                        <img src={icons.user} alt="" />
                    </div>
                    <h2>Account Creation Date<br />
                        <small>{user?.created_at && new Date(user?.created_at).toDateString()}</small>
                    </h2>
                </li>}
            </ul>
            <AlertModal
                text={`Are you sure want to ${user?.status_id === 1 ? "block" : "unblock"} this  user? Please give a confirmation, and
                automatically generated OTP send to customer.`}
                confirmButton="Confirm & Send"
                showModal={modal}
                setModal={setModal}
            />
        </>
    )
}

export default InfoList