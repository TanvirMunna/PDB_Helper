import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../../assets/images/img1.jpg'
import img2 from '../../../../assets/images/img2.jpg'
import img3 from '../../../../assets/images/img3.png'
import img4 from '../../../../assets/images/img4.jpg'

import './banner.css'

const Banner = () => {
    const slider = [
        {
            id: 1,
            img: img1,
            model: 'AKG M008k'
        },
        {
            id: 2,
            img: img2,
            model: "Bose k19"
        },
        {
            id: 3,
            img: img3,
            model: "Sennheiser lo889k"
        },
        {
            id: 4,
            img: img4,
            model: 'sony 9 pro'
        },
    ]
    return (
        <Carousel className='main-slider' showArrows={true}>
                {
                    slider.map(slide => <div
                        key={slide.id}
                    >
                        <img className='h-[500px] rounded-md' src={slide.img} alt="images.jpg" />

                        <p className="legend">{slide.model}</p>
                    </div>)
                }
            </Carousel>
    );
};

export default Banner;