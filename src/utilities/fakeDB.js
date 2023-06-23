const addToDb = id =>{
    let shoppingCart = {};
    
    // get previous data
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)

    }

    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1
        shoppingCart[id] = newQuantity
    }else{
        shoppingCart[id] = 1
    }

    //set data in localStorage
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

    
}

export{addToDb}