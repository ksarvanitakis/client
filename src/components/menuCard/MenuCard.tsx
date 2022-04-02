import { useState } from 'react';
import { useAppSelector } from '../../features/hooks';
import './MenuCard.scss';
interface dishProps {
    dish: Menu
}

function MenuCard({ dish }: dishProps) {
    const cart = useAppSelector(state => state.cart);

    const [displayState, setDisplayState] = useState(false);
    const [count, setcount] = useState(0)
    const [disableMin, setDisable] = useState(true);

    const dropHandler = () => {
        setDisplayState(!displayState)
    }
    const increaseHandler = () => {
        console.log(count, 'inc')
        setDisable(false)
        setcount(previousCont => previousCont + 1)
        //dispatch here
    }
    const decreaseHandler = () => {
        console.log(count, 'dec')
        if (count <= 0) {
            setDisable(true)
        } else {
            setcount(previousCont => previousCont - 1)
        }
        // dispatch here
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
                                <img className='description-container_image' src={dish.dishImage}></img>
                            </div>
                        </div>

                    </div>
                    <div className='button-container'>
                        <button className='button-continer_btn' onClick={decreaseHandler} style={{ border: disableMin ? '1px solid grey' : '' }} disabled={disableMin}>-</button>
                        <span>{count}</span>
                        <button className='button-continer_btn' onClick={increaseHandler}>+</button>
                    </div>
                </div>
            </section>
            <span>hello {cart.totalPrice} {cart.chef?.name}</span>

        </>
    );
}

export default MenuCard;
