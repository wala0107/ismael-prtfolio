import React,{useState,useEffect} from 'react';
import image from '../img/guy.jpg'

const About = () => {

    const [animIcon,setAnimIcon] =useState("col-lg-5 col-md-6 pb-4 invisible")
    const [animIcon2,setAnimIcon2] =useState("col-lg-7 col-md-6 invisible")
  
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 400){
                setAnimIcon('col-lg-5 col-md-6 pb-5 animated fadeInLeft')
                setAnimIcon2('col-lg-7 col-md-6 animated fadeInRight')
            }else{
                setAnimIcon('col-lg-5 col-md-6 pb-4 invisible')
                setAnimIcon2('col-lg-7 col-md-6 invisible')
            }
           
        })
        
    })
    
return (


    <section id="about">
        <div className="container">
            <div className="row">
                <div className={animIcon}>
                    <div className="about-img text-center">
                        <img className="" src={image} alt=""/>
                    </div>
    
                </div>
                <div className={animIcon2}>
                    <div className="about-content">
                            <div className="about-heading mb-4">
                                <h2>About Me.</h2>
                                <span>UI/UX Designer &amp; Web Developer</span>
                            </div>
                            <p>I'm <b>Ismael Azd</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                           
                            {/* <div className="social-icons">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-dribbble"></i></a>
                                <a href="#"><i className="fab fa-google-plus"></i></a>
                                <a href="#"><i className="fab fa-pinterest"></i></a>
                            </div> */}
                            <span className="about-button">
                                <a className="main-btn" href="/home/ismael/Bureau/Coding-School/React/Portfolio/src/cv.pdf" target="_blank" download>Download CV</a>
                            </span>
                        </div>

                
                    </div>
            </div>
        </div>

    </section>

)
}
export default About;