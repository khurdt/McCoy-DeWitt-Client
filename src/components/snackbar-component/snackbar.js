import React, { useEffect, useState } from "react"
import './snackbar.css';
export default function Snackbar(props) {
  const { setSnackBarInfo, snackBarInfo, showLogin, primaryColor, secondaryColor } = props;
  let { show, loading, message } = snackBarInfo;
  const [timeoutOn, setTimeoutOn] = useState(false);

  useEffect(() => {
    if (show === undefined) { show = 'initial' }
    if (show === 'true' && !timeoutOn && loading === false) {
      setTimeoutOn(true);
      setTimeout(() => {
        setTimeoutOn(false);
        setSnackBarInfo({
          message: message,
          loading: false,
          show: 'false'
        })
      }, 5000);
    }
  }, [show]);

  return (
    <>
      {showLogin &&
        <div className="background modal-backdrop"></div>
      }
      <div
        className={(show === 'initial') ? 'notification-container' :
          (show === 'true') ? 'notification-container show' :
            (show === 'false') && 'notification-container hide'}>
        <div className='notification-message' style={{ border: `1px solid ${primaryColor}`, backgroundColor: secondaryColor }}>
          {loading ?
            <>
              <div>{message}</div>
              <div style={{ height: '30px' }}>
                <div className='load'>
                  <div className='loading' style={{ borderTop: `4px solid ${primaryColor}` }} />
                </div>
              </div>
            </>
            :
            message
          }
          {!loading &&
            <button type="button" style={{ backgroundColor: primaryColor }} className="close-btn" onClick={() => {
              setSnackBarInfo({
                message: message,
                loading: false,
                show: 'false'
              })
            }}>OK</button>
          }
        </div>
      </div>
    </>
  );
}