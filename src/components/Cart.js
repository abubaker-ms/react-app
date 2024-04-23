import React from "react";
import ResturantMenu from "./ResturantMenu";
import { useSelector } from "react-redux";
import RestuarantCategory from "./RestuarantCategory";
import { cardImg } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../../utils/cartSlice";
export const Cart=()=>{
    const dispatch=useDispatch()
    const cartItems=useSelector((store)=>{
        return store.cart.items
    })

    const handleRemoveItem=(categoryinfo)=>{
        dispatch(removeItem(categoryinfo))
   }

   const handleClearbutton=()=>{
    dispatch(clearCart())
   }

    return(
        <div>
            <div className="text-center m-4">
            <button onClick={handleClearbutton}>Clear Cart</button>
            </div>
          
            {
                   cartItems.map(categoryinfo=>{
                    return(
                        <div className='p-2 m-2 border-gray-200 border-b-2 text-left'>
                            <img src={cardImg+categoryinfo.card.info.imageId} className='w-20 h-22'/>
                        <div className='p-2'>
                        <span className=''>{categoryinfo.card.info.name}</span>   
                        <span className=''>- ₹ {categoryinfo.card.info.price/100}</span>  
                        <button className="float-right" onClick={()=>{
                            handleRemoveItem(categoryinfo)
                        }}>Remove item</button>
                      </div>
                          <p className='text-xs'>{categoryinfo.card.info.description}</p>
                       
                    </div>
                    )              
                })
            }
        </div>
    )
}