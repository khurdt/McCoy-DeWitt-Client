import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { ArrowRight, ArrowLeft, UserPlus, LogIn } from 'react-feather';
import './customButton.css';

export default function CustomButton(props) {
  const {
    onClickFunction,
    text, primaryColor,
    currentChoice,
    setCurrentChoice,
    secondaryColor,
    submitButton,
    arrowRight,
    arrowLeft,
    register,
    login,
    small } = props;

  const handleChoice = (event) => {
    if (currentChoice) {
      currentChoice.backgroundColor = '';
      currentChoice.color = 'black';
    }
    setCurrentChoice(event.target.style);
    event.target.style.backgroundColor = primaryColor;
    event.target.style.color = 'black';
  }


  return (
    <>
      {submitButton ?
        <Button
          className='customSubmitButton'
          variant='light'
          onClick={(e) => { onClickFunction(e); }}
          style={{ backgroundColor: primaryColor, borderColor: primaryColor }}>{text}</Button>
        :
        <Button
          className={(small) ? 'smallCustomButton' : 'customButton'}
          variant='light'
          onClick={(e) => { handleChoice(e); onClickFunction(e); }}
          style={{ borderColor: primaryColor }}>
          {arrowLeft &&
            <ArrowLeft style={{ width: '20px', height: '20px', paddingRight: '5px', color: 'red' }} />
          }
          {text}
          {arrowRight ?
            <ArrowRight style={{ width: '20px', height: '20px', paddingLeft: '5px', color: primaryColor }} />
            :
            (register) ?
              <UserPlus
                style={{ width: '20px', height: '20px', color: 'black', marginLeft: '10px' }}
                alt='send icon'
              />
              :
              (login) &&
              <LogIn
                style={{ width: '20px', height: '20px', color: 'black', marginLeft: '10px' }}
                alt='send icon'
              />
          }
        </Button>
      }
    </>
  );
}