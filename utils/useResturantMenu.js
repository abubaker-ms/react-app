import { useEffect, useState } from "react"

const useResturantMenu=(resid)=>{

  const [resMenu,setMenu] = useState()
  const [itemCards,setItemcards]=useState()

  const params=resid;
  useEffect(()=>{
    fetchData()
  },[])
  // console.log(resid,"resid")
  const  fetchData=async()=>{
    let data =await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=15.2679584&lng=76.3985177&restaurantId="+params+"&catalog_qa=undefined&submitAction=ENTER")
    let json=await data.json();
    // console.log(json.data,"resmenu")
    setMenu(json.data,"inUseres")
    //  console.log(json.data,"useresmenu11")
     let dataforMenu=json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;

     let filteredValues=dataforMenu.filter(menu=>{  
      return menu?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
     })

    //  console.log(filteredValues,"filteredValues")
    setItemcards(filteredValues)
}

  return {resMenu,itemCards}
}


export default useResturantMenu