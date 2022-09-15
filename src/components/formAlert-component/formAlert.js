import React from "react";
import { AlertCircle } from 'react-feather';
export default function FormAlert(props) {
  let { message, type, profile } = props;
  if (profile === undefined) { profile = false };
  return (
    <>
      {(type === 'error' && !profile) ?
        <>
          <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}>
            <AlertCircle width={20} height={20} style={{ color: 'red' }} />
          </p>
          <p style={{ color: 'red', fontSize: '12px', position: 'absolute', left: '40%', top: '10%' }}>
            {message}
          </p>
        </>
        :
        (profile) ?
          <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '25%' }}>
            <AlertCircle width={20} height={20} style={{ color: 'red' }} />
          </p>
          :
          <></>
      }
    </>
  )
}