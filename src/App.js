import './App.css';
import BusinessDetails, { GuaranteeImg } from './LandingPage/BeefDetails';
import Carousel, { CarouselItem, ImgOne, ImgThree, ImgTwo } from './LandingPage/Carousel';
import { NewDetail } from './LandingPage/Family';
import BeefLink from './LandingPage/LinkDisplay';
import NavBar from './LandingPage/Navigation';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='carousel-container'>
        <Carousel>
          <CarouselItem>
            <ImgOne />
          </CarouselItem>
          <CarouselItem>
            <ImgTwo />
          </CarouselItem>
          <CarouselItem>
            <ImgThree />
          </CarouselItem>
        </Carousel>
        <BeefLink />
      </div>
      <BusinessDetails />
      <NewDetail />
    </>
  );
};

export default App;
