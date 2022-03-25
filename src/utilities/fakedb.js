// use local storage to manage cart data
const addToDb = id =>{
    let shoppingCart = {};

    
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

   
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}


const getCard = () =>{
let shoppingCart = {}

const get = localStorage.getItem('shopping-cart')
if (get){
    shoppingCart = JSON.parse(get);
}
    
return shoppingCart

}


const removeFromDb = id =>{
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () =>{
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb, 
    removeFromDb,
    deleteShoppingCart,
    getCard
}


// const addToDb = id => {
//     let shoppingCart = {}

//     const getCard = localStorage.getItem("shopping-cart");
//     if(getCard){
//         shoppingCart = JSON.parse(getCard)
//     }
//     else{
//         shoppingCart = {}
//     }

//    const quantity = shoppingCart[id];
//    if(quantity){
//        const newq = quantity + 1;
//        shoppingCart[id] = newq;
//    }

//    else{
//        shoppingCart[id] = 1
//    }

//    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))

// }

// export {addToDb}