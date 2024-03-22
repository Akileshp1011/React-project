import { Outlet,Link } from "react-router-dom";
import "./Layout.css";
const Layout=()=>{
    return(
        <>
        
        <div class="navbar" >
            <div class="navbar-brand" href="#">SHOP CART</div>
            
            
            <ul class="nav navbar-nav">
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Contact">Contact</Link>
                </li>
                <li>
                <Link to="/Login">Login</Link>
                </li>
                <li>
                <Link to="/Addproduct">Addproduct</Link>
                </li>
                
            
               


                
            </ul>
         
           
            
           
            
            
           
            
        </div>
        

        
        
       

        <Outlet/>
        </>
    )
}

export default Layout;


