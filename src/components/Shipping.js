import React from 'react';

const Shipping = props => {
    return (
        <div className='item-description'>
            <p>{props.item.shipping}</p>
        </div>
    )
}

export default Shipping;