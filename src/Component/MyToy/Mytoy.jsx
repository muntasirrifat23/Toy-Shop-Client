import React, { useEffect, useState } from 'react';
import ToyCard from './ToyCard';

const Mytoy = () => {

    const [myToy, setmyToy] = useState([])

    useEffect(() => {
        fetch('https://server-11-lac.vercel.app/data')
            .then(res => res.json())
            .then(data => setmyToy(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {
                myToy.map(my => <ToyCard
                key={my._id}
                my={my}>
                </ToyCard>  

                )
            }
           
        </div>
    );
};

export default Mytoy;