import React from 'react';
import { useParams } from "react-router";

import { UpdateView } from './update-view';
import { UserInfo } from './user-info';
import { FavoriteMovies } from './favorite-movies';
import { DeleteUser } from './delete-user';

import { Row, Col, Card } from 'react-bootstrap';

export const ProfileView = ({ movies }) => {
    const storedToken = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem('user'));


    return (
        <>
            <Row>
                <Col md={5}>
                    <UserInfo toredToken={storedToken} storedUser={storedUser} />
                    <UpdateView storedToken={storedToken} storedUser={storedUser} />
                    <DeleteUser storedToken={storedToken} storedUser={storedUser} />
                </Col>
                <Col md={7}>
                    <FavoriteMovies movies={movies} storedUser={storedUser} />
                </Col>
            </Row>
        </>
    );
};