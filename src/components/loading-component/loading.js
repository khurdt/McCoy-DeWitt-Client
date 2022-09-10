import React from "react"
import { Container, Row } from "react-bootstrap";
import './loading.css';

function Loading() {

  return (
    <div id="loading">
      <div className="loading-object"></div>
    </div>
    // <div style={{ height: '200px' }}>
    //   <div className='circle'>
    //     <div className='spinningCircle' />
    //   </div>
    // </div>
  );
}
export default Loading;