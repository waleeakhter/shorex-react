import React from 'react'
import AdvanceSelect from '../../Common/AdvanceSelect/AdvanceSelect'
import AlertModal from '../AlertModal'
import icons from './../Icons/icons'
import Api from '@evenlogics/whf-api'
import { toast } from "react-toastify"
import { withTranslation } from 'react-i18next';
const InfoList = (props) => {
    const {Style, userData}=props
    const [user, setUser] = React.useState(userData)
    const [blockModal,setBlockModal ] = React.useState(false)
    const [deleteModal,setDeleteModal ] = React.useState(false)
    React.useEffect(() => {
        setUser(userData)
    }, [userData])
    const callback = (val) => {
        Api.request("PATCH", `/drivers/${user.id}/vehicles/${val}`).then(res => {
            console.log(res.message)
            res?.message && toast.success(res?.message)
        }).catch(err => {
            console.log(err)
            toast.error("Somthing Went Wrong")
        }
        )
    }
    const loggedInUser=JSON.parse(localStorage.getItem('currentUser'))
    return (
        <>
            <ul className={`${Style.infoList}  ${!user && Style.placeholder}`}>
                {user?.email && <li>
                    <div className={Style.image}>
                        <img src={icons.mail} alt="" />
                    </div>
                    <h2>{props.t('base:email')} <br />
                        <small>{user?.email}</small>
                    </h2>
                </li>}
                {user?.phone && <li>
                    <div className={Style.image}>
                        <img src={icons.phone2} alt="" />
                    </div>
                    <h2>{props.t('shorex:contact-number')}<br />
                        <small>{user?.phone}</small>
                    </h2>
                </li>}
                {user?.mobile && <li>
                    <div className={Style.image}>
                        <img src={icons.phone} alt="" />
                    </div>
                    <h2>{props.t('shorex:mobile-number')}<br />
                        <small>{user?.mobile}</small>
                    </h2>
                </li>}
                {user?.post_code && <li>
                    <div className={Style.image}>
                        <img src={icons.post} alt="" />
                    </div>
                    <h2>{props.t('shorex:postal-code')}<br />
                        <small>{user?.post_code}</small>
                    </h2>
                </li>}
                {user?.business_name && <li>
                    <div className={Style.image}>
                        <img src={icons.business_name} alt="" />
                    </div>
                    <h2>{props.t('shorex:business-name')}<br />
                        <small>{user?.business_name}</small>
                    </h2>
                </li>}
                {user?.nif && <li>
                    <div className={Style.image}>
                        <img src={icons.license} alt="" />
                    </div>
                    <h2>{props.t('shorex:license-code')}<br />
                        <small>{user?.nif}</small>
                    </h2>
                </li>}
                {user?.license_img_url && <li>
                    <div className={Style.image}>
                        <img src={icons.blicense} alt="" />
                    </div>
                    <h2>{props.t('shorex:business-license')}<br />
                        <small>License
                            <a href={user?.license_img_url ?? ""} target="_blank" rel="noopener noreferrer">(View)</a>
                        </small>
                    </h2>
                </li>}
                {user?.address && <li>
                    <div className={Style.image}>
                        <img src={icons.map} alt="" />
                    </div>
                    <h2>{props.t('base:address')} <br />
                        <small>{user?.address}</small>
                    </h2>
                </li>}
                {user?.category_name && <li>
                    <div className={Style.image}>
                        {/* <img src={icons.category} alt="" /> */}
                        <span className='fa-solid fa-suitcase-rolling' style={{fontSize:'30px',color:'#51ab1d'}}></span>
                    </div>
                    <h2>{props.t('base:business-category')} <br />
                        <small>{user?.category_name}</small>
                    </h2>
                </li>}
                {user?.bank_name && <li>
                    <div className={Style.image}>
                        <img src={icons.bank} alt="" />
                    </div>
                    <h2>{props.t('shorex:bank-name')} <br />
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
                    <h2>{props.t('shorex:account-holder-name')} <br />
                        <small>{user?.account_hldr_name}</small>
                    </h2>
                </li>}
                {(user?.roles.length > 0 && user?.roles.at(0).name === "Driver") && <li>
                    <label className="w-100">{props.t('shorex:assign-new-vehicle')}</label>
                    <AdvanceSelect target="vehicles?limit=9999" value={user?.vehicle_id} callback={callback} />
                </li>}
                {console.log({user})}
                {
                    loggedInUser?.roles.includes("Admin") && user?.id!==loggedInUser?.id &&
                    <li className="pointer" onClick={() => setBlockModal(true)}>
                    <div className={Style.image}>
                        <img src={user?.status_id === 1 ? icons.block : icons.unblock} alt="" />
                    </div>
                    <h2>{props.t(`shorex:${user?.status_id === 1 ? "block" : "unblock"}-this-user`)}</h2>
                </li>
                }
               
                { loggedInUser?.roles.includes("Admin") && user?.id!==loggedInUser?.id &&
                    <li className="pointer" onClick={() => setDeleteModal(true)}>
                        <div className={Style.image}>
                            <img src={icons.delete} alt="" />
                        </div>
                        <h2>{props.t('shorex:delete-this-user')}<br />
                        </h2>
                    </li>}
                {user?.created_at && <li>
                    <div className={Style.image}>
                        <img src={icons.user} alt="" />
                    </div>
                    <h2>{props.t('shorex:account-creation-date')}<br />
                        <small>{user?.created_at && new Date(user?.created_at).toDateString()}</small>
                    </h2>
                </li>}
            </ul>
            <AlertModal
                actionType={'block'}
                text={props.t(`shorex:are-you-sure-want-to-${user?.status_id === 1 ? "block" : "unblock"}-this-user?`) + props.t('shorex:please-give-a-confirmation')}
                confirmButton={props.t('shorex:confirm-&-send')}
                showModal={blockModal}
                setModal={setBlockModal}
                user={{ id: user?.id, status: user?.status_id, setUser: setUser }}
            />
            <AlertModal
                actionType={'delete'}
                text={`${props.t('shorex:are-you-sure-want-to-delete-this-user?')}  ${props.t('shorex:please-give-a-confirmation')}`}
                confirmButton={props.t('shorex:confirm-&-delete')}
                showModal={deleteModal}
                setModal={setDeleteModal}
                user={{ id: user?.id, status: user?.status_id, setUser: setUser }}
            />
        </>
    )
}

export default withTranslation(['base','nav','shorex'])(InfoList)



