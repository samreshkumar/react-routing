import React from "react";
import { BrowserRouter as Router , Route, Link, Switch } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound'



const Routing = () =>{
    return(

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route component={NotFound}/>
          </Switch>

    );
}


export default Routing;