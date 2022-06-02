import React from 'react';

function Footer(props) {
    return (
        <div>
            <footer className="footer-area">
                <div className="footer-widget pt-30 pb-80">
                    <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                        <div className="footer-about mt-50">
                            <a href="" className="logo">
                            Hablu-Programmer
                            </a>
                            <p className="text">Hablu Programmer is a non-profitable IT company in Bangladesh. Which allows you to learn programming and develop your skills free of cost.</p>
                            <ul className="social">
                            <li><a href="https://www.facebook.com/Hablu420/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/eshanahmed/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/hablu-programmer" target="_blank"><i className="fab fa-github"></i></a></li>
                            <li><a href="" target="_blank"><i className="fab fa-stack-overflow"></i></a></li>
                            <li><a href="https://www.youtube.com/channel/UCpGQisjfG8w-E21cG4ScEOA" target="_blank"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-lg-5 col-md-6">
                        <div className="footer-link d-flex flex-wrap">
                            <div className="footer-link-wrapper mt-45">
                            <div className="footer-title">
                                <h4 className="title">Importent Links</h4>
                            </div>
                            <ul className="link">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="" data-scroll-nav="1">Services</a></li>
                                <li><a href="" data-scroll-nav="2">About</a></li>
                                <li><a href="" data-scroll-nav="3">Blog</a></li>
                        
                            </ul>
                            </div>
                            <div className="footer-link-wrapper mt-45">
                            <div className="footer-title">
                                <h4 className="title">Support</h4>
                            </div>
                            <ul className="link">
                                <li><a href="#faq">FAQ</a></li>
                                <li><a href="assets/Pages/Privacy.html" target="_blank">Privacy Policy</a></li>
                                <li><a href="assets/Pages/Terms.html" target="_blank">Terms OF Use</a></li>
                            </ul>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="footer-contact mt-45">
                            <div className="footer-title">
                            <h4 className="title">Contact-Info</h4>
                            </div>
                            <ul className="contact-list">
                            <li>
                                <div className="contact-info">
                                <div className="info-content media-body">
                                    <p className="text"><i className="fas fa-phone-alt"></i>
                                    +880-1xxxxxxxxx </p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info">
                                <div className="info-content media-body">
                                    <p className="text"><a href="" className="gmail"><i className="far fa-envelope"></i>
                                    habluprogrammer@gmail.com</a></p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info">
                                <div className="info-content media-body">
                                    <p className="text"><a href=""><i className="fas fa-globe"></i>
                                    habluprogramer.com </a></p>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className="contact-info">
                                <div className="info-content media-body">
                                    <p className="text"><i className="fas fa-map-marker-alt"></i>
                                    Natore, Rajshahi,Bangladesh</p>
                                </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                    <div className="row justify-content-center">
                        <div className="lo-lg-12">
                        <div className="copyright">
                            <div className="copyright-text text-center">
                            <p className="text-center">&copy;All Right Reserved By Hablu-Programmer 2021 </p>
                            <p className="text-center">Sponsors By <a href="https://billing.telesheba.com/aff.php?aff=21" target="_blank">Telesheba.com</a></p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
}

export default Footer;