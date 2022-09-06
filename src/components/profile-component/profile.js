import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';
import PropTypes from 'prop-types';
import { Trash } from 'react-feather';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

export function Profile(props) {
    const { movies, onBackClick, userData, removeFavorite, callDispatch } = props;
    const { name, username, email, phone, address, projects } = userData;

    return (
        <Container fluid >
            <Row className='mb-4 mt-3'>
                <Col className='mt-5'>

                </Col>
            </Row>
            <Card className='m-auto movie-view profile-card' style={{ maxWidth: '1128px', backgroundColor: '#1E2127', color: 'white' }}>
                <Card.Title style={{ fontSize: '30px' }} className='m-3'>Personal Info</Card.Title>
                <Row>
                    <Card.Text style={{ textAlign: 'center' }}>UNDER MAINTENANCE</Card.Text>
                    {/* <Card.Text>{username}</Card.Text>
                    <Card.Text>{email}</Card.Text>
                    <Card.Text>{phone}</Card.Text>
                    <Card.Text>{projects}</Card.Text> */}
                </Row>
            </Card >
        </Container >
    );
}