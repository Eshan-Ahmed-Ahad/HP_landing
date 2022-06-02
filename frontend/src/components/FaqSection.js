import React from 'react';

function FaqSection(props) {
    return (
        <div>
            <section className="faq-section pt-120"  id="faq">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center mb-60">
                        <h1 className="mb-25 wow fadeInUp faq" data-wow-delay=".2s"> frequently <br></br> <span> asked questions</span></h1>
                    
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="accordion wow fadeInLeftBig" id="accordionExample" data-wow-duration="3s" data-wow-delay="0.5s">
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                aria-expanded="true" aria-controls="collapseOne">
                                Why Hablu-Programmer?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                To develop Your Skills With Quality Full Content Is Our Main Focus 
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Why You Will Use Our Apps?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Our Apps Will  Make Your practical life More Easier.So Download Our Apps And Enjoy YourSelf 
                                </div>
                            </div>
                            </div>
                            <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Why Do You Learn Our Free Course?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                Because Our Course Is Too much quality full if you want to be a high label web Programmer then This Course  Just For You 
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="faq-image wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                            <img src={process.env.PUBLIC_URL + "/assets/img/faq/faq-img.jpg"} alt=""></img>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
        </div>
    );
}

export default FaqSection;