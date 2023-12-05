import image1 from '../img/GroundBeef.jpg';
import image2 from '../img/Sirloin.jpg';
import image3 from '../img/KCStrip.jpeg';
import image4 from '../img/ChuckRoast.jpg';
import image5 from '../img/RumpRoast.jpg';
import image6 from '../img/FiletMignon.jpg';
import image7 from '../img/CubeSteak.jpg';

const BeefArray = () => {
    const imgArray = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    return (
        <div className="img-gallery">
            {imgArray.map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 1}`} className="gallery-img" />
            ))}
        </div>
    );
};

export default BeefArray;
