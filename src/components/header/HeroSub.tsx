import './heroSub.scss'
import heroSub from '../../assets/heroSub.png'
interface Hero {
    title:string
}
const HeroSub = ({title}:Hero) => {
    return (
        <>
            <main className='hero-sub'>
                <div className='hero-sub_text-container'>
                    <div className='hero-sub_text-container_bg-box'></div>
                    <h1 className='hero-sub_text-container_title'>{title}</h1>
                </div>
                <div className='hero-sub_image-container'>
                    <div className='hero-sub_image-container_bg-box'></div>
                    <img className='hero-sub_image-container_image' src={heroSub} alt='Hero' />
                </div>
            </main>
           
        </>
    );
}

export default HeroSub;