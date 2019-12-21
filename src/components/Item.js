import React, { useContext } from 'react';
import { NavLink, Route } from 'react-router-dom';

import Description from './Description';
import Shipping from './Shipping';
import { ItemContext } from '../contexts/ItemContext';

const Item = props => {
  const { items } = useContext(ItemContext)
    const item = items.find(
        i => `${i.id}` === props.match.params.id
      );

      if (!items.length || !item) {
        return <h2>Loading item...</h2>;
      }
        return (
            <div className="item-wrapper">
              <div className="item-header">
                <div className="image-wrapper">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="item-title-wrapper">
                  <h2>{item.name}</h2>
                  <h4>${item.price}</h4>
                </div>
              </div>
              <nav className="item-sub-nav">
                <NavLink exact to={`/shop/${item.id}`}>
                  About
                </NavLink>
                <NavLink to={`/shop/${item.id}/shipping`}>Shipping</NavLink>
              </nav>
              <Route
                exact
                path="/shop/:id"
                render={props => <Description {...props} item={item} />}
              />
              <Route
                path="/shop/:id/shipping"
                render={props => <Shipping {...props} item={item} />}
              />
               <button className='back-btn' onClick={() => props.history.push('/shop')}>back to shop</button>
            </div>
        )
}
export default Item;