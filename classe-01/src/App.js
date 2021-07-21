import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes'
import MenuLateral from './components/MenuLateral';

function App() {
  
  return (
    <div className="app">
      <Router>
        <MenuLateral/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
