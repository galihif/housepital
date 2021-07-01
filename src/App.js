//Library
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

//Config
import { store, persistor } from './config/store'


//styling
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavbarM />
          <div>
            <Switch>
              <Route path="/profile">
                <Profile />
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
          <Footer />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
