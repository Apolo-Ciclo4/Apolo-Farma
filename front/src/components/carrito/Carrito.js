import React, { Fragment } from 'react'


const CuidadoFacial = () => {
    return (
        <Fragment>
            <div className='container fw-light mt-5 '>
                <h1 className='title  ' id='listadoProductos'>Resumen de Compra</h1>
                <div class="container">
                    <div class="row row-cols-6 mt-5 text-center">
                        <div class="col">
                            <h6 className='text-center'>Imagen</h6>
                        </div>
                        <div class="col text-center"><h6>Producto</h6> </div>
                        <div class="col text-center"><h6>Cantidad</h6></div>
                        <div class="col text-center"><h6>Unidad</h6></div>
                        <div class="col text-center"><h6>Total</h6></div>
                        <div class="col text-center"></div>
                    </div>
                    <hr className='mt-0'></hr>
                    <div class="row row-cols-6 mt-2 text-center">
                        <div class="col">
                            <img className='img-fluid' src='../images/dermocuidado/109527-1-CETAPHIL-DERMACONTROL-FPS30-FCO-X-118ML.jpg' alt='Imagen1' width={"75px"} height={"50px"}></img>
                        </div>
                        <div class="col "> CETAPHIL DERMACONTROL X 118ML</div>
                        <div class="col">1</div>
                        <div class="col">$50.000</div>
                        <div class="col">$50.000</div>
                        <div class="col mt-0"><a className='btn text-danger mt-0 fs-5 pt-0'><i class="bi bi-trash3"></i></a></div>
                    </div>
                    <div class="row row-cols-6 mt-2 text-center">
                        <div class="col">
                            <img className='img-fluid' src='../images/dermocuidado/110482-1-HYDRABIO-SERUM-PIEL-SECA-FCO-X-40ML.jpg' alt='Imagen1' width={"75px"} height={"50px"}></img>
                        </div>
                        <div class="col ">HYDRABIO SERUM PIEL SECA FCO X 50ML</div>
                        <div class="col">2</div>
                        <div class="col">$30.000</div>
                        <div class="col">$60.000</div>
                        <div class="col mt-0"><a className='btn text-danger mt-0 fs-5 pt-0'><i class="bi bi-trash3"></i></a></div>
                    </div>
                    <div class="row row-cols-6 mt-2 text-center">
                        <div class="col">
                            <img className='img-fluid tamano' src='../images/dermocuidado/404637_1_SENSIBIO_BIODERMA_TUB_X_100ML_GEL_MOUSSANT.jpg' alt='Imagen1' width={"75px"} height={"50px"}></img>
                        </div>
                        <div class="col">SENSI BIODERMA TUBO X 100 ML</div>
                        <div class="col">1</div>
                        <div class="col">$45.000</div>
                        <div class="col">$45.000</div>
                        <div class="col mt-0"><a className='btn text-danger mt-0 fs-5 pt-0'><i class="bi bi-trash3"></i></a></div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <h5 className='text-end mx-5 px-4'>Total Compra: <span className='fw-light'>$155.000</span></h5>
                        </div>
                    </div>
                    <div className='row text-end mx-5 px-1 mt-2'>
                        <div className='col justify-content-end'>
                            <a className='btn btn-success justify-content-end text-white'>Finalizar Compra <i class="bi bi-lock"></i></a>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default CuidadoFacial