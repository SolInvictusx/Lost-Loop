import React from 'react';
import image1 from '../img/GroundBeef.jpg';
import image2 from '../img/Sirloin.jpg';
import image3 from '../img/KCStrip.jpeg';
import image4 from '../img/ChuckRoast.jpg';
import image5 from '../img/RumpRoast.jpg';
import image6 from '../img/FiletMignon.jpg';
import image7 from '../img/CubeSteak.jpg';
import image8 from '../img/SirloinTipRoast.jpg';

const BeefArray = () => {
    const imgArray = [
        { src: image1, text: 'Ground Beef' },
        { src: image2, text: 'Sirloin Steak' },
        { src: image3, text: 'KC Strip' },
        { src: image4, text: 'Chuck Roast' },
        { src: image5, text: 'Rump Roast' },
        { src: image6, text: 'Filet Mignon' },
        { src: image7, text: 'Cube Steak' },
        { src: image8, text: 'Sirloin Tip Roast' },
    ];

    return (
        <div className="img-gallery">
            {imgArray.map((item, index) => (
                <div key={index} className="gallery-item">
                    <div className='image-container'>
                        <img src={item.src} alt={`Image ${index + 1}`} className="gallery-img" />
                    </div>
                    <div className="image-text">{item.text}</div>
                </div>
            ))}
        </div>
    );
};

export default BeefArray;
