import React from "react";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FavoriteIcon } from '../FavoriteIcon/favorite-icon';

import './movie-card.scss';

export const MovieCard = ({ movie, user, updateUserOnFav }) => {
    const movieDescription = movie.description;
    const shortDescription = movieDescription.substring(0, 100) + "...";
    return (
        <Card className="h-100 movie_card">

            <Card.Img variant="top" src={movie.image} fluid />

            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>

                {movieDescription.length <= 100 ? (
                    <Card.Text>
                        {movieDescription}
                    </Card.Text>
                ) : (
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>

                )
                }

                <div className="group_btn">
                    <Button className="btn_style btn_custom" href={`/movies/${encodeURIComponent(movie.id)}`}>Open</Button>
                    <FavoriteIcon
                        user={user}
                        movie={movie}
                        updateUserOnFav={updateUserOnFav}
                    />
                </div>

            </Card.Body>
        </Card >
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired
};

// MovieCard.propTypes = {
//     movieData: PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired,
//       director: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         bio: PropTypes.string.isRequired,
//         birth: PropTypes.string.isRequired,
//         death: PropTypes.string,
//       }).isRequired,
//       genre: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//       }).isRequired,
//       image: PropTypes.string.isRequired,
//     }).isRequired,
//   };