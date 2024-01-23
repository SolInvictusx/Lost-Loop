import image1 from '../img/Hamburger.jpg';
import image2 from '../img/T-bone.jpg';
import image3 from '../img/KCStrip.jpeg';
import image4 from '../img/ChuckRoast.jpg';
import image5 from '../img/RumpRoast.jpg';
import image7 from '../img/CubeSteak.jpg';
import image8 from '../img/Ribeye.jpg';
import image9 from '../img/Sirloin.jpg';

const BeefArray = () => {
    const imgArray = [
        { src: image1, text: 'Hamburger' },
        { src: image2, text: 'T-bone' },
        { src: image3, text: 'KC Strip' },
        { src: image4, text: 'Chuck Roast' },
        { src: image5, text: 'Rump Roast' },
        { src: image7, text: 'Cube Steak' },
        { src: image8, text: 'Ribeye' },
        { src: image9, text: 'Sirloin Steak' },
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
