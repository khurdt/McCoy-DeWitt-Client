import React from "react"
import './loading.css';

function Loading() {

  return (
    <div style={{ height: '60px' }}>
      <div className='circle'>
        <div className='spinningCircle' />
      </div>
    </div>
  );
}
export default Loading;