import React from 'react'
import "./DashboardCard.scss"
const DashboardCard = (props) => {
    return (
        <div className={`customCard ${props.type} ${props.view ?? ''}`} style={props.bg && { backgroundColor: props.bg }} >
            <div className="image">
                <img src={props.image} alt="icon" />
            </div>
            <div className="textSide">
                <h1>{props.text1}</h1>
                {props.text2 && <p>{props.text2}</p>}
            </div>
        </div>
    )
}

export default DashboardCard