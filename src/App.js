import './App.css';
import BusinessDetails from './LandingPage/BeefDetails';
import Carousel, { CarouselItem, ImgFour, ImgOne, ImgThree, ImgTwo } from './LandingPage/Carousel';
import { NewDetail } from './LandingPage/Family';
import Accordion from './LandingPage/FrequentlyAsked';
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
          <CarouselItem>
            <ImgFour />
          </CarouselItem>
        </Carousel>
        <BeefLink />
      </div>
      <BusinessDetails />
      <NewDetail />
      <Accordion />
    </>
  );
};

export default App;
