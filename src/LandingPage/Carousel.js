import React, { useEffect, useState } from 'react';
import Background from '../img/Background.jpeg'
import Cattle from '../img/Cattle.jpeg'
import Hillside from '../img/Hillside.jpg'

import '../css/styles.css'

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

export const ImgOne = () => {
    return (
        <div>
            <img src={Cattle} className='church' />
        </div>
    )
}

export const ImgTwo = () => {
    return (
        <div>
            <img src={Background} className='church' />
        </div>
    )
}

export const ImgThree = () => {
    return (
        <div>
            <img src={Hillside} className='church' />
        </div>
    )
}

const Carousel = ({ children }) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }


    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 4500);


        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    return (
        <div className="carousel"
            onMouseOver={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }} >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
        </div>
    );
};

export default Carousel;

// Information for how this carousel was created can be found at the following link:
//medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0