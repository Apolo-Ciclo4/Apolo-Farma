import React, { Fragment } from 'react'


const CuidadoFacial = () => {
  return (
    <Fragment>     
          <section id='productos' className=' container mt-5  fw-light'>         
            <div className ='row justify-content-center'>
              <h1 className=' fw-light 'id='Encabezado de productos faciles'> Ultimos productos </h1>
                <div className='col-sm-12 col-md-6 col-lg-3 my-3 '>
                        <div className='card p-3 rounded'>                            
                            <img src='../images/dermocuidado/40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg' alt="Agua Termal Avene 1"></img>
                              <div className='card-body d-flex flex-column'>
                                  <h5 id="titulo_producto"><a href='http://localhost:3000'>Agua Termal Avene</a></h5>
                                    <div className='rating mt-auto'>
                                      <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                    </div>
                                    <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                  </div>
                          
                    {/*Producto dos*/} 
                    <div className='col-sm-12 col-md- col-lg-3 my-3'>
                        <div className='card p-3 rounded'>                            
                        <img src='../images/dermocuidado/40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg' alt="Agua Termal Avene 1"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Agua Termal Avene</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                </div>
                                <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                    </div>
                     {/*Producto tres*/} 
                     <div className='col-sm-12 col-md-6 col-lg-3 my-3 '>
                        <div className='card p-3 rounded'>                            
                        <img src='../images/dermocuidado/40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg' alt="Agua Termal Avene 1"></img>
                            <div className='card-body d-flex flex-column'>
                                <h5 id="titulo_producto"><a href='http://localhost:3000'>Agua Termal Avene</a></h5>
                                <div className='rating mt-auto'>
                                    <div className='rating-outer'>
                                        <div className='rating-inner'></div>
                                    </div>
                                    <span id="No_de_opiniones"> 2 reviews</span>
                                </div>
                                <p className='card-text'>$52.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                    Ver detalle
                                </a>
                            </div>
                        </div>
                </div>
            </div>
           </section>         
    </Fragment>
  )
}

export default CuidadoFacial