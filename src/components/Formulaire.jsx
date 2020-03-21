import React , {useState, useEffect} from 'react';

const Formulaire = ()=>{
    const [animIcon,setAnimIcon] =useState("invisible row r2")

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 3350){
                setAnimIcon('row r2 animated fadeInUp')
            }else{
                setAnimIcon('invisible row r2')
            }
           
        })
        
    })

    return(
      
        <section className="contact py-5" data-scroll-index="5" id="contact">
            
            <div className="container">
                <div className="row r1">
                    <div className="col text-center">
                        <div className="heading">
                            <h6>Contact</h6>
                            <h2>Get In Touch</h2>
                        </div>
                    </div>
                </div>
                <div className={animIcon} >
                    <div className="col-lg-10 offset-lg-1">
                       
                        <form id="contact-form" method="POST"><input type="hidden" name="form-name" value="contactForm"/>
                            <div className="row">
                                <div className="col-md-6 form-group">
                                  
                                    <input type="text" className="form-control con-validate" id="contact-name" placeholder="Name" minLength="3"/>
                                </div>
                                <div className="col-md-6 form-group">
                                    
                                    <input type="email" className="form-control con-validate" id="contact-email" placeholder="Email"/>
                                </div>
                                <div className="col-md-12 form-group">
                                   
                                    <textarea className="form-control con-validate" id="contact-message" placeholder="How can we help you?" rows="6"></textarea>
                                </div>
                                <div className="col-md-12 text-center">
                                   
                                    <button id="contact-submit" className="mt-30 main-btn">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )

};
export default Formulaire;

    