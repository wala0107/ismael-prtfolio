import React , {useState, Fragment} from 'react';
import { useEffect } from 'react';



const Media = ()=>{

    const [animIcon,setAnimIcon] =useState("invisible")

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 3350){
                setAnimIcon('animated fadeInUp')
            }else{
                setAnimIcon('animated fadeOutDown')
            }
           
        })
        
    })

    return(
        <section className="media">
            <div className="titM text-center">
                <h6>Media</h6>
                <h2>Follow me</h2>
            </div>
            
            <ul className="social-btn">
                <li className={animIcon}>
                    <a target="_blank" href="https://www.facebook.com/wsmirani1" className="https://www.facebook.com/ismael.azd"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className={animIcon}>
                    <a target="_blank" href="https://www.linkedin.com/in/wala-smirani-b797a2150/" className="twitter"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li className={animIcon}>
                    <a target="_blank" href="https://www.instagram.com/waloula___/" className="instagram"><i className="fab fa-instagram"></i></a>
                </li>
            </ul>
        </section>
       
    )

};
    export default Media;

    