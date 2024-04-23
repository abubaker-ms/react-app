import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useResturantMenu from '../../utils/useResturantMenu'
import Shimmer from "./Shimmer";
import RestuarantCategory from './RestuarantCategory'
const ResturantMenu =()=>{
    let params=useParams().resid;

    const menuDetials=useResturantMenu(params)
    const {resMenu,itemCards}=menuDetials
  
    return (
    // resMenu==null ? <Shimmer />:
        <div className="text-center m-4">
            {/* {console.log(resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards,"ress")} */}
            <h1 className="res-menu font-bold">ResturantMenu-{resMenu?.cards[0]?.card?.card?.info?.name}</h1>
            <h3 className="font-medium">{resMenu?.cards[0]?.card?.card?.info?.locality}</h3>
            <h2 className="font-medium">Delivery time - {resMenu?.cards[0]?.card?.card?.info?.sla?.deliveryTime} min -- {resMenu?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
            
            
                <ul>
                    {
                        itemCards?.map(categogy=>{
                            return <li><RestuarantCategory data={categogy?.card?.card}/></li>                           
                        })
                    }
                </ul>   
        </div>
    )
}

export default ResturantMenu