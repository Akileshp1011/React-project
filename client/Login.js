import React, { useState } from "react";
import "./login.css";




function Login(){

    const[action,setAction]=useState("Login")
    return(
        <>
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/person.png`} alt=""/>
                    <input type="text" placeholder="Name"/>
                </div>}
                
                <div className="input">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/email.png`} alt=""/>
                    <input type="email" placeholder="Email Id"/>
                </div>
                <div className="input">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/password.png`} alt=""/>
                    <input type="password" placeholder="Password"/>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forgot-password">forgot password?<span>Click Here</span></div>}
            


      <div className="submit-container">
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      </div>
        </div>

<div class="footer">
<div class="footer-container">
    <div class="footer-block1">
        <h3 class="heading-text">SHOP CART</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, dolorum.</p>
        <div class="footer-icon">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook" ></i>
        </div>
    </div>
</div>
<p class="website"> www.shopcart.com</p>
</div>
        </>
        
    )
}
export default Login;
                
                
        
        
            
        
           
        
        
       


