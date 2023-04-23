import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import moment from 'moment';

import './user-info.scss';

import Avatar from './avatar.png';

export const UserInfo = ({ storedUser }) => {
    // console.log(storedUser)
    return (
        <>
            <h3>User's Details</h3>
            <div className="user_detail mb-3">
                <img src={Avatar} className="avatar" alt="" />
                <p><span>Name:</span> {storedUser.Name}</p>
                <p><span>Username:</span> {storedUser.Username}</p>
                <p><span>Email:</span> {storedUser.Email}</p>
                {/* <p><span>Birthday:</span> {storedUser.Birthday}</p> */}
            </div>

        </>
    );
};