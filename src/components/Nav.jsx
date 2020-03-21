import React,{useState} from 'react';
import { useEffect } from 'react';

const Nav = () => {

  const [etat,setEtat] = useState('bg-transparent navbar-dark');
  const [colorText,setColorText] = useState("text-white")

  const change =()=>{
    if(window.scrollY >450){
      setEtat('sticky navbar-white')
      setColorText('text-dark')
    }else if(window.scrollY >300){
        setEtat('trans')
    }
    else{
      setEtat('bg-transparent navbar-dark ');
      setColorText("text-white")
    }
  }

  useEffect(
    window.onscroll = change
  );
return (

    <nav className={"navbar navbar-expand-lg bounce "+ etat }>
      <div className="container">
        <a className={"navbar-brand "+colorText} href="#">ISMAEL</a>
        <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <a className={"nav-link "+colorText} href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className={"nav-link "+colorText} href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className={"nav-link "+colorText} href="#services">Services</a>
            </li>
            <li className="nav-item">
              <a className={"nav-link "+colorText} href="#" >Projects</a>
            </li>
            <li className="nav-item">
              <a className={"nav-link "+colorText} href="#contact" >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


  )
}
export default Nav;