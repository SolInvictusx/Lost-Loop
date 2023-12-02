import Antibiotic from '../img/Antibiotic.png';
import Grain from '../img/Grain.png';
import Steroids from '../img/Steroids.png';
import Guarantee from '../img/Guarantee.png';



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