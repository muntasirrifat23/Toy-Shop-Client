import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const toy = useLoaderData();
    console.log(toy);
    // const { id, name, image } = useParams();

    // console.log(toy)

    return (
        <div className="flex justify-center">
            {toy.map(({ id, name, image,price,rating, des }) => (
                <div key={id}  className='flex justify-center'>
                     <div className="card card-compact w-3/4 bg-base-100 shadow-xl flex justify-center">
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
                            <h2 className="font-semibold">{des}</h2>


                            <div className="card-actions">
                                <Link>
                                    <button className="btn btn-primary bg-green-800">Buy Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}



        </div>
    );
};

export default Details;