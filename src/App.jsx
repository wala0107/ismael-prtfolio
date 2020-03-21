import React , {useState, Fragment, useEffect} from 'react';
import Header from './components/Header'
import About from './components/About'
import Services from './components/Services'
import SavoirEtre from './components/SavoirEtre'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Projects from './components/Projects'


const App = ()=>{

    useEffect(()=> {
        
        console.log(window.scrollY);
             
    })



    return(
       <Fragment>
           <Header/>
           <About/>
           <Services/>
           <SavoirEtre/>
           <Skills/>
           <Projects/>
           <Contact/>
           <Footer/>
       </Fragment>
    )

};
    export default App;

    