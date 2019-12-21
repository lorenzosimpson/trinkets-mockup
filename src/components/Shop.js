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
                    <div className='card-inner'>
                    <img src={item.imageUrl} onClick={e => routeToItem(e, item)} alt={item.name}></img>
                    <h1 onClick={e => routeToItem(e, item)}>{item.name}</h1>
                    
                    <p className='price-cart-btn'>${item.price}</p>
                    <button className='shop-btn-item' onClick={() => addItem(item)}>Add to cart</button> 
                    </div>

                   

                </div>
               
                </>
            ))
        }
        </div>
    )
}

export default Shop;