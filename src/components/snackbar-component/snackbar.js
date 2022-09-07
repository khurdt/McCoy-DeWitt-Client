import React, { useState } from "react"
import './snackbar.css';
export default function Snackbar(props) {
  const { setSnackBarInfo, snackBarInfo, showLogin } = props;
  const [clear, setClear] = useState(true);
  let { show, loading, message } = snackBarInfo;
  if (loading === undefined) { loading = false };

  if (show && !loading && clear) {
    setClear(false);
    setTimeout(
      () => {
        setClear(true);
        setSnackBarInfo({
          ...snackBarInfo,
          show: false
        });
      },
      6000
    );
  }

  return (
    <>
      {showLogin &&
        <div className="background modal-backdrop"></div>
      }
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
            <button type="button" className="close-btn" onClick={() => {
              setSnackBarInfo({
                ...snackBarInfo,
                show: false
              })
            }}>OK</button>
          }
        </div>
      </div>
    </>
  )
}