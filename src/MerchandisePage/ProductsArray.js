import image1 from '../img/T-shirts.png';
import image2 from '../img/T-shirts2nd.png';
import image3 from '../img/Hoodie.png';
import image4 from '../img/Hoodie2nd.png';
import image5 from '../img/Stickers.png';
import image6 from '../img/Coffee Cup.png';


const MerchAray = () => {
    const sellArray = [
        { src: image1, text: 'White T-shirt' },
        { src: image2, text: 'Black T-Shirt' },
        { src: image3, text: 'Grey Hoodie' },
        { src: image4, text: 'Black Hoodie' },
        { src: image5, text: 'Stickers' },
        { src: image6, text: 'Coffee Cup' },
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