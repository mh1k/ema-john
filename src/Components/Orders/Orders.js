import { faArrowRight, faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';
import UseProducts from '../../hooks/UseProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {
    const [products] = UseProducts();
    const [cart,setCart] = UseCart(products);



    const handleRemoveProduct = (id) => {
        const remainingProduct = cart.filter(c=> c.id !== id);
        setCart(remainingProduct);
        removeFromDb(id);

    }
    return (
        <div className='mx-[5%] review-orders'>
            <div className='orders-box mt-12'>
                {
                    cart.map(c => <ReviewItem product={c} key={c.id} handleDeleteToCart={handleRemoveProduct}></ReviewItem>)
                }
            </div>
            <div className=''>
                <Cart cart={cart} cartBtn={false}>
                <Link to='/payment'>
                        <button className={false ? "shop-cart-btn review-btn" : "order-cart-btn review-btn"}>Proceed Checkout<FontAwesomeIcon icon={faCreditCard} /></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;