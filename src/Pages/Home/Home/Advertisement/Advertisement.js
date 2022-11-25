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
                    products?.map(product => <div className="bg-[#bde0fe] shadow-xl my-8 flex flex-col justify-between p-3 rounded-lg"
                        key={product._id}
                    >

                        <div className='rounded-md'>
                            <img className='w-full h-52 rounded-md' src={product.image} alt="Shoes" />
                        </div>

                        <div className="">
                            <h2 className="">{product.brand}</h2>

                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">

                                <button className="btn btn-primary">WishList</button>
                            </div>
                        </div>

                    </div>)
                }
           </div>
        </div>
    );
};

export default Advertisement;