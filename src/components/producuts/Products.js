import React, { useEffect, useState } from 'react';
import { addToDb, getCard } from '../../utilities/fakedb';
import Order from '../order_part/Order';
import Show from '../Showproducts/Show';
import './Products.css';

const Products = (props) => {

const [Products , setProducts] = useState([])

useEffect (() => {
       fetch ("products.json")
       .then( res => res.json())
       .then ( data => setProducts(data))
}, [] )



// useEffect ( () => {
//   const getcard = getCard()
//   for( const id in getcard){
//    const saved = []
//     const added = Products.find(produtt => produtt.id === id )
//     if(added){
//       const quantity = getCard[id]
//       added.quantity = quantity
//       saved.push(added)
//     }
//     setCount(saved)
//   }

// } ,[Products] )




useEffect ( ()=> {
  const set = getCard()
  const saved = []
  console.log(set);
  for (const id in set ){
    const addedpr = Products.find(product => product.id === id)
    if(addedpr){
      const quantity = getCard[id]
      addedpr.quantity = quantity 
      saved.push(addedpr)
    }
    setCount(saved)
  }
} ,[Products] )





  const [count , setCount] = useState ([])

  const addToCard = (producta)=> {
      const newCount = [...count , producta]
      setCount(newCount);
      addToDb(producta.id)
      
  }


  

    return (
        <div className='mains'>
            <div className="productsContainer">
             {
                 Products.map (product => <Show key={product.id} product={product} 
                    Card={addToCard} addC={props.add} ></Show> )
             }
            </div>
            <div className="order-container">
              <Order count={count} ></Order>
              {/* <h3>Orderder Summury</h3>
              <p> count : {count.length} </p> */}
            </div>
        </div>
    );
};

export default Products;<p>a</p>