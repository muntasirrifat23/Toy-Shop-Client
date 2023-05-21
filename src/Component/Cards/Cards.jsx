import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Cards.css'
const Cards = ({ toy }) => {
    const {id, image, name, price, rating } = toy;



    return (
        // <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        <div>
            <Row >
                <Col>
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl font-bold text-green-800">{name}</h2>
                            <div className='flex'>
                                <p className='text-green-800 font-semibold text-lg'>Price: ${price}</p>
                                <h6 className='align-items-center text-red-900'>{rating}
                                    <Rating placeholderRating={rating}
                                        readonly
                                        emptySymbol={<FaRegStar />}
                                        placeholderSymbol={<FaStar />}
                                        fullSymbol={<FaStar />}>

                                    </Rating>
                                </h6>
                            </div>


                            <div className="card-actions">
                                <Link to={`/add/${id}`}>
                                    <button className="btn btn-primary bg-green-800">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>
    );
};

export default Cards;