import React from 'react';

function FeatureSection(props) {
    return (
        <div>
            <section className="feature-section pt-80" data-scroll-index="1">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center mb-30">
                        <h1 className="mb-25  wow fadeInUp" data-wow-delay=".2s">Our <span>Services</span></h1>
                        <p className="wow fadeInUp services" data-wow-delay=".4s">Best Institution gives you the best services. Our team gives you supports like programming, application development, web programming, Digital Marketing, make money online, cyber security, and so on.</p>
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-lg-4">
                        <div className="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.2s">
                        <div className="icon">
                            <a href=""><img src={process.env.PUBLIC_URL + "/assets/img/icons/online-course.png"} alt=""></img></a>
                        </div>
                        <div className="content">
                            <h3><a href="" className="course">Learn Coding</a></h3>
                            <p>Welcome to <a href="https://www.youtube.com/channel/UCpGQisjfG8w-E21cG4ScEOA">hablu Programmer</a> articles section. Wanna learn some crazy programming tips and tricks and source code? Don't get panic just go to our Blogs section and have fun.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.4s">
                        <div className="icon ">
                        <a href=""> <img src={process.env.PUBLIC_URL + "/assets/img/icons/course.png"} alt=""></img></a>
                        </div>
                        <div className="content">
                            <h3><a href="" className="course">Courses</a></h3>
                            <p>Are you want to learn programming in funny ways, free of cost? You are in the right place. 
                            Don’t worry took your phone, laptop, pc then search Hablu Programmer and start learning.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="single-feature wow fadeInUp" data-wow-duration="3s" data-wow-delay="0.6s">
                        <div className="icon">
                            <a href=""><img src={process.env.PUBLIC_URL + "/assets/img/icons/user-interface (2).png"} alt=""></img></a>
                        </div>
                        <div className="content">
                            <h3><a href="" className="course" >Applications</a></h3>
                            <p>We are going to spread our services all over the world that’s why we are about to launch some application which helps you most. Check out our best application down below. 
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
}

export default FeatureSection;