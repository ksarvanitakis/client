import HeroSub from "../../components/header/HeroSub";

function BookingDone() {
    return ( 
        <>
        <HeroSub title={'Order confirmed'}/>

        <div className='body'>
                <div className='body_text-container'>
                    <div className='body_text-container_bg-box-start'></div>
                    <h2 className='body_text-container_title'>Your Order has been successfully done.</h2>
                    <h3>Please check your email</h3>
                    <hr className='body_text-container_line'></hr>
                    <div className='body_text-container_bg-box-end'></div>
                </div>
            </div>
    
        </>
     );
}

export default BookingDone;