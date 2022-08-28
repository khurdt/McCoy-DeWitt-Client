import React from "react"
import './snackbar.css';
export default function Snackbar() {

  return (
    <div className='notification-container'>
      <div className='notification-message'>
        Lorem ipsum dolor sit amet
        <button type="button" className="close-btn">x</button>
      </div>
    </div>
  )
}