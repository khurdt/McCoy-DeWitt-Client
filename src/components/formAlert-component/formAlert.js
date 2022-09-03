import React from "react";
import { AlertCircle } from 'react-feather';
export default function FormAlert(props) {
  let { message, type } = props;
  return (
    <>
      {(type === 'error') ?
        <>
          <p style={{ color: 'red', fontSize: '12px', position: 'absolute', right: '3%', top: '35%' }}>
            <AlertCircle width={20} height={20} style={{ color: 'red' }} />
          </p>
          <p style={{ color: 'red', fontSize: '12px', position: 'absolute', left: '25%', top: '10%' }}>
            {message}
          </p>
        </>
        :
        <></>
      }
    </>
  )
}