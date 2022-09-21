import React, { useEffect, useState } from "react"
import './snackbar.css';
export default function Snackbar(props) {
  const { setSnackBarInfo, snackBarInfo, showLogin, primaryColor, secondaryColor } = props;
  const [timeoutClear, setTimeoutClear] = useState(true);
  let { show, loading, message } = snackBarInfo;

  useEffect(() => {
    if (show === undefined) { show = 'initial' };
    (show === true && timeoutClear) && timeoutFunction();
  }, []);

  const timeoutFunction = () => {
    setTimeout(
      () => {
        setTimeoutClear(true);
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
      <div
        className={(show === 'initial') ? 'notification-container' :
          (show === true) ? 'notification-container show' :
            (show === false) && 'notification-container hide'}>
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
                ...snackBarInfo,
                show: false
              })
            }}>OK</button>
          }
        </div>
      </div>
    </>
  );
}