import HeroSub from '../../components/header/HeroSub';
import StepsBoard from '../../components/stepsBoard/StepsBoard';

function HowItWorks() {
    return (
        <>
            <HeroSub title={'How it works'} />
            <div className='body'>
                <div className='body_text-container'>
                    <div className='body_text-container_bg-box-start'></div>
                    <h2 className='body_text-container_title'>At my private chef</h2>
                    <p className='body_text-container_description'>We make it simple. Pay as you go and gain the most flexibility. Totally up to you. The beauty of our app is that it allows you to have our Chef prepare as much or as little as possible in the allotted time. </p>
                    <hr className='body_text-container_line'></hr>
                    <div className='body_text-container_bg-box-end'></div>
                </div>
            </div>
            <StepsBoard />
        </>
    );
}
export default HowItWorks;