import { useState, useEffect } from "react";
//imported the useState() function with an empty array.

import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Badge from 'react-bootstrap/Badge';

import './main-view.scss';

export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {

        if (!token) {
            return;
        }

        fetch("https://oasismovie.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((movies) => {

                // setMovies(movies);

                const moviesFromApi = movies.map((detail) => {
                    return {
                        id: detail._id,
                        title: detail.Title,
                        image: detail.ImageURL,
                        description: detail.Description,
                        genre: detail.GenreID.Name,
                        director: detail.DirectorID.Name
                    };
                });

                setMovies(moviesFromApi);
            });
    }, [token]);

    if (!user) {
        return (
            <>
                <Row className="justify-content-md-center">
                    <Col md={5} className="mb-5 mt-5">
                        <h1>Welcome to Oasis Movie!</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md={5}>
                        <LoginView
                            onLoggedIn={(user, token) => {
                                setUser(user);
                                setToken(token);
                            }}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-md-center mt-5 mb-3">
                    <Col md={5}>
                        Or create new account
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-5">
                    <Col md={5}>
                        < SignupView />
                    </Col>
                </Row>

            </>
        );
    }

    if (selectedMovie) {
        return (
            <Row className="justify-content-md-center mt-5 mb-5">
                <Col>
                    <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
                </Col>
            </Row>
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <>

            <Row className="mt-5 mb-5">
                {movies.map((movie) => (
                    <Col key={movie.id} lg={3} md={6} className="mb-5">
                        <MovieCard
                            key={movie.id}
                            movie={movie}
                            onMovieClick={(newSelectedMovie) => {
                                setSelectedMovie(newSelectedMovie);
                            }}
                        />
                    </Col>
                ))}
            </Row>
            <Button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }} variant="primary" type="submit">Logout</Button>

        </>
    );
};