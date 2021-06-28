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
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
        <NavbarM />
        <div>
          <Switch>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer/>
    </Router>
  );
}

export default App;
