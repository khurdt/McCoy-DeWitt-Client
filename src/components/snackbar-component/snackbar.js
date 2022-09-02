import React, { useState } from "react"
import './snackbar.css';
export default function Snackbar(props) {
  let { message, show, setShow, loading } = props;
  return (
    <div className='notification-container'>
      <div className={(show === 'initial') ? 'notification-message' : (show === true) ? 'notification-message show' : 'notification-message hide'}>
        {loading ?
          <div style={{ height: '30px' }}>
            <div className='load'>
              <div className='loading' />
            </div>
          </div>
          :
          message
        }
        <button type="button" className="close-btn" onClick={() => setShow(false)}>x</button>
      </div>
    </div>
  )
}