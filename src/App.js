import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AddService from './Pages/AddService/AddService';
import Notfound from './Pages/NotFound/Notfound';
import Purchase from './Pages/Purchase/Purchase';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Explore from './Pages/Explore/Explore';
import Reviews from './Pages/Reviews/Reviews';




function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
          <Switch>
            <Route exact path = "/">
              <Home></Home>
            </Route>
            <Route path = "/home">
              <Home></Home>
            </Route>
            <Route path = "/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/purchase/:_id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path = "/addService">
              <AddService></AddService>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path = "/login">
              <Login></Login>
            </Route>
            <Route path = "/register">
              <Register></Register>
            </Route>
            <Route path = "*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
