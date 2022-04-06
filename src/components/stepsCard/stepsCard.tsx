import { SiCodechef } from 'react-icons/si';
import { BiDish } from 'react-icons/bi';
import { IoBagCheckOutline } from 'react-icons/io5';
import './stepsCard.scss'
interface StepsProps {
    step:string,
    description:string,
    id:number,
    isActive: boolean,
    small: boolean
}
function StepsCard({step,description,id,isActive, small}:StepsProps) {
    const iconDisplaying =()=> {
        if(id===0) {
            return <p className='steps-container_icon'><SiCodechef /></p>
        }
        if(id===1) {
            return <p className='steps-container_icon color-green'><BiDish /></p>
        }
        if(id===2) {
            return <p className='steps-container_icon color-orange'><IoBagCheckOutline /></p>
        }
    }
    return (
        <>
            <div className={`steps-container ${isActive ? 'steps-container-active' : 'steps-container-inactive'} ${small ? 'steps-container_small' : ''}`}>
                {iconDisplaying()}
                <div className='steps-container_text'>
                    <h1>{step}</h1>
                    <p className='steps-container_text_des'>{description}</p>
                </div>
            </div>
        </>
    );
}

export default StepsCard;