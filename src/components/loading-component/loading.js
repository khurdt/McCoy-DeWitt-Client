import React from "react"
import { Container, Row } from "react-bootstrap";
import './loading.css';

function Loading(props) {
  const { primaryColor } = props;

  return (
    <>
      <div id="loading">
        <div className="loading-object" style={{ backgroundColor: primaryColor, boxShadow: `0px 0px 10px ${primaryColor}` }}></div>
      </div>
      <div style={{ height: '100vh' }}>

      </div>
    </>
  );
}
export default Loading;