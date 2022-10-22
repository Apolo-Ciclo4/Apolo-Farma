import React, { Fragment } from 'react';

const Home = () => {
    return (
        <Fragment>
           
            <div style={{marginTop: "-48px"}}>
                <div id="carouselExampleCaptions" class="carousel slide mt-5" data-bs-ride="false">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>

                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="./images/banner/b1.jpg" class="d-block w-100" alt="banner1"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/banner/b2.jpg" class="d-block w-100" alt="banner2"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/banner/b3.jpg" class="d-block w-100" alt="banner3"></img>
                        </div>
                        <div class="carousel-item">
                            <img src="./images/banner/b4.jpg" class="d-block w-100" alt="banner4"></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            
        <div con>

        </div>

        </Fragment>
    )
}
export default Home;