// import PropTypes from 'prop-types';

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
// import Badge from 'react-bootstrap/Badge';

import './movie-view.scss';

export const MovieView = ({ movies }) => {

    const { movieID } = useParams();
    console.log(movieID);
    const movie = movies.find((b) => b.id === movieID);

    return (

        <Row className="justify-content-md-center">
            <Col md={5} lg={4} className="mb-3">
                <div><img src={movie.image} alt={movie.title} /></div>
            </Col>
            <Col md={7} lg={6}>
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
                {/* <Button className="back-button mt-3" style={{ cursor: "pointer" }} onClick={onBackClick}>Back</Button> */}
                <Link to={`/`}>
                    <button className="back-button">Back</button>
                </Link>
            </Col>

        </Row>
    );
};

// MovieView.PropTypes = {
//     movie: PropTypes.shape({
//         title: PropTypes.string,
//         description: PropTypes.string,
//         genre: PropTypes.string,
//         director: PropTypes.string
//     }).isRequired,
//     onBackClick: PropTypes.func.isRequired
// };