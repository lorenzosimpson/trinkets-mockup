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

const getQuantity = (item, arr) => arr.filter(i => i.id == item.id).length;


    return (
        <div className='cart-wrapper'>
            <div className='cart-header'>
                <h1>Cart</h1>
                
            </div>
            <p id='total'>Total: {getCartTotal()}</p>
            {/* <button>Checkout</button> */}
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