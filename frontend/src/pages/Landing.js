import React from 'react';
import AboutSection from '../components/AboutSection';
import DownloadSection from '../components/DownloadSection';
import FaqSection from '../components/FaqSection';
import FeatureSection from '../components/FeatureSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TestimonialSection from '../components/TestimonialSection';

function Landing(props) {
    return (
        <div>
            <header className="header-area">
                <Navbar></Navbar>
                <div data-scroll-index="0" id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">

                <div className="header-hero" >
                {/* <!---- home star ------> */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
                <div className="shape shape-6"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="header-hero-content">
                        <h1 className="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s">Web Development Course
                            With<span> Hablu Programmer</span> </h1>
                        <p className="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">Are you want to learn programming in funny ways, free of cost? You are in the right place. 
                            Don’t worry took your phone, laptop, pc then search <a href="https:www.youtube.com/habluprogrammer1" target="_blank">Hablu Programmer</a> and start learning.</p>

                        <ul className="d-flex">
                            <li>
                            <a href="https://www.youtube.com/playlist?list=PLNMnAEqLBwmqKGMJOtVcvGE-QrAte_95q" className=" wow fadeInLeftBig bubbly-button" data-wow-duration="3s" data-wow-delay="0.8s" target="_blank">Free Enroll</a>
                            </li>
                            
                            <li>
                            <a href="https://youtu.be/sNITYUx8yGU" className="header-video venobox wow fadeInLeftBig"
                                data-autoplay="true" data-vbtype="video" data-wow-duration="3s" data-wow-delay="1.2s">
                                <i className="fas fa-play"></i></a>
                            </li>

                        </ul>
                        
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="header-image">
                        <img src={process.env.PUBLIC_URL + "/assets/img/about/video (1).png"} alt="" className="image-1  wow fadeInRightBig"
                            data-wow-duration="3s" data-wow-delay="0.5s"></img>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-shape-1"></div>
                    <div className="header-shape-2">
                    <img src={process.env.PUBLIC_URL + "/assets/img/header/header-shape-2.svg"} alt=""></img>
                    </div>
                </div>
                </div>
                </div>

                <div className="carousel-item">
                
                <div className="header-hero" data-scroll-index="0">
                {/* <!---- home star ------> */}
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
                <div className="shape shape-5"></div>
                <div className="shape shape-6"></div>
                <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                    <div className="col-lg-6 col-md-10">
                        <div className="header-hero-content">
                        <h1 className="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s"><span>Download Our Apps</span>
                            Develop Your Skills</h1>
                        <p className="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">We are going to spread our services all over the world that’s why we are about to launch some application which helps you most. Check out our best application down below. </p>
                        <ul className="d-flex">
                            <li><a href="https://www.youtube.com/channel/UCpGQisjfG8w-E21cG4ScEOA" className="bubbly-button wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.8s" target="_blank">Download
                                Now</a></li>
                            <li><a href="https://youtu.be/sNITYUx8yGU" className="header-video venobox wow fadeInLeftBig"
                                data-autoplay="true" data-vbtype="video" data-wow-duration="3s" data-wow-delay="1.2s"><i
                                className="fas fa-play"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="header-image">
                        <img src={process.env.PUBLIC_URL + "/assets/img/header/header-app.png"} alt="" className="image-1  wow fadeInRightBig"
                            data-wow-duration="3s" data-wow-delay="0.5s"></img>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="container">
                    <div className="header-shape-1"></div>
                    <div className="header-shape-2">
                    <img src={process.env.PUBLIC_URL + "/assets/img/header/header-shape-2.svg"} alt=""></img>
                    </div>
                </div>
                </div>
                </div>

                <div className="carousel-item">
                <div className="header-hero" data-scroll-index="0">
                    {/* <!---- home star ------> */}
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                    <div className="shape shape-4"></div>
                    <div className="shape shape-5"></div>
                    <div className="shape shape-6"></div>
                    <div className="container">
                    <div className="row align-items-center justify-content-center justify-content-lg-between">
                        <div className="col-lg-6 col-md-10">
                        <div className="header-hero-content">
                            <h1 className="header-title wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.2s"><span>Run Your Code </span>With Virtual Code Runner</h1>
                            <p className="text wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.4s">Are you worry about your pc configuration? Tensed about how to code in your old pc. Don’t worry, we just build an online code editor to reduce your such kind of problem.</p>
                            <ul className="d-flex">
                            <li><a href="" className="bubbly-button wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.8s">Run Code</a></li>
                            <li><a href="https://youtu.be/sNITYUx8yGU" className="header-video venobox wow fadeInLeftBig"
                                data-autoplay="true" data-vbtype="video" data-wow-duration="3s" data-wow-delay="1.2s"><i
                                    className="fas fa-play"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="header-image">
                            <img src={process.env.PUBLIC_URL + "/assets/img/download/download-app.png"} alt="" className="image-1  wow fadeInRightBig"
                            data-wow-duration="3s" data-wow-delay="0.5s"></img>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                    <div className="header-shape-1"></div>
                    <div className="header-shape-2">
                        <img src={process.env.PUBLIC_URL + "/assets/img/header/header-shape-2.svg"} alt=""></img>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            </div>
        </header>
        {/* <!--------   Header End ----  --> */}

        <FeatureSection></FeatureSection>

        <AboutSection></AboutSection>

        <TestimonialSection></TestimonialSection>


        <FaqSection></FaqSection>

        <DownloadSection></DownloadSection>

        <Footer></Footer>

        </div>
    );
}

export default Landing;