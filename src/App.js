import Navbar from './components/Navbar/Navbar.js';
import MainContent from './components/MainContent/MainContent.js';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
      </div>
    </Router>
  );
}

export default App;
