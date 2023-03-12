import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
// import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

import './movie-card.scss';

export const MovieCard = ({ movie, onMovieClick }) => {
    console.log(movie.description);
    return (


        <Card className="h-100">
            <Card.Img variant="top" src={movie.image} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button onClick={() => onMovieClick(movie)} variant="primary" type="submit">
                    Open
                </Button>
            </Card.Body>
        </Card>

    );
};

MovieCard.PropTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
