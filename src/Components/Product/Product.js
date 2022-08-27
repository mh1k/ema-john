import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { product, handleAddToCart } = props
    const { name, price, img, seller, ratings } = product;

    const altImg = "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8c3f5445517340e8bc02ad8100ffd3f6_9366/Runner_Tee_Burgundy_H25050_21_model.jpg"

    
    return (
        <div className='product-box'>
            <div>
                <div className='product-img content-padding'>
                    <img src={img} onError={e=>{console.log(e.currentTarget.src=altImg)}} alt="" />
                </div>
                <div className='content-padding'>
                    <h3 className='margin-0 font-medium'>{name}</h3>
                    <h4 className='margin-0'>Price : {price}</h4>
                </div>
                <div className='content-padding mr-box '>
                    <p className='margin-0'><small>Menufacturer : {seller}</small></p>
                    <p className='margin-0'><small>Rating : {ratings}</small></p>
                </div>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-cart-btn hover:bg-[#FF9900] hover:duration-[700ms] hover:text-white '>
                <p>Add to cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;