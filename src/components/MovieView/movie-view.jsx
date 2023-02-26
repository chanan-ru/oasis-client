import PropTypes from 'prop-types';

export const MovieView = ({ movie, onBackClick }) => {
    return (
        <>
            <div><img src={movie.image} alt={movie.title} /></div>
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
            <button onClick={onBackClick}>Back</button>
        </>
    );
};

MovieView.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        genre: PropTypes.string,
        director: PropTypes.string
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};

