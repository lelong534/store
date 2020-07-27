import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Product from "./component/Product";
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch, Route} from 'react-router-dom';
import NavBar from "./component/NavBar";
import Default from "./component/Default";
import ProductList from "./component/ProductList";
import Details from "./component/Details";
import Cart from "./component/Cart";
import Modal from "./component/Modal";

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/" component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
