import img1 from "../images/img4.png";
import img2 from "../images/image.jpg";
import img3 from "../images/img3.avif";

export default function Home() {
    return (
        <>
            {/* Carousel */}
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide-1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide-2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide-3"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img3} className="d-block w-100" alt="slide-1" style={{ height: '480px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="slide-2" style={{ height: '480px', objectFit: 'cover' }} />
                    </div>
                    <div className="carousel-item">
                        <img src={img1} className="d-block w-100" alt="slide-3" style={{ height: '480px', objectFit: 'cover' }} />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* Attraction Cards */}
            <div className="container my-5">
                <h3 className="text-center mb-4 text-primary">Why Shop With Us?</h3>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img1} className="card-img-top" alt="quality" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-success">Premium Quality</h5>
                                <p className="card-text text-center">
                                    We provide top-notch products sourced from the most trusted brands.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img2} className="card-img-top" alt="support" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-success">24/7 Support</h5>
                                <p className="card-text text-center">
                                    Our customer support team is always ready to assist you anytime.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={img3} className="card-img-top" alt="delivery" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title text-center text-success">Fast Delivery</h5>
                                <p className="card-text text-center">
                                    Enjoy quick and safe delivery to your doorstep with real-time tracking.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
