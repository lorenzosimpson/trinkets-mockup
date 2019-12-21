import React, {useState, useEffect } from 'react';
import { Route }from 'react-router-dom';
import axios from 'axios';


import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item'
import './App.scss';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

import {ItemContext} from './contexts/ItemContext';
import { CartContext } from './contexts/CartContext';

function App(props) {

  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  const addItem = (item) => {
    setCart([...cart, item])
  }

  const getCartTotal = () => {
    return cart.reduce((acc, item) => {
      return acc + item.price;
    }, 0).toFixed(2)
  }

  const routeToCart = () => {
    props.history.push('/cart')
  }

  useEffect(() => {
      axios.get(`http://localhost:3333/items`)
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <CartContext.Provider value={{ cart, getCartTotal, routeToCart }}>
      <ItemContext.Provider value={{ items, addItem }}>
      
      <Route path='/' component={Navbar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/shop'
        render={props => (
          <Shop 
          {...props}

          />
        )}
      
      />
      <Route path='/shop/:id'
        render={props => (
          <Item {...props} />
        )}
        />

        <Route exact path='/cart' component={Cart} />
      </ItemContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
