import React, { useState } from 'react'
import { cardImg } from "../../utils/constants"
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'
export default function RestuarantCategory({data}) {

    const dispatch=useDispatch();
    const[carosal,setCarosal]= useState(false)
    
    const handleCarosalClick=()=>{
            setCarosal(!carosal)
    }

    const handleAddClick=(items)=>{
        dispatch(addItem(items))
    }

  return (
    <div>

  
    <div className=" w-6/12 mx-auto my-6 bg-gray-50 shadow-lg p-4 ">
        <div className='flex justify-between'>

       
        <span className='font-bold'>{data.title}-({data.itemCards.length})</span>
        <span className='hover:cursor-pointer' onClick={handleCarosalClick}>🔽</span>
        </div>
     
        {
            data.itemCards.map(categoryinfo=>{
                return(
                    carosal?
                    <div className='p-2 m-2 border-gray-200 border-b-2 text-left'>
                        <button className='bg-black text-white h-6' onClick={()=>{
                            handleAddClick(categoryinfo)
                        }}>Add+</button>
                        <img src={cardImg+categoryinfo.card.info.imageId} className='w-20 h-22'/>
                    <div className='p-2'>
                    <span className=''>{categoryinfo.card.info.name}</span>   
                    <span className=''>- ₹ {categoryinfo.card.info.price/100}</span>  
                  </div>
                      <p className='text-xs'>{categoryinfo.card.info.description}</p>
                </div>
                :''
                )              
            })
        }
      

    

     </div>
     </div>
  )
}
