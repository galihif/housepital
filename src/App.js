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
import Admin from "./pages/Admin";
import Footer from "./components/Footer";
import AppointmentDetailsAdmin from "./pages/AppointmentDetailsAdmin";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <NavbarM />
          <div>
            <Switch>
              <Route exact path="/admin">
                <Admin/>
              </Route>
              <Route exact path="/admin/appointmentdetails/:id">
                <AppointmentDetailsAdmin/>
              </Route>
              <Route exact path="/profile/:id">
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
