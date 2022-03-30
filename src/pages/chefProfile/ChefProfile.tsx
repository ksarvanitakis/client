import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import MenuBoard from '../../components/menuBoard/MenuBoard'
import { useAppSelector } from '../../features/hooks'
function ChefProfile() {
    const chefs = useAppSelector(state=>state.chefs)
    console.log(chefs)
    const {name}  = useParams();
    const chef  = chefs.find(element=>  element.name === name) as Chef
    
   console.log(chef)
    return ( 
        <>
          <h1>Chef's Profile{chef.name}</h1>
         
        </>
     );
}

export default ChefProfile;