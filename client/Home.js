import "./Layout.css";


const Home=()=>{
    
    
    
    return(
   
         <>



         
         <div id="carousel-id" class="carousel slide" data-ride="carousel">
             <ol class="carousel-indicators">
                 <li data-target="#carousel-id" data-slide-to="0" class=""></li>
                 <li data-target="#carousel-id" data-slide-to="1" class=""></li>
                 <li data-target="#carousel-id" data-slide-to="2" class="active"></li>
             </ol>
             <div class="carousel-inner">
                 <div class="item active">
                 <img class="bannerimg" src={`${process.env.PUBLIC_URL}/assets/images/c1.webp`} alt=""/>
                     
                 </div>
                 <div class="item ">
                 <img class="bannerimg" src={`${process.env.PUBLIC_URL}/assets/images/c2.gif`} alt=""/>
                     
                 </div>
                 <div class="item ">
                 <img class="bannerimg" src={`${process.env.PUBLIC_URL}/assets/images/c3.webp`} alt=""/>
                     
                 </div>
             </div>
             <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
             <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
         </div>
         
         <div class="all">
         <center><h1>PRODUCTS</h1>
         <div className="under"></div></center>
         
         
         
         <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p1.jpg`} alt=""/>
                    <h3>Smart Watch</h3>
                    <p>Off.48%</p>
                    <button>More</button>
                </div>
            </div>

            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p2.jpg`} alt=""/>
                    <h3>Laptop</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>

            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p3.jpg`} alt=""/>
                    <h3>head Phone</h3>
                    <p>Off.40%</p>
                    <button>More</button>
                </div>
            </div>

            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p4.jpg`} alt=""/>
                    <h3>Air Buds</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>

        

            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p9.jpg`} alt=""/>
                    <h3>Travel Bag</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>
            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p10.jpg`} alt=""/>
                    <h3>50mm Lens</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>
            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p11.jpg`} alt=""/>
                    <h3>Security Camera</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>
            <div class="col-md-3">
                <div href="#" class="thumbnail">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/p12.jpg`} alt=""/>
                    <h3>Back cases</h3>
                    <p>Off.30%</p>
                    <button>More</button>
                </div>
            </div>
            </div>
            
            <div class="block-area">
            <img class="block" src={`${process.env.PUBLIC_URL}/assets/images/l1.png`} alt=""/>
            <img class="block" src={`${process.env.PUBLIC_URL}/assets/images/l2.png`} alt=""/>
            <img class="block" src={`${process.env.PUBLIC_URL}/assets/images/l3.png`} alt=""/>
            <img class="block" src={`${process.env.PUBLIC_URL}/assets/images/l4.png`} alt=""/>
            <img class="block" src={`${process.env.PUBLIC_URL}/assets/images/l5.png`} alt=""/>
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
export default Home;



    

   
            

           







   

    
               


