import { useAppSelector } from '../../features/hooks';

function CheckoutPage() {
    const chefs = useAppSelector(state => state.chefs);
    const cart = useAppSelector(state => state.cart);

    console.log('check page', cart)
    const shoppingList:Ingre[] = []
    cart.dishes.forEach(el=>{
       el.ingredients.forEach(e=>{
        shoppingList.push({name:e.name,quantity :e.quantity*el.serving,unit:e.unit})
       })
    })
   console.log(cart.dishes)
    console.log(shoppingList)
    let barbra;

    // let result = shoppingList.filter(o1 => shoppingList.some(o2 => o1.name !== o2.name));
//    shoppingList.forEach(el=>{
//        console.log(el.name,'i m el')
//       barbra= shoppingList.(e=>{
//           console.log(e.name,'i am e')
//        return e.name  === el.name
//       } )
//    })
   const common = shoppingList.filter((el,index,arry)=> arry.indexOf(el) !== index )
   
    return ( 
        <>
         <h1>Shopping List</h1>
        {shoppingList.map((item,index)=>{
               return <p key={index}>{item.name} {item.quantity} {item.unit}</p>
        })}
        </>
       
     );
}

export default CheckoutPage;