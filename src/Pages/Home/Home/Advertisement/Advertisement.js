import React from 'react';
import Categories from '../Categories/Categories';

const Advertisement = () => {
    return (
        <div>
            <Categories></Categories>

            <div className="card card-compact bg-[#bde0fe] shadow-xl my-8">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertisement;