import { createContext , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useState , useEffect } from "react";
import { dummyProducts } from "../assets/assets";
import  toast  from "react-hot-toast";


export const AppContext = createContext();

export const AppcontextProvider = ({ children })=>{

    const currrency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()

    const [user , setUser] = useState(true);
    const [isSeller , setIsSeller] = useState(false)
    const [showUserLogin , setShowUserLogin] = useState(false)
   const [porducts, setProducts] = useState([])
   const [cartItems, setCartItems] = useState({})

//    fetch all products 
const fetchProducts = async () => {
    setProducts(dummyProducts)
}

//  add to cart 
 const addTocart = (itemId)=>{
let cartData  = structuredClone(cartItems)

if(cartData[itemId]){
    cartData[itemId]+=1;
}else{
    cartData[itemId]=1;
}
setCartItems(cartData)
toast.success("Item added to cart")

}
//  update cart 
const updateCart = (itemId , quantity)=>{

let cartData  = structuredClone(cartItems)
cartData[itemId] = quantity;
setCartItems(cartData)
toast.success("Cart updated")
}
//  remove form cart 
const removeFromCart = (itemId)=>{
let cartData  = structuredClone(cartItems);
if(cartData[itemId]){
    cartData[itemId] -=1;
    if(cartData[itemId] === 0){
        delete cartData[itemId]
    }
}
toast.success("Item removed from cart")
setCartItems(cartData)

}


useEffect(()=>{
    fetchProducts()
},[])

    const value = {navigate , user , setUser , isSeller , setIsSeller,showUserLogin,setShowUserLogin,porducts,currrency,addTocart,updateCart,removeFromCart,cartItems}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}







