import React from 'react';

function DownloadSection(props) {
    return (
        <div>
            <section className="download-area pt-70 pb-40" data-scroll-index="5" id="code"> 
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-9">
                        <div className="download-image mt-50 wow fadeInLeftBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <div className="download-shape-1"></div>
                        <img src={process.env.PUBLIC_URL + "/assets/img/download/download-app.png"} alt="" className="image-3"></img>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="download-content mt-45 wow fadeInRightBig" data-wow-duration="3s" data-wow-delay="0.5s">
                        <h1 className="title">Download and <span>Start Coding!</span></h1>
                        <p className="text">Are you worry about your pc configuration? Tensed about how to code in your old pc. Don’t worry, we just build an online code editor to reduce your such kind of problem. </p>
                        <ul>
                            <li><a href="" className="app-store">
                                <img src={process.env.PUBLIC_URL + "/assets/img/download/app-store.png"} alt=""></img>
                            </a></li>
                            <li><a href="" className="play-store">
                                <img src={process.env.PUBLIC_URL + "/assets/img/download/play-store.png"} alt=""></img>
                            </a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
}

export default DownloadSection;