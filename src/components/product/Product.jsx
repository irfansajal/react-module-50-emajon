import React from 'react';
import './Product.css'
const Product = (props) => {
   // console.log(props.Product)
   const {img,name,seller, quantity,price} = props.product;
    return (
        <div className='product'>
       <img src={img}/>
       <h6>{name}</h6>

        </div>
    );
};

export default Product;