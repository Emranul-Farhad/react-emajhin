import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Products from '../producuts/Products';
import './Show.css'

const Show = (props) => {
    const {ratings, price, name, img, seller} = props.product;
    


    return (
        <div className="componennts">
            <div className='mainp'>
           <div className='products-image'>
           <img src={img} alt="" />
           </div> 
           <p className='p-t'> {name} </p>
           <p className='pp'> Price : ${price} </p>
           <p className='ps'>manufectered : {seller} </p>
           <p className='pr'>ratings : {ratings}</p>
           <button onClick={()=> props.Card(props.product) } className='bt'>Add Products <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon> </button>
        
             </div>
        </div>
    );
};

export default Show;