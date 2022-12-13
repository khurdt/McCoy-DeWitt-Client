import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import FormAlert from '../formAlert-component/formAlert';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { resetPassword } from '../servicesAPI';

export default function PasswordReset(props) {
  let params = useParams();
  let { id, resetString } = params;
  const { setSnackBarInfo, navigate, primaryColor } = props;

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleResetPassword = () => validate() && resetPassword(password, resetString, id, setSnackBarInfo, navigate);

  const validate = () => {
    let isValid = true;
    let newErrors = {};
    if (!password) {
      newErrors.password = 'required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'must be longer';
      isValid = false;
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'invalid match';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
      <Card style={{ marginTop: '50px', width: 'fit-content', height: 'fit-content', padding: '30px', marginRight: '10px', marginLeft: '10px' }}>
        <Card.Title className='text-center m-3'>Enter Your New Password</Card.Title>
        <Form
          style={{ margin: 'auto' }}>
          <Form.Group className='mb-1' style={{ width: '300px' }}>
            <FloatingLabel
              label='Password'
              className="mb-1">
              <Form.Control
                value={password}
                type='password'
                placeholder='Password'
                onChange={(e) => { setPassword(e.target.value); (errors.password) && validate() }} />
              {(errors.password) && <FormAlert message={errors.password} type={'error'} />}
            </FloatingLabel >
          </Form.Group>
          <Form.Group className='mb-1' style={{ width: '300px' }}>
            <FloatingLabel
              label='Confirm Password'
              className="mb-1">
              <Form.Control
                value={confirmPassword}
                type='password'
                placeholder='Confirm Password'
                onChange={(e) => { setConfirmPassword(e.target.value); (errors.confirmPassword) && validate() }} />
              {(errors.confirmPassword) && <FormAlert message={errors.confirmPassword} type={'error'} />}
            </FloatingLabel >
          </Form.Group>
        </Form>
        <Card.Footer style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            style={{ width: '150px', backgroundColor: primaryColor, color: 'black' }}
            onClick={() => handleResetPassword()}
            className='text-center mt-4'>Change Password</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}