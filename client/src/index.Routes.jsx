import MainRoot from "./pages/MainRoot";
import Add from "./pages/Add";
import WishList from "./pages/WishList";
import Basket from "./pages/Basket";

const ROUTES = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"wishlist",
                element:<WishList/>
            },
            {
                path:"Add",
                element:<Add/>
            },
            {
                path:"Basket",
                element:<Basket/>
            }
            
        ]
    }
]

export default ROUTES