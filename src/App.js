//Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//styling
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//component
import Home from './pages/Home'
import NavbarM from "./components/NavbarM";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarM />
        <Home />
      </div>
    </Router>
  );
}

export default App;
