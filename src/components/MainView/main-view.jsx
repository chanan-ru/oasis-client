import { useState, useEffect } from "react";
//imported the useState() function with an empty array.

import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";
import { NavigationBar } from "../NavigationBar/navigation-bar";
import { ProfileView } from '../ProfileView/profile-view';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Button from "react-bootstrap/Button";
// import Badge from 'react-bootstrap/Badge';

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import './main-view.scss';



export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = useState(storedUser ? storedUser : null);
    const [token, setToken] = useState(storedToken ? storedToken : null);
    const [movies, setMovies] = useState([]);



    useEffect(() => {

        if (!token) {
            return;
        }

        fetch("https://oasismovie.herokuapp.com/movies", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);

                const moviesFromApi = data.map((detail) => {
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
            })
            .catch((error) => {
                console.log(error);
            });
    }, [token]);

    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={() => {
                    setUser(null);
                    setToken(null);
                    localStorage.clear();
                }}
            />
            <Row >
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Row className="justify-content-md-center">
                                        <Col md={5}>
                                            <SignupView />
                                        </Col>
                                    </Row>
                                )}
                            </>

                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/users/:userName" />
                                ) : (
                                    <Row className="justify-content-md-center">
                                        <Col md={5}>
                                            <LoginView onLoggedIn={(user) => setUser(user)} />
                                        </Col>
                                    </Row>
                                )}
                            </>

                        }
                    />
                    <Route
                        path="/movies/:movieID"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView
                                            movies={movies}
                                            user={user}
                                            updateUserOnFav={(user) => {
                                                setUser(user);
                                                localStorage.setItem('user', JSON.stringify(user));
                                            }}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <>
                                        {movies.map((movie) => (
                                            <Col className="mb-4" key={movie.id} md={3}>
                                                {/* <MovieCard movie={movie} /> */}
                                                <MovieCard
                                                    movie={movie}
                                                    user={user}
                                                    updateUserOnFav={(user) => {
                                                        setUser(user);
                                                        localStorage.setItem(
                                                            'user',
                                                            JSON.stringify(user)
                                                        );
                                                    }}
                                                />
                                            </Col>
                                        ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/users/:userName"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to='/login' replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col>
                                        <ProfileView movies={movies} />
                                    </Col>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );




};