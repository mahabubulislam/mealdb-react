import React from 'react';
import './Cart.css'
const Cart = ({foods}) => {

    return (
        <div className='cart'>
            <h1>Order Details</h1>  
            <p>Selected Items:{foods.length}</p>
            {
                foods?.map(food=> 
                    <ul>
                        <li>{food.strMeal}</li>
                    </ul>
                    )
            }
            
        </div>
    );
};

export default Cart;