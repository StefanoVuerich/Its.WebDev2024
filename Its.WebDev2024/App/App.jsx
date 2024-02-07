import React, { Component } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import { Layout } from './Components/Layout';
import './style.scss';
import Home from './Components/Home';
import ProductList from './Components/Product/ProductList';
import ProductDetails from './Components/Product/ProductDetails';
import NotFound from './Components/NotFound';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:id">
            <ProductDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    );
  }
}
