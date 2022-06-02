import React from 'react';

function TestimonialSection(props) {
    return (
        <div>
            <section className="testimonial-section" data-scroll-index="3" id="Articles">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-content mt-50 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <div className="section-title">
                            <h1 className="title proArt" >Programming Articles</h1>
                            <p className="text articalme">Welcome to hablu Programmer articles section. Wanna learn some crazy programming tips and tricks and source code? Don't get panic just go to our Blogs section and have fun.</p>
                        </div>
                        <a href="" className="bubbly-button mt-4">Read More</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-image wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <div className="about-shape"></div>
                        <img src={process.env.PUBLIC_URL + "/assets/img/about/blog.png"} alt="" className="app"></img>
                        </div>
                    </div>

                    </div>
                </div>
                </section>
        </div>
    );
}

export default TestimonialSection;