import React, { useState, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemContext } from '../contexts/ItemContext';

const Shop = props => {
    const { items, addItem } = useContext(ItemContext)
    

    const routeToItem = (e, item) => (
        props.history.push(`shop/${item.id}`)
    )
    
    return (
        <div className='items-list-wrapper'>
        {
            items.map(item => (
                <>
                <div className='item-card'>
                    <div  onClick={e => routeToItem(e, item)}>
                    <img src={item.imageUrl} alt={item.name}></img>
                    <h1>{item.name}</h1>
                    
                    <p>${item.price}</p>
                    </div>

                    <button onClick={() => addItem(item)}>add to cart</button>

                </div>
               
                </>
            ))
        }
        </div>
    )
}

export default Shop;