import {Component} from 'react'


import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'

import CourierContext from './Context/CourierContext'

import Register from "./components/Register";

import NotFound from './components/NotFound'

import Home from "./components/Home";
import Login from "./components/Login";

import TrackingDetails from './components/TrackingDetails'
import './App.css'


class Courier extends Component {
  state = {
   TrackingNumberInput:"",
  }
  render(){
      return(
          <BrowserRouter>

          <CourierContext.Provider
          value={{
           
           TrackingNumberInput:""
          }}
        >
         <Switch>

         <Route exact path="/" component={Register} />
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute exact path="/trackingdetails" component={TrackingDetails}/>
      <Route path="/not-found" component={NotFound} />
      <Redirect to='/notfound' component={NotFound}/>
       </Switch>

        </CourierContext.Provider>

           </BrowserRouter>
          
      )
  }
}


export default Courier;
