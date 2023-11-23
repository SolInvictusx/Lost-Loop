import './App.css';
import NavBar from './LandingPage/Navigation';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <NavBar />
    </Router>
  );
};

export default App;
