import React from 'react';
import PropTypes from 'prop-types';

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";

import { FavoriteIcon } from '../FavoriteIcon/favorite-icon';

import './movie-view.scss';

export const MovieView = ({ movies, user, updateUserOnFav }) => {

    const { movieID } = useParams();
    const movie = movies.find((b) => b.id === movieID);

    return (

        <Row className="justify-content-md-center movie_detail">
            <Col md={5} lg={4} className="mb-3" >
                <div><img src={movie.image} alt={movie.title} /></div>
            </Col>
            <Col md={7} lg={6} >
                <div className="detail">


                    <div>
                        <span>Title: </span>
                        <span>{movie.title}</span>
                    </div>
                    <div>
                        <span>Description: </span>
                        <span>{movie.description}</span>
                    </div>
                    <div>
                        <span>Genre: </span>
                        <span>{movie.genre}</span>
                    </div>
                    <div>
                        <span>Director: </span>
                        <span>{movie.director}</span>
                    </div>

                </div>
                <FavoriteIcon
                    user={user}
                    movie={movie}
                    updateUserOnFav={updateUserOnFav}

                />
                <Button className="back-button btn_style" href={`/`}>Back</Button>
                <Link to={`/`}>

                </Link>
            </Col>
        </Row>
    );
};

MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    })
};