
"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
  };
  return (
    <div className="header-carousel  overflow-hidden bg-dark">
        <Slider  {...settings}>
            <div className="header-carousel-item hero-section">
                <div className="hero-bg-half-1"></div>
                <div className="carousel-caption">
                    <div className="container">
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-7 animated fadeInLeft">
                                <div className="text-sm-center text-md-start">
                                    <h4 className="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                    <h1 className="display-1 text-white mb-4">The best gym center is now in your city</h1>
                                    <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy... 
                                    </p>
                                    <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                        <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> <span>Watch Video</span></a>
                                        <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-carousel-item hero-section">
                    <div className="hero-bg-half-2"></div>
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row g-4 align-items-center">
                                <div className="col-lg-7 animated fadeInLeft">
                                    <div className="text-sm-center text-md-start">
                                        <h4 className="text-primary text-uppercase fw-bold mb-4">Wellcome to our fitness Center</h4>
                                        <h1 className="display-2 text-white mb-4">Stay healthy by exercising at the best gym center</h1>
                                        <p className="mb-5 fs-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy... 
                                        </p>
                                        <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                                            <a className="btn btn-dark py-3 px-4 px-md-5 me-2" href="#"><i className="fas fa-play-circle me-2"></i> <span>Watch Video</span></a>
                                            <a className="btn btn-primary py-3 px-4 px-md-5 ms-2" href="#"><span>Learn More</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Slider>
    </div>
  );
}
