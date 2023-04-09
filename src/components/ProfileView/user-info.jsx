// import React from 'react';
// import PropTypes from 'prop-types';

// import { useParams } from "react-router";
// import { Link } from "react-router-dom";

// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Card from "react-bootstrap/Card";

// import Avatar from './avatar.png';
// // import Button from "react-bootstrap/Button";
// // import Badge from 'react-bootstrap/Badge';

// // import { MovieCard } from '../MovieCard/movie-card';

// import './profile-view.scss';

// export const UserInfo = ({ user }) => {

//     // console.log(user);

//     // const { movieID } = useParams();
//     // const movie = movies.find((b) => b.id === movieID);

//     return (

//         <Row className="justify-content-md-center">
//             <Col md={5} >
//                 <Card.Img
//                     rounded
//                     variant="top"
//                     src={Avatar}
//                 // width={200}
//                 // className="rounded-0"

//                 // height={50}
//                 />
//             </Col>


//             {/* <Col md={5} lg={4} className="mb-3">
//                 <div><img src={movie.image} alt={movie.title} /></div>
//             </Col> */}
//             <Col md={12}>

//                 <div>
//                     <span>Name: </span>
//                     <span>{user.Name}</span>
//                 </div>
//                 <div>
//                     <span>Username: </span>
//                     <span>{user.Username}</span>
//                 </div>
//                 <div>
//                     <span>Email: </span>
//                     <span>{user.Email}</span>
//                 </div>
//                 <div>
//                     <span>Date of Birth: </span>
//                     {/* <span>{movie.director}</span> */}
//                 </div>

//                 <Link to={`/`}>
//                     <button className="back-button">Back</button>
//                 </Link>
//             </Col>

//         </Row>
//     );
// };

// // MovieView.PropTypes = {
// //     movie: PropTypes.shape({
// //         title: PropTypes.string,
// //         description: PropTypes.string,
// //         genre: PropTypes.string,
// //         director: PropTypes.string
// //     }).isRequired,
// //     onBackClick: PropTypes.func.isRequired
// // };


import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import moment from 'moment';

import './user-info.scss';

import Avatar from './avatar.png';

export const UserInfo = ({ user }) => {
    console.log(user)
    let userBirthday = moment.utc(user.Birthday).format('MM/DD/YYYY');

    return (
        <>
            {/* <Col md={5} > */}
            <h3>User's Details</h3>
            <div className="user_detail mb-3">
                <img src={Avatar} className="avatar" alt="" />
                <p><span>Name:</span> {user.Name}</p>
                <p><span>Username:</span> {user.Username}</p>
                <p><span>Email:</span> {user.Email}</p>
                <p><span>Birthday:</span> {userBirthday}</p>
            </div>
            {/* </Col> */}

        </>
    );
};