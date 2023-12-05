import Antibiotic from '../img/Antibiotic.jpg';
import Grain from '../img/Grain.jpg';
import Steroids from '../img/Steroids.jpg';
import Guarantee from '../img/Guarantee.jpg';



export const AntibioticImg = () => {
    return (
        <img src={Antibiotic} alt={'Antibiotic Free'} className='business' />
    );
};

export const GrainImg = () => {
    return (
        <img src={Grain} alt={'Grain finished'} className='business' />
    );
};

export const SteroidsImg = () => {
    return (
        <img src={Steroids} alt={'Steroids Free'} className='business' />
    );
};

export const GuaranteeImg = () => {
    return (
        <img src={Guarantee} alt={'100 percent guarantee'} className='business' />
    );
};

const BusinessDetails = () => {
    return (
        <div className='business-container'>
            <AntibioticImg />
            <GrainImg />
            <SteroidsImg />
            <GuaranteeImg />
        </div>
    );
};

export default BusinessDetails;