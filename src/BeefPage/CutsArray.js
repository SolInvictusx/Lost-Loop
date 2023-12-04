import image1 from '../img/GroundBeef.jpg';
import image2 from '../img/Steaks.jpeg';

const BeefArray = () => {
    const imgArray = [
        image1,
        image2,
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
