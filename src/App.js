
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import AddItems from './components/AddItems';
import ItemsList from './components/ItemsList';
import Login from './components/Login';
import Signup from './components/Signup';
import EditItems from './components/edit';
import  Personalprofile from './components/Personalprofile';
import Edituser from './components/edituser';


function App() {
  
  return (
    <Router className = "container">
      <div>
        
        <Navbar />

        <Route path = "/homepage" component = { Homepage } />
        <Route path="/ItemsList" component={ItemsList} />
        <Route path="/addItems" component={AddItems} />
        <Route path = "/addUser"  component = { Signup } />
        <Route path = "/login" component = { Login } />
        <Route path = "/edit/:id" component = { EditItems }/>
        <Route path = "/logout" component = { Login } />
        <Route path = "/personalprofile" component = {Personalprofile} />
        <Route path = "/edituser/:id" component = { Edituser}/>

    
      </div>
    </Router>
  );
}

export default App;

