import MenuCard from "../menuCard/MenuCard";
interface CardProps {
    chef: Chef
}

function MenuBoard({ chef }: CardProps) {

    console.log(chef, 'i am in board');
    console.log(chef.menu)

    return (
        <>
            <div style={{backgroundColor:'#dbeeb7', width:'40em'}}>
                {chef.menu.map((dish, index) => {
                    return <MenuCard key={index} dish={dish} />
                })}
            </div>
        </>

    );
}

export default MenuBoard;