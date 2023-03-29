import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css';
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([])
 
    useEffect(()=>{
     fetch('products.json')
     .then(res => res.json())
     .then(data => setProducts(data))
    },[])

    useEffect(()=>{
       // console.log(products)
        const storedCart = getShoppingCart();
        const savedCart = [];
        //console.log(storedCart);
        //step1:get id
        for(const id in storedCart){
            //console.log(id);
            //step:get the product by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
            //Step 3:get quantity of the product
            const quantity = storedCart[id]
            addedProduct.quantity = quantity;
            // Step 4: add the addedproduct to the saved cart
            savedCart.push(addedProduct)
            }
        }
        // step:5 set the cart
        setCart(savedCart);
    },[products])

    const handleAddToCart = (product)=>{
       // console.log(product)
       let newCart = [];
     /*   const newCart = [...cart,product]; */
       // if product doesnt exist in the cart ,then set quantityb = 1;
       // if exist update quantity by 1
       const exists = cart.find(pd => pd.id === product.id);
       if(!exists){
        product.quantity = 3;
        newCart = [...cart,product];
       }
       else{
        exists.quantity = exists.quantity + 1;
        const remaining = cart.filter(pd => pd.id !== product.id);
        newCart = [...remaining,exists];
       }

       setCart(newCart);
       addToDb(product.id)
     }


    return (
        <div className='shop-container'>
           <div className="products-container">
            {
            products.map(product => <Product key ={product.id} product = {product} handleAddToCart={handleAddToCart}></Product>)
}
           </div> 
           <div className="cart-container">
            <Cart cart ={cart}></Cart>
           </div>
        </div>
    );
};

export default Shop;