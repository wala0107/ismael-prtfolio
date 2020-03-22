import React , {useState, } from 'react';


const SavoirEtre = ()=>{


    return(
     <section className="savoirEtre text-center">
         <div className="container py-3">
             <h2 className="my-4"> Développeur Informatique Indépendant depuis Juin 2020</h2>
             <div className="row my-5">
                <div className="col-md-4">
                    <i class="fas fa-users fa-2x"></i>
                    <h5 className="py-2">5 clients satisfaits</h5>
                </div>
              
                <div className="col-md-4">
                    <i class="fas fa-book fa-2x"></i>
                    <h5 className="py-2">Aime apprendre</h5>
                </div>
                <div className="col-md-4">
                <i class="fas fa-search fa-2x"></i>
                    <h5 className="py-2">Perfectionniste</h5>
                </div>
             </div>
         </div>


     </section>
    )
};
    export default SavoirEtre;