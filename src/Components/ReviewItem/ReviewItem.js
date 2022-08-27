import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faShoppingCart, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ product,handleDeleteToCart }) => {
    const { name, img, price, shipping, quantity } = product;
    
    return (
        <div className='p-4 border border-gray-600 hover:border-[#EB5757] mb-8 rounded-lg flex flex-row'>
            <div className='w-1/6'><img className='w-full' src={img} alt="" /></div>
            <div className=' ml-5 w-full flex flex-row justify-between items-center '>
                <div>
                    <h2 className='font-semibold'>{name}</h2>
                    <h4>Price : ${price}</h4>
                    <p>Shipping Charge : ${shipping}</p>
                    <p>Quantity : {quantity}</p>
                </div>
                <button  onClick={()=>handleDeleteToCart(product.id)} className='bg-[#FFE0B3] h-fit text-[1.5rem] px-[1rem] py-[0.5rem] rounded-[50%] text-[#EB5757]'><FontAwesomeIcon icon={faTrashCan}/></button>
            </div>
        </div>
    );
};

export default ReviewItem;