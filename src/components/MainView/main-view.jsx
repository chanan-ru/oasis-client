// imported the useState() function with an empty array.
import { useState, useEffect } from "react";
import { useReducer } from "react/cjs/react.production.min";
import { MovieCard } from "../MovieCard/movie-card";
import { MovieView } from "../MovieView/movie-view";
import { LoginView } from "../LoginView/login-view";
import { SignupView } from "../SignupView/signup-view";

export const MainView = () => {
    const [movies, setMovies] = useState([]);
    // the value is "Null" to tell the app that no book cards were clicked. 
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://oasismovie.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {

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


            });
    }, []);

    if (!user) {
        return (
            <>
                <LoginView onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }} />
                or
                <SignupView />
            </>
        );

    };

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />;
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    }

    return (
        <>
            <div>
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onMovieClick={(newSelectedMovie) => {
                            setSelectedMovie(newSelectedMovie);
                        }}
                    />
                ))}
            </div>
            <button onClick={() => { setUser(null); }}>Logout</button>
        </>
    );


};



