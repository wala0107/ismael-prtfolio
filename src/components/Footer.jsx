import React , {useState, Fragment} from 'react';

const Footer = ()=>{

    return(
        <section className="footer">
            <div className="contact">
                <div className="container">
                  
                        <div className="row  medIc text-white text-center pt-4 mx-5">
                            <div className="box col-md-2">
                                <div className="icon">
                                    <i className="fa fa-map-marker-alt"></i>
                                    <h4>Adresse</h4>
                                    <h3>MolenGeek, 1080</h3>
                                </div>
                            </div>
                            <div className="box col-md-2">
                                <div className="icon">
                                    <i className="fa fa-phone"></i>
                                    <h4>Mobile</h4>
                                    <h3>+32 488/66.88.07</h3>
                                </div>
                            </div>
                            <div className="box col-md-2">
                                <div className="icon">
                                    <i className="fa fa-envelope"></i>
                                    <h4>Email</h4>
                                    <h3>ismaelazd@hotmail.com</h3>
                                </div>
                            </div>
                        </div>

                
                    <div className="row text-center r2">
                        <div className="col-md-12">
                            <hr/>
                            <p className="copy pt-3">
                                Ismael © 2018. All Right Reserved, Designed By Ismael.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

        </section> 
    )

};
export default Footer;

    