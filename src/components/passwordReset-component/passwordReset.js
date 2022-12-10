import React from 'react'
import { useParams } from 'react-router-dom';

export default function PasswordReset(props) {
  let params = useParams();
  let { id, resetString } = params;

  return (
    <h1>Hello</h1>
  )
}