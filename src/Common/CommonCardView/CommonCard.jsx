import React from 'react'
import placeholder from "./../../assets/images/placeholder.jpg"
import edit from "./../../assets/images/edit.svg"
import "./card.scss"
import { OverlayTrigger, Tooltip, Button, } from "react-bootstrap"
import { useHistory } from "react-router-dom"
import {withTranslation} from 'react-i18next'

const CommonCard = (props) => {
    const currentUser=JSON.parse(localStorage.getItem('currentUser'))
    const history = useHistory()
    return (

        <>
            {props.text1 &&

                <div className={`customerCard ${props.view}`}
                    onClick={() => history.push(props.redirect ?? "#")}>

                    <img src={props?.avatar ?? placeholder} alt="" />

                    <div className="text">
                        <OverlayTrigger placement="bottom-start" overlay={<Tooltip id="tooltip-name">{props.text1}</Tooltip>}>
                            <h4 className="text-black" >{props.text1}</h4>
                        </OverlayTrigger>
                        {props.text2 && <p className="text-gray">{props?.text2}</p>}
                    </div>

                    {!props.hide &&
                        <div className="buttons">
                            <OverlayTrigger placement="right" overlay={<Tooltip id="tooltip-edit">{props.t('base:table-edit-btn')}</Tooltip>}>
                                <Button onClick={(e) => {
                                e.stopPropagation();
                                history.push(props?.edit ?? "#")
                            }} className="ms-auto"  variant="">
                              <img src={edit} alt="edit-icon" className="" />
                            </Button>
                            </OverlayTrigger>
                            {
                                    currentUser.roles.includes('Admin') &&
                            <OverlayTrigger placement="right" className="danger" overlay={<Tooltip id="tooltip-delete">{props.t('base:table-delete-btn')}</Tooltip>}>
                               

                                    <Button variant="" onClick={(e) => {
                                        e.stopPropagation();
                                        props.delete()
                                    }}
                                    >
                                        <i className="fa-solid fa-trash"></i>
                                    </Button>
                               
                            </OverlayTrigger>
                             }
                        </div>
                    }
                </div>}
        </>
    )
}

export default withTranslation(['base', 'shorex']) (CommonCard)