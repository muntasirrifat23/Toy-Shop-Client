import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const TabDetails = () => {

    const [allCars, setAllCars] = useState([]);


    useEffect(() => {
        fetch('https://server-11-lac.vercel.app/car')
            .then(res => res.json())
            .then(data => setAllCars(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='text-center m-8 mt-20 mb-20 '>
            <Tabs>
                <TabList className=' bg-green-800 font-bold text-xl text-white rounded-xl'>
                    <Tab>Car Toy</Tab>
                    <Tab>Sports Toy</Tab>
                    <Tab>Girls Toy</Tab>
                </TabList>

                <TabPanel className='flex justify-center mt-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex justify-center'>
                        {
                            allCars.map(car => <p key={car.id}>
                                <div className="card w-96 bg-base-100 shadow-xl text-center">
                                    <figure><img src={car.image} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title text-2xl font-bold text-green-800">{car.name}</h2>
                                        <div className='flex'>
                                            <p className='text-green-800 font-semibold text-lg card-title'>Price: ${car.price}</p>
                                            <h6 className='align-items-center text-red-900'>{car.rating}
                                                <Rating placeholderRating={car.rating}
                                                    readonly
                                                    emptySymbol={<FaRegStar />}
                                                    placeholderSymbol={<FaStar />}
                                                    fullSymbol={<FaStar />}>

                                                </Rating>
                                            </h6>
                                        </div>

                                    </div>
                                </div>

                            </p>)
                        }
                    </div>



                </TabPanel>


                <TabPanel>
                    <h2>Any content 2</h2>
                    <h2>Any content 2</h2>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                    <h2>Any content 3</h2>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabDetails;