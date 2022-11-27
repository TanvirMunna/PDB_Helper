import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';

const Myorders = () => {
    const orders = useLoaderData();
    const { brand, image, resalePrice, seller, productName, sellerEmail } = orders;
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const bookingHandler = data => {

        // addProducts to database collection

        const orders = {
            phone: data.phone,
            buyerName: data.name,
            buyerLocation: data.location,
            seller: data.seller,
            productName: data.productName,
            brand: data.brand,
            price: data.price,
            image,
            sellerEmail,
        }

        fetch('https://smart-resale-stall-server.vercel.app/ordered', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('Successfully booked the product.');
                navigate('/orderedProduct');
            })
    }

    return (
        <div className='my-14 w-2/4 mx-auto bg-[#a8dadc] rounded-md'>
            <form onSubmit={handleSubmit(bookingHandler)}>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    <div className="form-control w-full p-3">
                        <label className='label-text'>Product name</label>
                        <input className='input' defaultValue={productName} readOnly type="text" {...register("productName")} />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Brand name</span>
                        </label>
                        <input className="input" type='text' defaultValue={brand} readOnly
                            {...register('brand')}>
                        </input>
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>

                        <input className="input input-bordered w-full" type='text' defaultValue={resalePrice} readOnly {...register("price")}
                        />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your Location</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("location", { required: true })}
                            aria-invalid={errors.location ? "true" : "false"}
                            placeholder="e.g: Dhaka, Segunbagicha"
                        />
                        {errors.location?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your location is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Seller</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            defaultValue={seller} readOnly
                            {...register("seller")}
                        />
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your Phone number</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("phone", { required: true })}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="e.g: 01234567890"
                        />
                        {errors.originalPrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your Phone number is required</p>}
                    </div>

                    <div className="form-control w-full p-3">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>

                        <input className="input input-bordered w-full" type='text'
                            {...register("name", { required: true })}
                            aria-invalid={errors.originalPrice ? "true" : "false"}
                            placeholder="e.g: your name"
                        />
                        {errors.originalPrice?.type === 'required' && <p role="alert" className='text-red-700 font-xs'>Your name is required</p>}
                    </div>
                </div>

                <div className="form-control my-3">
                    <button className='btn btn-success text-white font-semibold capitalize'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Myorders;