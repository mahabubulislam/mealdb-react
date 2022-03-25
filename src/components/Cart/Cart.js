import React from 'react';
import './Cart.css'
const Cart = ({foods}) => {

    return (
        <div className='cart'>
            <h1>Order Details</h1>  
            <p>Selected Items:{foods.length}</p>
            {
                foods?.map(food=> 
                    <div className='cart-info'>
                        <p>{food.strMeal}</p>
                        <img src={food.strMealThumb} alt="" />
                    </div>
                    )
            }
            
        </div>
    );
};

export default Cart;