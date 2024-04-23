import { cardResponse } from "../../utils/mockData"
import { ResturantConatiner } from "./RestuarntConatiner"
import { useContext, useEffect, useState } from "react"
import Search from './Search'
import Shimmer from "./Shimmer"
import { Link,useNavigate } from "react-router-dom"
import useOnlineStatus from '../../utils/useOnlineStatus'
import { withPromotedLabel } from "./RestuarntConatiner"
import UserContext from "../../utils/UserContext"

const Body=()=>{
    const PromotedResturantCard=withPromotedLabel(ResturantConatiner)
    const onlineStatus=useOnlineStatus()
    const navigate=useNavigate()
    const [cardres,setcardres]=useState([])
    const [filterenbled,setfilter]=useState(false)
    const [buttonColour,setButtonColor]=useState('#DCDCD4')
    const [buttontTextColor,setButtonTextColor]=useState('#080808')
    const [originalres,setOriginalres]=useState([])
    const [noTopres,setTopres]=useState(false)
    const [isSearch,setisSearch]=useState(false)

    const {setloggedInUser,LoggedInUser}=useContext(UserContext)

    useEffect(()=>{
        if(filterenbled){             
            let filtercardResponse=cardres.filter(card=>{
                return card.info.avgRatingString >=4.5;
            })
            if(filtercardResponse.length!=0){
                setcardres(filtercardResponse)
                setTopres(false)
            }
            else{
                setTopres(true)
            }
           
            setButtonColor('#2f7324')
            setButtonTextColor('#ffe4c4')
        }else{
            setcardres(originalres);
            setButtonColor('#DCDCD4');
            setButtonTextColor('#080808')
            setTopres(false)
        }
    },[filterenbled,buttonColour])


    useEffect(()=>{
        const fetchData=async()=>{
            let data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3667195&lng=78.4285084&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            let json= await data.json();
            console.log(json,"jsonn")
            let swiggycardres=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
           
            swiggycardres.map((card)=>{
                setcardres((prevState)=>{
              return  [...prevState,card] 
                });
            })
            swiggycardres.map(card=>{
                setOriginalres((prevState)=>{
              return  [...prevState,card] 
                });
            })            
            // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants,"res from swiggy");
        }
        fetchData();       
    },[])

    const filterTopResturant=()=>{
        let isFiltered=filterenbled?false:true;
        setfilter(isFiltered)
    }

    // condtional rendering
    // if(cardres.length ==0){
    //     return <Shimmer /> ;
    // }

    const handleSearch=(searchValue)=>{
        let filterSearch
        // if(searchValue!==""){
        //     setisSearch(true)
        // }
        // else{
        //     setisSearch(false)
        // }
        if(searchValue=="" && filterenbled==false){
            setcardres(originalres)
        }
        else{
            setisSearch(true)
             filterSearch= cardres.filter((card)=>
                  card.info.name.toLowerCase().includes(searchValue.toLowerCase())
             )
             if(filterSearch.length!=0){
                setcardres(filterSearch)
             }
             
        }
        // if(filterSearch.length==0){
        //     return <h1>No results</h1>
        // }        
    }

    const handleCardClick=()=>{
        console.log(cardres)
        // navigate('https://www.swiggy.com/restaurants/dominos-pizza-agali-arcade-hampi-hospet-locality-hospet-371692')
    }

    const handleLoginChange=(e)=>{
        const value=e.target.value
        setloggedInUser(value)
    }

    if(!onlineStatus){
        return <h1>Looks like there is no internet connection</h1>
    }

    return cardres.length==0?<Shimmer /> : 
    (
    <div className="body">
         <div className="search">
             <Search handleSearch={handleSearch} resData={originalres}/>
        </div>

        <div className="">
        <button className="p-2 mx-8 my-1 font-medium rounded-lg" onClick={filterTopResturant} style={{backgroundColor:buttonColour ,color:buttontTextColor}}>Top Rated Restaurant</button>
        {noTopres?<h1>No results</h1>:''}
        <label className="p-2 m-2 font-bold">SetUserName</label>
        <input className=' border border-black 1px solid' type="text" value={LoggedInUser} onChange={handleLoginChange}/>
        </div>


        <div className="res-container flex flex-wrap" onClick={handleCardClick}>
        {
            cardres.map((cards)=>(
                <Link key={cards.info.id} to={"/restaurantmenu/"+cards.info.id} style={{textDecoration :'none'}}>
                    {
                        cards.info.promoted? <PromotedResturantCard cardResponse={cards}/> :<ResturantConatiner  cardResponse={cards}/>
                    }
                    
                </Link>                
            ))
        }
        </div>
    </div>
    )
}
export default Body