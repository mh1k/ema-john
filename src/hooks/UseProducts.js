import { useEffect, useState } from 'react';

const UseProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        let ignore = false;
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => {
                if (!ignore) setProducts(data);
            })
            .catch(err=>console.log(err))

        return (() => ignore = true);

    }, []);

    return [products,setProducts];
};

export default UseProducts;
