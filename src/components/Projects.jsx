import React , {useState, Fragment} from 'react';
import projet1 from '../img/img/WORDOUTLET.png';
import projet2 from '../img/img/siterosa.png';
import projet3 from '../img/img/siteduchef.png';
import projet4 from '../img/img/repairmyphone.png';
import projet5 from '../img/img/sitejapon.png';
import projet6 from '../img/siteonepiece.png';




const Projects = ()=>{

    return(
       <section id="project" className="projects">
           <div className="container">
           <div className="row">
                    <div className="col">
                        <div className="heading text-center">
                            <h1>Portfolio</h1>
                            <h2>Work I Have Done</h2>
                        </div>
                   
 

      <div className="container">
        <div className="row mb-5 no-gutters">
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={100}>
            <a href="https://agendashop.netlify.com/" className="work-thumb">
              <div className="work-text">
                <h2>Agenda Shop</h2>
                <p>boutique </p>
              </div>
  <img className="" src={projet1} alt="Image" className="img-fluid" />
</a>           
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={200}>
            <a href="https://rosarestaurant.netlify.com/" className="work-thumb">
              <div className="work-text">
                <h2>Site Rosa</h2>
                <p>Restauration</p>
              </div>
        
              <img className="" src={projet2} alt="Image" className="img-fluid" />
           
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={300}>
            <a href="https://siteduchef.netlify.com/" className="work-thumb">
              <div className="work-text">
                <h2>Site du chef</h2>
                <p>Restauration</p>
              </div>

           
              <img className="" src={projet3} alt="Image" className="img-fluid" />

            
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={400}>
            <a href="https://repairmyphone.netlify.com/" className="work-thumb">
              <div className="work-text">
                <h2>Repair my phone</h2>
                <p>Boutique</p>
              </div>
              <img className="" src={projet4} alt="Image" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={400}>
            <a href="https://wala0107.github.io/travelix-japon/" className="work-thumb">
              <div className="work-text">
                <h2>I LOVE JAPON</h2>
                <p>Travel</p>
              </div>
              <img className="" src={projet5} alt="Image" className="img-fluid" />
            </a>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4" data-aos="fade" data-aos-delay={400}>
            <a href="portfolio-single.html" className="work-thumb">
              <div className="work-text">
                <h2>site One-Piece</h2>
                <p>manga</p>
              </div>
              <img className="" src={projet6} alt="Image" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    


                    </div>
                </div>
           </div>
       </section>
    )

};
    export default Projects;

    