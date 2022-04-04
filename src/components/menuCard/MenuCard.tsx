import { useState } from 'react';
import { useAppSelector } from '../../features/hooks';
import { useDispatch } from 'react-redux';
import './MenuCard.scss';
import { updateDish } from '../../features/cart/cartSlice';

interface dishProps {
    dish: Menu
    id: number
}

function MenuCard({ dish, id }: dishProps) {
    const cart = useAppSelector(state => state.cart);
    const dispatch = useDispatch()

    const [displayState, setDisplayState] = useState(false);
    const [count, setcount] = useState(0)
    const [disableMin, setDisable] = useState(true);

    const dropHandler = () => {
        setDisplayState(!displayState)
    }
    const increaseHandler = (title: string, time: number, ingredients: Ingre[]) => {
        setDisable(false)
        setcount(previousCont => previousCont + 1)
        const dish = {
            serving: count + 1,
            name: title,
            id: id,
            time: time,
            ingredients: ingredients
        }
        console.log('chef price', cart.chef?.price);
        dispatch(updateDish(dish))
    }
    const decreaseHandler = (title: string, time: number, ingredients: Ingre[]) => {
        if (count <= 0) {
            setDisable(true)
        } else {
            setcount(previousCont => previousCont - 1);
        }
        const dish = {
            serving: count - 1,
            name: title,
            id: id,
            time: time,
            ingredients: ingredients
        }
        dispatch(updateDish(dish));
    }

    return (
        <>
            <section>
                <div className='container'>
                    <div className='card'>
                        <div className="card-header">
                            <h3>{dish.title}<span className='card-header_title_span'> / person</span></h3>
                            <p className='card-header_description'>{dish.description}</p>
                            <button onClick={dropHandler} className="card-header_dropDown">Ingredients</button>
                            <div className='card-header_dropDown--ingredients' style={{ display: displayState ? 'block' : 'none' }}>
                                {dish.ingredients.map(ingre => {
                                    return <span> {ingre.name},</span>
                                })}
                            </div>
                        </div>
                        <div className="description-container">
                            <p className='description-container_time'>Time: {dish.time} min</p>
                            <div className='description-container_image-container'>
                                <div className='description-container_bg-box'></div>
                                <img className='description-container_image' src={dish.dishImage} alt='dish'></img>
                            </div>
                        </div>

                    </div>
                    <div className='button-container'>
                        <button className='button-continer_btn' onClick={() => decreaseHandler(dish.title, dish.time, dish.ingredients)} style={{ border: disableMin ? '1px solid grey' : '' }} disabled={disableMin}>-</button>
                        <span>{count}</span>
                        <button className='button-continer_btn' onClick={() => increaseHandler(dish.title, dish.time, dish.ingredients)}>+</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MenuCard;
