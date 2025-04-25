import { createContext , useContext} from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export const AppContext = createContext();

export const AppcontextProvider = ({ children })=>{
    const navigate = useNavigate()

    const [user , setUser] = useState(true);
    const [isSeller , setIsSeller] = useState(false)
    const [showUserLogin , setShowUserLogin] = useState(false)
   const [porducts, setProducts] = useState([])

const fetchProducts = async () => {
    setProducts(dummyProducts)
}

useEffect(()=>{
    fetchProducts()
})

    const value = {navigate , user , setUser , isSeller , setIsSeller,showUserLogin,setShowUserLogin,porducts}
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}







