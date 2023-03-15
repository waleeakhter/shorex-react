import React from 'react'
import style from "./compponents.module.scss"
import logo from "./../assets/images/Logo.svg"
const FlashScreen = ({ check }) => {
    return (
        <div className={`${style.flashScreen} ${check ? style.active : ""}`}>
            <div className={style.color}></div>
            <img src={logo} alt="logo" className={style.logo} />
        </div>
    )
}

export default FlashScreen