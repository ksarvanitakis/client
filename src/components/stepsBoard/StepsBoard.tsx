import StepsCard from "../stepsCard/stepsCard";
import './stepsBoard.scss';

interface StepsBoardProps {
    stepActiveIndex?: number,
    small?: boolean
}

function StepsBoard({stepActiveIndex, small = false}:StepsBoardProps) {
    const steps = [
        {
            step: 'Step 1',
            description: 'Choose your chef. We have verity of chefs that are expert in different cusines',
            isActive: true,
        },
        {
            step: 'Step 2',
            description: 'Customize your meal. You can book our chefs for minimum 5 hr and maximum 8hr ',
            isActive: true,
        },
        {
            step: 'Step 3',
            description: 'Checkout. Then sit back and relax',
            isActive: true
        }
    ]

    if (stepActiveIndex != undefined) {
        steps.forEach((step, index) => {
            if (index != stepActiveIndex) {
                step.isActive = false;
            }
        })
    }

    return (
        <>
            <section className={`steps-board-container ${small ? 'steps-board-small' : ''}`}>
                {steps.map((el, index) => {
                    return <StepsCard step={el.step} description={el.description} isActive={el.isActive} small={small} id={index} key={index} />
                })}
            </section>
        </>
    );
}

export default StepsBoard;