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
                            <h6>Services</h6>
                            <h2>What I Can Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-laptop"></i>
                            </span>
                            <h4>Web Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fas fa-cogs"></i>
                            </span>
                            <h4>Web Development</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div className={animIcon}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-mobile"></i>
                            </span>
                            <h4>Responsive Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div className={animIcon2}>
                    
                        <div className="service-item">
                            <span className="icon">
                                <i className="fa fa-rocket"></i>
                            </span>
                            <h4>Branding Identity</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div className={animIcon2}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fas fa-pencil-alt"></i>
                            </span>
                            <h4>Creative Design</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                    <div className={animIcon2}>
                        
                        <div className="service-item">
                            <span className="icon">
                                <i className="fas fa-life-ring"></i>
                            </span>
                            <h4>Support</h4>
                            <p>Lorem Ipsum is simply dummy text of the Lorem has been the industry's standard dummy text ever.</p>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
};
export default Services;