import React , {useState,useEffect} from 'react';

const Services = ()=>{

    const [animIcon,setAnimIcon] =useState("col-md-4 mb-5 invisible")
    const [animIcon2,setAnimIcon2] =useState("col-md-4 mb-5 invisible")
  
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 795){
                setAnimIcon('col-md-4 mb-5 animated fadeInLeft')
                setAnimIcon2('col-md-4 mb-5 animated fadeInRight')
            }else{
                setAnimIcon('col-md-4 mb-5 invisible')
                setAnimIcon2('col-md-4 mb-5 invisible')
            }
           
        })
        
    })

    return(
       <section className="services pt-5" id="services">
           <div className="container pt-5">
                <div className="row ">
                    <div className="col">
                        <div className="heading text-center">
                            <h1>Services</h1>
                            <h2>Des prestations adaptées à vos besoins</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i class="fas fa-paper-plane" ></i>

                              
                            </span>
                            <h4>Web Design</h4>
                            <p>Logos, templates Web, plaquettes publicitaires,
cartes de visite, newsletters....</p>
                        </div>
                    </div>
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                            <i class="fa fa-desktop" aria-hidden="true"></i>
                            </span>
                            <h4>Web Development</h4>
                            <p>Des intégrations (X)HTML / CSS
respectueuses des standards du Web.

.</p>
                        </div>
                    </div>
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-mobile"></i>
                             

                            </span>
                            <h4>Responsive Design</h4>
                            <p>Compatible tous supports, tablette & application mobile.

.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
       </section>
    )
};
export default Services;