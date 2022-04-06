import StepsCard from "../stepsCard/stepsCard";
import './stepsBoard.scss'
function StepsBoard() {
    const steps = [
        {
            step: 'Step 1',
            description: 'Choose your chef. We have verity of chefs that are expert in different cusines'
        },
        {
            step: 'Step 2',
            description: 'Customize your meal. You can book our chefs for minimum 5 hr and maximum 8hr '
        },
        {
            step: 'Step 3',
            description: 'Checkout. Then sit back and relax'
        }
    ]

    return (
        <>
            <section className='steps-board-container'>
                {steps.map((el, index) => {
                    return <StepsCard step={el.step} description={el.description} id={index} key={index} />
                })}
            </section>
        </>
    );
}

export default StepsBoard;