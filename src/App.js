import './App.css';
import Carousel, { CarouselItem, ImgOne, ImgThree, ImgTwo } from './LandingPage/Carousel';
import { NewDetail } from './LandingPage/Family';
import NavBar from './LandingPage/Navigation';

const App = () => {
  return (
    <>
      <NavBar />
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
      <NewDetail />
    </>
  );
};

export default App;
