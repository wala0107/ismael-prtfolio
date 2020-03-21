import React , {useState, Fragment} from 'react';


const Projects = ()=>{

    return(
       <section className="projects">
           <div className="container">
           <div className="row">
                    <div className="col">
                        <div className="heading text-center">
                            <h6>Portfolio</h6>
                            <h2>Work I Have Done</h2>
                        </div>
                        <div className="portfolio-filter text-center">
                            <ul>
                                <li className="sel-item" data-filter="*">All</li>
                                <li data-filter=".design">Web Design</li>
                                <li data-filter=".application">Applications</li>
                                <li data-filter=".development">Development</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>
       </section>
    )

};
    export default Projects;

    