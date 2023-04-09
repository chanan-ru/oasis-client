import { Link } from 'react-router-dom';
import React from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

import Button from 'react-bootstrap/Button';

import './favorite-icon.scss';


// to get right color of Icon we need to refresh the page
export const FavoriteIcon = ({ user, movie, updateUserOnFav }) => {
    const token = localStorage.getItem('token');

    const alreadyFavorite = user.FavoriteMovies.find(
        (favMovieId) => favMovieId === movie.id
    );



    const toggleFavorite = () => {
        if (!token) return;

        const url = `https://oasismovie.herokuapp.com/users/${user.Username}/movies/${movie.id}`;

        let requestOptions = {
            method: '',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        let resultAlert = '';

        if (alreadyFavorite) {
            requestOptions.method = 'DELETE';
            resultAlert = `${movie.title} is deleted from the list of favorites`;
        } else {
            requestOptions.method = 'POST';
            resultAlert = `${movie.title} is added to the list of favorites`;
        }

        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                alert(`${resultAlert}`);
                updateUserOnFav(data);
                document.querySelector('svg').classList.add('favorite-movie');
            })
            .catch((e) => {
                alert('Something went wrong');
            });
    };


    return (
        <Button
            onClick={() => toggleFavorite()}
            className="btn_style btn_fav"
            id='favMovieButton'
        >
            {alreadyFavorite ? (
                <span><FaMinus className='favorite-movie' /> Remove from favorite</span>

            ) : (
                <span><FaPlus className='favorite-movie' /> Add to favorite</span>
            )}
        </Button>

    );
};