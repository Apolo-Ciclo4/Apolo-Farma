import React, { Fragment } from 'react';
import { consumoData } from './json/consumoData';

const Home = () => {
    return (
        <Fragment>

            <div style={{ marginTop: "-48px" }}>
                <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>

                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/banner/b1.jpg" className="d-block w-100" alt="banner1"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner/b2.jpg" className="d-block w-100" alt="banner2"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner/b3.jpg" className="d-block w-100" alt="banner3"></img>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/banner/b4.jpg" className="d-block w-100" alt="banner4"></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div>

                <section id='productos' className=' container mt-5  fw-light'>
                    <div className='row justify-content-center height="450" width="450"'>
                        <h1 className='title' id='Productos faciles'> Todos nuestros productos </h1>
                        {consumoData && consumoData.map(consumoData => (
                            <div className='col-sm-12 col-md-6 col-lg-3 my-3 fw-light'>
                                <div className='card p-3 rounded'>
                                    <img src={consumoData.imagen[0].url} alt='Producto prueba' ></img>
                                    <div className='card-body d-flex flex-column'>
                                        <h5 id="titulo_producto" className='color-links'> {consumoData.nombre} </h5>
                                        <div className='rating mt-auto'>
                                            <div >
                                                <div><b>Descripción: </b>{consumoData.descripcion} </div>
                                            </div>
                                            <span id="No_de_opiniones"><b>Tamaño: </b>{consumoData.Tamaño} </span>
                                            <div><span id="No_de_opiniones"><b>Categoria: </b>{consumoData.categoria} </span> </div>
                                        </div>
                                        <p className='card-text'>{consumoData.precio} </p>
                                        <a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                            Agregar <i className="bi bi-cart-plus"></i>

                                        </a>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default Home;