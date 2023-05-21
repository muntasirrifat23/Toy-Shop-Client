import React from 'react';
import { Button } from 'react-bootstrap';

const ToyCard = ({ my }) => {
    const { _id, image, name, price, rating } = my;

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head*/}
                    <thead className='text-center'>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>{name}</td>
                            <td>${price}</td>
                            <td>{rating}</td>
                            <td ><Button className='bg-green-700'>Buy Now</Button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default ToyCard;