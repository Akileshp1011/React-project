import './contact.css';
function Contact(){
    return (
        <>
       
<section class="contact mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
   
    <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div class="row">

      
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

               
                <div class="row">

                  
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control"/>
                            <label for="name" class="">Your name</label>
                        </div>
                    </div>
                    

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control"/>
                            <label for="email" class="">Your email</label>
                        </div>
                    </div>
                  

                </div>
               

               
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control"/>
                            <label for="subject" class="">Subject</label>
                        </div>
                    </div>
                </div>
                

                
                <div class="row">

                    
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>
               

            </form>

            <div class="text-center text-md-left">
                <button class="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</button>
            </div>
            <div class="status"></div>
        </div>
     

        
        <div class="col-md-3 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>mumbai,India</p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+444 1010 2755</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>contact@shopcart.com</p>
                </li>
            </ul>
        </div>
    

    </div>

</section>
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
export default Contact;