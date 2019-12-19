import React, {useState, useEffect } from 'react';
import { Route }from 'react-router-dom';
import axios from 'axios';

import Home from './components/Home';
import Shop from './components/Shop';
import Item from './components/Item'
import './App.scss';
import Navbar from './components/Navbar';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
      axios.get('http://localhost:3333/items')
      .then(res => setItems(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route exact path='/shop'
        render={props => (
          <Shop 
          {...props}

          items={items} setItems={setItems}
          />
        )}
      
      />
      <Route path='/shop/:id'
        render={props => (
          <Item {...props} items={items} setItems={setItems} />
        )}
        />

    </div>
  );
}

export default App;
