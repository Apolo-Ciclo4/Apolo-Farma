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
           
        <div>

            {/* VER TODOS LOS PRODUCTOS */}

            <section id='productos' className=' container mt-5  fw-light'>         
            <div className ='row justify-content-center height="450" width="450"'>
              <h1 className='title  'id='Encabezado de productos faciles'> Todos los Productos </h1>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg' alt="Agua Termal Avene 1"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'>Agua Termal Avene</a> </h5>
                                    <div className='rating mt-auto'>
                                      <div >
                                        <div></div>
                                    </div>
                                    <span id="No_de_opiniones"> FRASCO 150ML</span>
                                    </div>
                                    <p className='card-text'>$75000</p>                                    
                                    <a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                 
                  {/*Producto dos*/}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/110482-1-HYDRABIO-SERUM-PIEL-SECA-FCO-X-40ML.jpg' alt="Hydrabio Serum Piel Seca"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'>Hydrabio Serum Piel Seca</a> </h5>
                                    <div className='rating mt-auto' >                                      
                                    <span id="No_de_opiniones"> FRASCO 40ML</span>
                                    </div>
                                    <p className='card-text'>$120.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                  {/*Producto tres*/}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/109527-1-CETAPHIL-DERMACONTROL-FPS30-FCO-X-118ML.jpg' alt="Agua Termal Avene 1"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'>Cetaphil Dermacontrol FPS30</a> </h5>
                                    <div className='rating mt-auto'>
                                    <span id="No_de_opiniones"> FRASCO 150ML</span>
                                    </div>
                                    <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                
            </div>
            {/*Producto cuatro*/}
            <div className ='row justify-content-center height="450" width="450"'>             
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/140912-1-HYDRANCE-OPTIMALE-AVENE-FCO-X-30ML.jpg' alt="Agua Termal Avene 1"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'> Crema Hidratante Avene</a> </h5>
                                    <div className='rating mt-auto'>
                                    <span id="No_de_opiniones"> FRASCO 30ML</span>
                                    </div>
                                    <p className='card-text'>$82.000</p>                                    
                                    <a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                 
                  {/*Producto cinco*/}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/287851-1-MINERAL-89-VICHY-CONCENTRADO-FORTIFICANTE-FCO-X-50ML.jpg' alt="Mineral Vichi Concentrado"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'>Mineral VICHI concentrado</a> </h5>
                                    <div className='rating mt-auto'>
                                    <span id="No_de_opiniones"> FRASCO 50ML</span>
                                    </div>
                                    <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                  {/*Producto seis*/}
                  <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                         <img src='../images/dermocuidado/296079_1_NORMADERM_PHYTOSOLUTION_GEL_PU_VICHY_FCO_X_400ML.jpg' alt="Normaderm Gel"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000' className='color-links'>Normaderm Gel Phytosolution VI</a> </h5>
                                    <div className='rating mt-auto'>
                                    <span id="No_de_opiniones"> FRASCO 150ML</span>
                                    </div>
                                    <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-outline-warning'>
                                    Agregar
                                </a>
                            </div>
                        </div>
                  </div>
                  </div>
           </section>

        </div>
        </Fragment>
    )
}
export default Home;