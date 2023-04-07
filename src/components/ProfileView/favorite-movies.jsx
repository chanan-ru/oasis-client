// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { Card, Row, Col, Button, Form, ListGroup } from 'react-bootstrap';


// export const FavoriteMovies = ({ user, movies }) => {
//     const [user, setUser] = useState(storedUser ? storedUser : null);
//     let favoriteMoviesList = movies.filter((m) =>
//         user.FavoriteMovies.includes(m.id)
//     );
//     // const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id));
//     // console.log(favoriteMovieList)
//     return (
//         <Col>
//             <h2>Favorite Movies</h2>
//             {favoriteMovieList.map((movies) => {
//                 return (
//                     <div key={movies._id}>
//                         <img src={movies.Image} alt="" />
//                         <Link to={`/movies/${movies._id}`}>
//                             <h4>{movies.Title}</h4>
//                         </Link>
//                         <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from list</button>
//                     </div>
//                 )
//             })}
//         </Col>
//     )
// }

import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { MovieCard } from '../MovieCard/movie-card';

// Need to fetch user after like/dislike movie, so that
// relevant info user.FavoriteMovies will be displayed on Home page
export const FavoriteMovies = ({ movies, storedUser }) => {
    const [user, setUser] = useState(storedUser ? storedUser : null);

    let favoriteMoviesList = movies.filter((m) =>
        user.FavoriteMovies.includes(m.id)
    );

    return (
        <>
            {/* <Col md={7}> */}
            {favoriteMoviesList.length === 0 ? (
                <p>The list of favorite movies is empty</p>
            ) : (
                <>
                    <h3>Favorite movies</h3>
                    <Row>
                        {favoriteMoviesList.map((movie) => (

                            <Col md={6}>
                                <MovieCard
                                    movie={movie}
                                    user={user}
                                    updateUserOnFav={(user) => {
                                        setUser(user);
                                        localStorage.setItem('user', JSON.stringify(user));
                                    }}
                                />
                            </Col>

                        ))}
                    </Row>
                </>
            )}
            {/* </Col> */}
        </>
    );
};