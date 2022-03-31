import MenuCard from "../menuCard/MenuCard";
interface CardProps {
    chef: Chef
}

function MenuBoard({ chef }: CardProps) {

    console.log(chef, 'i am in board');
    console.log(chef.menu)

    return (
        <>
            {chef.menu.map((dish, index) => {
                return <MenuCard key={index} dish={dish} />
            })}
        </>

    );
}

export default MenuBoard;