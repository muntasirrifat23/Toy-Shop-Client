import React, { useContext, useEffect, useState } from 'react';
import { AuthContest } from '../Auth/Auth';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';

const All = () => {
    const [allToys, setAllToys] = useState([]);
    
  

    

    useEffect(() => {
        fetch('https://server-11-lac.vercel.app/data')
          .then(res => res.json())
          .then(data => setAllToys(data))
          .catch(err => console.log(err))
      }, [])

    return (
        <Container className='flex justify-center'>
          
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8'>
        {
         allToys.map(toy=> <Cards
            key={toy._id}
            toy={toy}
            >

         </Cards> )
        }
        </div>
        </Container>
    );
};

export default All;