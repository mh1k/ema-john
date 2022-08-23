import React, { useEffect, useState } from 'react';
import { addToDb, getCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        // const controller = new AbortController();
        // const signal = controller.signal
        let ignore = false
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => {
                if (!ignore) setProducts(data)
            })
            .catch(err => console.log(err))
        return (() => ignore = true)
    }, []);

    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            const storedCart = getCart();
            const savedCart = [];
            for(const id in storedCart){
                const addedProduct = products.find(product=>product.id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
            setCart(savedCart)
        }
        return (() => ignore = true)
    },[products])

    const handleAddToCart = product => {

        let newCart = [];
        const exits = cart.find(c => c.id === product.id);
        if (!exits) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else {
            const rest = cart.filter(c => c.id !== product.id);
            exits.quantity += 1;
            newCart = [...rest, exits]

        }

        addToDb(product.id);
        setCart(newCart);
    }

    console.log(cart);

    return (
        <div className='shop-box container'>
            <div className='products'>
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;