import Family from '../img/Family.jpeg';

export const NewDetail = () => {
    return (
        <div className='family-container'>
            <div className='family-section'>
                <img src={Family} alt='Family photo' className='family-img' />
            </div>
            <ul className='who-we-are'>
                <li>Locally raised in Linn, MO</li>
                <li>Premium Black Angus</li>
                <li>All at an affordable price</li>
            </ul>
        </div>
    );
};
