import image1 from '../img/SixteenthBeef.png';
import image2 from '../img/EigthBeef.png';
import image3 from '../img/FourthBeef.png';
import image4 from '../img/HalfBeef.png';
import image5 from '../img/WholeBeef.png';

const Amount = () => {
    const amountArray = [
        { src: image1, text: '1/16 Beef' },
        { src: image2, text: '1/8 Beef' },
        { src: image3, text: '1/4 Beef' },
        { src: image4, text: '1/2 Beef' },
        { src: image5, text: '1 Whole Beef' },

    ];

    return (
        <div className='amount-container'>
            <div className="img-gallery">
                {amountArray.map((item, index) => (
                    <div key={index} className="gallery-item">
                        <div className='image-container'>
                            <img src={item.src} alt={`Image ${index + 1}`} className="amount-img" />
                        </div>
                        <div className="image-text">{item.text}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Amount;