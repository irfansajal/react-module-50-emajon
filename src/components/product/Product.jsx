import React from 'react';
import { faFileImport, faImagePortrait } from '@fortawesome/free-solid-svg-icons';
faFileImport
faImagePortrait
import './Product.css'





const Product = (props) => {
   // console.log(props.Product)
   const {img,name,seller, ratings,price} = props.product;

   const handleAddToCart = props.handleAddToCart;



    return (
        <div className='product'>
       <img src={img}/>
      <div className='product-info'>
      <h6 className='product-name'>{name}</h6>
       <p>Price:${price}</p>
       <p>Manufacturer:{seller}</p>
       <p>Ratings:{ratings} stars</p>
      </div>
       <button onClick={()=> handleAddToCart(props.product)
    } className='btn-cart'>
            Add to Cart
          {/*  <FontAwesomeIcon icon ={faCoffee}/> // need to correct this part  */}
    </button>
        </div>
    );
};

export default Product;