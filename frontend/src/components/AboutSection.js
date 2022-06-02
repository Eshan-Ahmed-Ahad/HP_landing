import React from 'react';

function AboutSection(props) {
    return (
        <div>
            <section className="about-area pt-70 pb-120" data-scroll-index="2" id="aboutme">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-image wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <div className="about-shape"></div>
                        <img src={process.env.PUBLIC_URL + "/assets/img/about/about-app (1).png"} alt="" className="app"></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <h1 className="title">About <span>Hablu-Programmer</span></h1>
                            <p className="text">Hablu Programmer is a non-profitable IT company in Bangladesh. Which allows you to learn programming and develop your skills free of cost. They have about 4000+ students all over the world who is learning their skills from Hablu Programmer free. And their mission is to make people fall in love with codding.</p>
                        </div>
                        <a href="" className="bubbly-button mt-5">Get The App</a>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
}

export default AboutSection;