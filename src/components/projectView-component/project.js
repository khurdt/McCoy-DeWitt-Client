import React from "react";
import { Row, Col, Form, Button, Card, Dropdown, Badge, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Image } from 'cloudinary-react'
import './project.css';
import { useParams } from "react-router-dom"
import axios from 'axios';
import { Check, Mail, MapPin, Minus, MoreVertical, Phone, Plus, User, X } from 'react-feather';
import FormAlert from '../formAlert-component/formAlert';

export default function Project() {
  const { project, service } = useParams;

  return (
    <>
      <div style={{ position: 'relative' }}>
        <div className='project-background'></div>
        <Image publicId={service.image} className='projectImage projectImage' />
      </div>
    </>
  )
}