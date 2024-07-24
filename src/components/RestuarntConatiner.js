import { render } from "react-dom"
import { cardImg } from "../../utils/constants"

export const ResturantConatiner=(props)=>{
    // {console.log(props,"propsAbu1")}

    let{
        cloudinaryImageId,
        name,
        avgRatingString,
        locality
    }=props?.cardResponse?.info

return(
<div data-testid="resCard" className="m-4 p-4 w-[250px] bg-slate-100 rounded-lg hover:bg-gray-300">
    {/* {console.log(props,"propsAbu")} */}
    <img className="rounded-lg" src= { cardImg + cloudinaryImageId} />
    <h3 className="res-name font-bold py-4">{name}</h3>
    <h4>{avgRatingString} -stars</h4>
    <h4>{locality}</h4>

</div>
)
}

export const withPromotedLabel=(ResturantConatiner)=>{
    return(props)=>{
        return(
            <div>
                <h3 className="bg-black text-white my-8 mx-4 z-10 w-32 rounded">Promototed</h3>
                <ResturantConatiner {...props}/>
            </div>
        )
    }

}