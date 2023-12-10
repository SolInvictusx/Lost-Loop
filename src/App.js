import './App.css';
import AboutUs from './LandingPage/About';
import BusinessDetails from './LandingPage/BeefDetails';
import Carousel, { CarouselItem, ImgFour, ImgOne, ImgThree, ImgTwo } from './LandingPage/Carousel';
import { NewDetail } from './LandingPage/Family';
import FooterSection from './LandingPage/Footer';
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
      <AboutUs />
      <FooterSection />
    </>
  );
};

export default App;
