import React from "react"
import './snackbar.css';
export default function Snackbar(props) {
  let { message, show, setShow, loading } = props;
  if (show && !loading) {
    setTimeout(
      () => {
        setShow(false);
      },
      6000
    );
  }
  return (
    <div className={(show === 'initial') ? 'notification-container' : (show === true) ? 'notification-container show' : 'notification-container hide'}>
      <div className='notification-message'>
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