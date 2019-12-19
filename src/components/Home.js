import React from 'react';


const Home = props => {
    return (
        <div className='home-wrapper'>
            <img className='home-img' alt=''
            src='https://www.uncommongoods.com/images/category/fun-fullwidth.jpg'
            >
            </img>
            <button className='shop-btn' onClick={() => props.history.push('/shop')}>Shop</button>
        </div>
    )
}
export default Home;