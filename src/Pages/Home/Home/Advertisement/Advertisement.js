import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../../../Components/Loading';

const Advertisement = () => {

    // query
    const { data: products,isLoading } = useQuery({
        queryKey: ['addedProducts'],
        queryFn: async () => {
            const res = await fetch('http://localhost:8000/addedProducts');
            const data = await res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading/>
    }
    return (
        <div>
            <h1 className='text-3xl font-semibold mt-8'>Advertisement</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    products?.map(product => <div className="bg-[#bde0fe] shadow-xl my-4 flex flex-col justify-between p-3 rounded-lg"
                        key={product._id}
                    >

                        <div className='rounded-md'>
                            <img className='w-full h-52 rounded-md' src={product.image} alt="Shoes" />
                        </div>

                        <div className="">
                            <h2 className="text-xl font-semibold">{product.brand}</h2>

                            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                                <p>Location: {product.location}</p>
                                <p className='line-through text-gray-500'>Tk: {product.originalPrice}</p>
                                <p>Used: {product.usedTime}</p>
                                <p className='font-semibold'>Tk: {product.resalePrice}</p>
                                <p>Posted: {product.postedDate}</p>
                                <div>
                                    {
                                        product.seller ?
                                            <>
                                                <button className="" title='Verified'>
                                                    {product.seller}
                                                    <div className="badge badge-success"></div>
                                                </button>
                                            </>
                                            :
                                            <p>Unknown seller</p>
                                    }
                                </div>
                            </div>

                            <div className="card-actions justify-start mt-3">

                                <button className="btn btn-accent hover:btn-outline">WishList</button>

                                <button className="btn btn-success hover:btn-outline">Purchase</button>
                            </div>
                        </div>

                    </div>)
                }
           </div>
        </div>
    );
};

export default Advertisement;