import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../utilities/fakeDB';

const Shop = () => {
    const allProduct = useLoaderData();
    const handleAddToCart = id =>{
        addToDb(id);
    }

    return (
        <div className='product-container my-container'>
            {
                allProduct.map(product => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart}/>)
            }
        </div>
    );
};

export default Shop;