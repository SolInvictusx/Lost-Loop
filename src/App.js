import './App.css';
import Carousel, { CarouselItem, CarouselOne } from './LandingPage/Carousel';
import NavBar from './LandingPage/Navigation';

const App = () => {
  return (
    <>
      <NavBar />
      <Carousel>
        <CarouselItem>
          <CarouselOne />
        </CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </Carousel>
    </>
  );
};

export default App;
