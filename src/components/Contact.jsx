import React , {useState, Fragment} from 'react';
import Media from './Media'
import Formulaire from './Formulaire'
import { useEffect } from 'react';


const Contact = ()=>{

    const [isMobile, setIsMobile] = useState('false');

    useEffect(()=>{
        if(window.screen.width <= 375){
            setIsMobile('true')
        }else{
            setIsMobile('false')
        }
    })
 
    return(

        <section className="conInfo container mb-5 pt-5">
            <div className="row  ">
                <div className={isMobile ? "col-md-6 meme bordTop ":"col-md-6 meme " }>
                    <Media/>
                </div>
                <div className={isMobile ? "col-md-6 meme bordSide ":"col-md-6 meme " }>
                    <Formulaire/>
                </div>
            </div>

        </section>
        
    )

};
export default Contact;

    