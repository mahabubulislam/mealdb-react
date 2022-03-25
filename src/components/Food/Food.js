import React from 'react';
import './Food.css'
const Food = ({foods, handleAddToCart}) => {
    const {strMeal, strMealThumb} = foods
    return (
        <div className='food'>
            <h3>{strMeal}</h3>
            <img src={strMealThumb} alt="" />
            <button onClick={()=>handleAddToCart(foods)} className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Food;