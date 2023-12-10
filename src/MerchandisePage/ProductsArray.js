import image1 from '../img/T-shirts.png';
import image2 from '../img/T-shirts2nd.png';
import image3 from '../img/Hoodie.png';
import image4 from '../img/Hoodie2nd.png';

const MerchAray = () => {
    const sellArray = [
        { src: image1, text: 'White T-shirt' },
        { src: image2, text: 'Black T-Shirt' },
        { src: image3, text: 'Grey Hoodie' },
        { src: image4, text: 'Black Hoodie' },
    ];

    return (
        <div className="img-gallery">
            {sellArray.map((item, index) => (
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

export default MerchAray;