import { useEffect, useState } from "react";
import { getCart } from "../utilities/fakedb";


const UseCart = (products) => {
    const [cart, setCart] = useState([]);
   
    useEffect(() => {
        let ignore = false;
        if (!ignore) {
            const storedCart = getCart();
            const savedCart = [];
            for (const id in storedCart) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
            setCart(savedCart)
        }
        return (() => ignore = true)

    }, [products]);


    return [cart,setCart];
};

export default UseCart;