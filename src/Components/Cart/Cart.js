import { faArrowRight, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';

const Cart = (props) => {
    const{ cart,cartBtn }=props
    console.log(props);

    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        shipping += product.shipping*product.quantity
        quantity += product.quantity
    }

    const tax = parseFloat((totalPrice * 0.1).toFixed(2));
    const grandTotal = totalPrice + shipping + tax;


    return (
        <div className='cart-box'>
            <h2 className='text-2xl font-medium mb-3'>Order Summary</h2>
            <div>
                <p>Select Items : {quantity}</p>
                <p>Total Price : ${totalPrice}</p>
                <p>Total Shipping Charge : ${shipping}</p>
                <p>Tax : $ {tax.toFixed(2)}</p>
                <h3 className='grand-total text-lg'>Grand Total : ${grandTotal.toFixed(2)}</h3>
            </div>
            <div className='btn-box'>
                <button className={cartBtn ? "shop-cart-btn clear-btn" : "order-cart-btn clear-btn"}>Clear Cart <FontAwesomeIcon icon={faTrashCan}/></button> <br />
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;