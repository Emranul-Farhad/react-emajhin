import { faArrowRight, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Products from '../producuts/Products';
import './Order.css'

const Order = (props) => {
    const {count } = props
    console.log(count);

    let total = 0
    let shipping = 0;
    let tax = 0
    let grand = 0
    for ( const producta of count ){
        total =  producta.price  +  total
        shipping = producta.shipping + shipping
       const taxe = (total * 0.1).toFixed(2)
       tax = parseFloat (taxe)
        grand = total + shipping + tax
    }

     

    return (
        <div className='order'>
           <div className='orders'>
           <h3>Order Sumurry  </h3>
           <p>Selected Items: {count.length} </p>
           <p>Total Price: ${total}  </p>
           <p>Total shipping Cahrge ${shipping} </p>
           <p>Tax {tax} </p>
           <h2>Grand Total ${grand} </h2>
           </div>
           <div className='btn'>
           <button  className='btn1'>clear cart  <FontAwesomeIcon icon={faTrash}/> </button>
           <button className='btn2'>Review Cart <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon> </button>
           </div>
        </div>
    );
};

export default Order;