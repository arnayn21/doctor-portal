import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import DoctorPanel from './components/DoctorPanel/DoctorPanel';
import AppointMent from './components/AppointMent/AppointMent'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/doctorPanel">
            <DoctorPanel></DoctorPanel>
          </Route>
          <Route path="/getAppointment">
            <AppointMent></AppointMent>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;