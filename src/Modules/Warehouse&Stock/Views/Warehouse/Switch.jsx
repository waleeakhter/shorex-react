import React from 'react'
import Style from "./Switch.module.scss"
const Switch = ({status , data}) => {
  return (
   <div className="d-flex align-items-center " style={{ gap:20}}>
    <span>{status === 1 ? 'Activated' : 'Deactived'}</span>
     <div className={`form-group mb-0 ${Style.customSwitch}`}>
            <input type="checkbox" id={'status' + data.id}
                defaultChecked={status === 1 ? true : false} defaultValue={status} />
            <label htmlFor={'status' + data.id}></label>
        </div>
   </div>
  )
}

export default Switch