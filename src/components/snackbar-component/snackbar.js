import React from "react"
import './snackbar.css';
export default function Snackbar(props) {
  let { message, show, setShow, loading } = props;
  if (loading === undefined) { loading = false };
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
          <>
            <div>{message}</div>
            <div style={{ height: '30px' }}>
              <div className='load'>
                <div className='loading' />
              </div>
            </div>
          </>
          :
          message
        }
        {!loading &&
          <button type="button" className="close-btn" onClick={() => setShow(false)}>OK</button>
        }
      </div>
    </div>
  )
}