import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Food from '../Food/Food';
import './Shop.css'
const Shop = () => {
    const [foods, setFoods] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
            .then(res => res.json())
            .then(data => setFoods(data))

    }, [])
    const meals = foods.meals
    
    const handleAddToCart = (foods) =>{
        const newCart = [foods,...cart]
        setCart(newCart)
    }

    return (
        <div className='shop'>
            <div className='food-container'>
            {
                meals?.map(meal => <Food 
                    foods={meal}
                    key={meal.idMeal}
                    handleAddToCart={handleAddToCart}
                ></Food>)
            }
            </div>
            <div className="cart-container">
                <Cart foods={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;