import MenuCard from "../menuCard/MenuCard";
interface CardProps {
    chef: Chef
}

function MenuBoard({ chef }: CardProps) {

    return (
        <>
            <div style={{ backgroundColor: '#dbeeb7', width: '40em' }}>
                {chef.menu.map((dish, index) => {
                    return <MenuCard key={index} dish={dish} id={index} />
                })}
            </div>
        </>

    );
}

export default MenuBoard;