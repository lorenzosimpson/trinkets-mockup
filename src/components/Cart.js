import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ItemContext } from '../contexts/ItemContext';

const Cart = props => {
    const { cart, getCartTotal } = useContext(CartContext);
    const { addItem } = useContext(ItemContext);


    const routeToItem = (e, item) => (
        props.history.push(`shop/${item.id}`)
    )


const filteredCart = Array.from(new Set(cart.map(i => i.id)))
.map(id => {
  return cart.find(i => i.id === id)
})

const getQuantity = (item, arr) => arr.filter(i => i.id === item.id).length;

async function map(arr, arr2, cb) {
    let new_arr = [];
    for (let i=0; i<arr.length; i++) {
     new_arr.push({
         id: arr[i].id, 
         name: arr[i].name, 
         price: arr[i].price, 
         quantity: cb(arr[i], arr2)}
         )
    }
    return new_arr;
}

const order = map(filteredCart, cart, getQuantity)
    .then(res => console.log(res))
    .catch(err => console.log(err))


    return (
        <div className='cart-wrapper'>
            <div className='cart-header'>
                <h1>Cart</h1>
            </div>
            <p id='total'>Total: 
                <div className='cart-total'>${getCartTotal()}</div>
                <button className='shop-btn'>Checkout</button>
            </p>
            <div className='items-list-wrapper'>
            {filteredCart.map(item => (
                <div className='cart-item-card'>
                    <div onClick={e => routeToItem(e, item)}>
                    <img src={item.imageUrl} alt={item.name}></img>
                    <h1>{item.name}</h1>
                            <p>Quantity: {getQuantity(item, cart)}</p>
                    
                    <p>${getQuantity(item, cart) * item.price}</p>
                    </div>


                </div>
            ))
            }
            </div>  
        </div>
    )
}
export default Cart;