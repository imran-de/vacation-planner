import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Login from './pages/Login/Login/Login';
import Registration from './pages/Login/Registration/Registration';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import NotFound from './pages/404/NotFound';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Profile from './pages/Admin/Profile/Profile';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <PrivateRoute exact path="/user/:profile">
              <Profile></Profile>
            </PrivateRoute>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact-us">
              <Contact></Contact>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
