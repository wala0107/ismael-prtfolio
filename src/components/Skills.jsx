import React , {useState, useEffect, Fragment, } from 'react';



const Skills = ()=>{

  const [animIcon,setAnimIcon] =useState("invisible")
  const [animIcon2,setAnimIcon2] =useState("invisible")

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
          if(window.scrollY > 1800){
              setAnimIcon('chart__title')
              setAnimIcon2('chart__bar')
          }else{
              setAnimIcon('invisible')
              setAnimIcon2('invisible')
          } 
      })
  
  })
 
    return(
        
    <Fragment>
      <h2 className="my-5 text-center" >Mes Compétences</h2>
       <div className="skills">

  <div className="charts">
    <div className="chart chart--dev">
      <span className={animIcon}>Development</span>
      <ul className="chart--horiz">
        <li className={animIcon2} id='html'    >
          <span className="chart__label">
            HTML5
          </span>
        </li>
        <li className={animIcon2} id='css'     >
          <span className="chart__label">
            CSS3 & SCSS
          </span>
        </li>
        <li className={animIcon2} id="js"      >
          <span className="chart__label">
            JavaScript
          </span>
        </li>
        <li className={animIcon2} id="AngularJs"   >
          <span className="chart__label">
            AngularJS
          </span>
        </li>
        <li className={animIcon2} id="ReactJS"     >
          <span className="chart__label">
            ReactJS
          </span>
        </li>
        <li className={animIcon2} id="jquery"      >
          <span className="chart__label">
            jQuery
          </span>
        </li>
        <li className={animIcon2} id="nodejs"      >
          <span className="chart__label">
            NodeJS
          </span>
        </li>
        <li className={animIcon2} id="grunt"   >
          <span className="chart__label">
            Grunt / Gulp / Webpack
          </span>
        </li>
        <li className={animIcon2} id="net"     >
          <span className="chart__label">
            .NET
          </span>
        </li>
        <li className={animIcon2} id="umbraco"     >
          <span className="chart__label">
            Umbraco
          </span>
        </li>
        <li className={animIcon2} id="sitecore"    >
          <span className="chart__label">
            Sitecore
          </span>
        </li>
      </ul>
    </div>
    
    <div className="chart chart--prod">
      <span className="chart__title">Productivity</span>
      <ul className="chart--horiz">
      <li className={animIcon2} id="git"   >
        <span className="chart__label">
          Git + Github, Bitbucket & Sourcetree
        </span>
      </li>
      <li className={animIcon2} id="microsoft"     >
        <span className="chart__label">
          Microsoft Office
        </span>
      </li>
    </ul>
    </div>

    <div className="chart chart--design">
      <span className="chart__title">Design</span>
      <ul className="chart--horiz">
      <li className={animIcon2} id="ph"    >
        <span className="chart__label">
          Photoshop
        </span>
      </li>
      <li className={animIcon2} id="illu"      >
        <span className="chart__label">
          Illustrator
        </span>
      </li>
      <li className={animIcon2} id="ue"    >
        <span className="chart__label">
          User Experience
        </span>
      </li>
    </ul>
    </div>
  </div>

</div>

   
   
    </Fragment>

    )
};
    export default Skills;