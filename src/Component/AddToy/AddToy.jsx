import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContest } from '../Auth/Auth';
import Select from 'react-select';

const AddToy = () => {
    const { user } = useContext(AuthContest);
    const [selectedOption, setSelectedOption] = useState(null);

    const { register, handleSubmit, formState: { errors }
    } = useForm();
    const onSubmit = data =>{
        data.skills = selectedOption;
        fetch("https://server-11-muntasirrifat23.vercel.app/post-toy", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
            });
        console.log(data);
    } 

    const options = [
        { value: "Sports Toy", label: "Sports Toy" },
        { value: "Girls Toy", label: "Girls Toy" },
        { value: "Robot Toy", label: "Robot Toy" },
        { value: "Illustration Toy", label: "Illustration Toy" },
        { value: "Toy Set", label: " Toy Set" },
      ];

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-green-600">
                    <div className="card-body">
                        <h1 className="text-5xl font-bold text-white">Add New Toy</h1>
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter your name" className="input input-bordered" required />
                        </div>
                        {/* Seller */}
                         <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name='sellername' placeholder="Seller name" className="input input-bordered"  />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        
                        {/* pass */}
                        <div className="form-control">
                            <p>Select Category</p>
                            
                        <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
      />
      {/* Price */}
      <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" name='price' placeholder="Price" className="input input-bordered"  />
                        </div>
                        {/* Number */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="number" name='quantity' placeholder="Quantity" className="input input-bordered"  />
                        </div>


                            {/* url */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name='url' className="file-input file-input-bordered w-full max-w-xs" placeholder='Toy URL' required />
                            </div>
                        </div>
                        {/* Button */}
                        <div className="form-control mt-6">


                            <button className="btn btn-primary">Add Toy</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div> 
     
    </form>
        </div>

    );
};

export default AddToy;