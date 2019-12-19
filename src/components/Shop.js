import React from 'react';

const Shop = props => {

    const routeToItem = (e, item) => (
        props.history.push(`shop/${item.id}`)
    )
    
    return (
        <div className='items-list-wrapper'>
        {
            props.items.map(item => (
                <div className='item-card' onClick={e => routeToItem(e, item)}>
                    <img src={item.imageUrl} alt={item.name}></img>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                </div>
            ))
        }
        </div>
    )
}

export default Shop;