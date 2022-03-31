import './MenuCard.scss';
interface dishProps {
    dish: Menu
}

function MenuCard({ dish }: dishProps) {
    console.log(dish)
    return (
        <>
            <section className='container'>
                <div className='card'>
                    <div className="card-header">
                        <h3>{dish.title}<span className='card-header_title_span'> / person</span></h3>
                        <p className='card-header_description'>{dish.description}</p>
                    </div>
                    <div className="description-container">
                        <p className='description-container_time'>Time: {dish.time}</p>
                        <div className='description-container_image-container'>
                            <div className='description-container_bg-box'></div>
                            <img className='description-container_image' src={dish.dishImage}></img>
                        </div>
                    </div>
                </div>
            </section>

        </>

    );
}

export default MenuCard;
