import { logoImg } from "../../utils/constants"
import { Link, useNavigate } from "react-router-dom"
import useOnlineStatus from '../../utils/useOnlineStatus'
import UserContext from '../../utils/UserContext'
import { useContext } from "react"
import { useSelector } from "react-redux"

const Header=()=>{
    const cartItems=useSelector((store)=>{
        // console.log(store.cart.items,"store")
        return store.cart.items;
    });
    const onlineStatus=useOnlineStatus()
    const navigate=useNavigate()
    const handleHomeClick=()=>{
        navigate('/home')
    }
   
    const {LoggedInUser}=useContext(UserContext)

    return(
    <div className="flex justify-between bg-pink-100 shadow-md">
        <div className="logo-container">
        <img className="w-32" src={logoImg} alt="foodlogo"  />   
        </div>

        <div className="">
            {/* <button className="items" onClick={handleHomeClick}>Home</button> */}
            <ul className="flex p-4 m-4">

           <li className="p-4 ">
                onlineStatus : 
                        {
                            onlineStatus?"✅":"🔴"
                        }
           </li>
            <li className="p-4">
            <Link to="/" className="items">Home</Link>
            </li>
            <li className="p-4">
            <Link to="/aboutUs" className="items"> AboutUs</Link>
                </li>
                <li className="p-4">
                <Link className="items" to="/contactus">ContactUS</Link>
                </li>
                <li className="p-4">
                <Link className="items" to="/grocery">Grocery</Link>
                </li>
            
            <li className="p-4">
            <Link to="/cart" className="items font-medium">Cart-{cartItems.length}</Link>
            </li>
            
            <li className="p-4">
            <button className="items">Login {LoggedInUser} </button>
            </li>
           
            </ul>
        </div> 
    </div>
  )
}

export default Header