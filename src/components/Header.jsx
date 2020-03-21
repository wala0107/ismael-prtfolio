import React , {useState} from 'react';
import Nav from './Nav'


const Header = ()=>{
    

    return(
       <section className="header">
           <Nav/>                                  
           <div className="banner-caption">
                <h1>Hi! I'm Ismael.</h1>
                <p className="cd-headline clip mt-30">
                    <span>Creative Designer &amp; Developer located in Brussels.</span><br/>
                    <span className="blc">Specialized in</span>
                    <span className="cd-words-wrapper" >
                        <b className="is-hidden">Creating Websites.</b>
                        {/* <b class="is-hidden">Designing Logo.</b>
                        <b class="is-visible">Designing UI/UX.</b> */}
                    </span>
                </p>
            </div>
            <div className="arrow bounce text-center">
                <a className="fa fa-chevron-down fa-2x" href="#about" data-scroll-nav="1"></a>
            </div>
           <svg className="" id="home-svg"   x="0px" y="0px" viewBox="0 0 1400 300" preserveAspectRatio="none">
                    <path className="p-curve " d="M-0.2,0.5c0,0-21.7,99.6,233.1,99.6s320.1,199.7,467.6,200.1S898.6,100,1167.6,100S1401,0,1401,0v301H0 L-0.2,0.5z"></path>
                </svg>
       </section>
    )
};
export default Header;