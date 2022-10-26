import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const ProducsAdmin = () => {
    return (
        <Fragment>
            <div className='container my-5 fw-light'>
                <h1 className='title  ' id='listadoProductos'>Listado de Productos Administrador</h1>
                {/* Primera fila */}
                <div className='row my-5'>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border border-success py-3 rounded-3' src='../images/dermocuidado/109527-1-CETAPHIL-DERMACONTROL-FPS30-FCO-X-118ML.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto: </b>CETAPHIL DERMACONTROL X 118ML</p>
                        <p><b>Stock:</b> 15</p>
                        <p><b>Vendidas:</b> 5</p>
                        <p><b>Precio:</b>  $50.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border border-success py-3 rounded-3' src='..\images\dermocuidado\110482-1-HYDRABIO-SERUM-PIEL-SECA-FCO-X-40ML.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto: </b>HYDRABIO-SERUM-PIEL-SECA-FCO-X-40ML</p>
                        <p><b>Stock:</b> 20</p>
                        <p><b>Vendidas:</b> 0</p>
                        <p><b>Precio:</b>  $80.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                </div>
                {/* Segunda fila */}
                <div className='row my-5'>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border border-success py-3 rounded-3' src='..\images\dermocuidado\40772-1-AGUA-TERMAL-AVENE-FCO-X-150ML.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto: </b>AGUA-TERMAL-AVENE-FCO-X-150ML</p>
                        <p><b>Stock:</b> 15</p>
                        <p><b>Vendidas:</b> 1</p>
                        <p><b>Precio:</b>  $70.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border py-3 border-success rounded-3' src='..\images\dermocuidado\140912-1-HYDRANCE-OPTIMALE-AVENE-FCO-X-30ML.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto: </b>HYDRANCE-OPTIMALE-AVENE-FCO-X-30ML</p>
                        <p><b>Stock:</b> 150</p>
                        <p><b>Vendidas:</b> 22</p>
                        <p><b>Precio:</b>  $50.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                </div>
                {/* Tercera fila */}
                <div className='row my-5'>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border border-success py-3 rounded-3' src='..\images\dermocuidado\287851-1-MINERAL-89-VICHY-CONCENTRADO-FORTIFICANTE-FCO-X-50ML.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto: </b>MINERAL VICHY CONCENTRADO X-50ML</p>
                        <p><b>Stock:</b> 45</p>
                        <p><b>Vendidas:</b> 5</p>
                        <p><b>Precio:</b>  $150.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                    <div className='col d-none d-lg-block'>
                        <img className='img-fluid border py-3 border-success rounded-3' src='..\images\dermocuidado\404637_1_SENSIBIO_BIODERMA_TUB_X_100ML_GEL_MOUSSANT.jpg' alt='Imagen1' width={"220px"} height={"170px"}></img>
                    </div>
                    <div className='col mt-2'>
                        <p><b>Nombre del producto:</b> SENSIBIO_BIODERMA_GEL_MOUSSANT</p>
                        <p><b>Stock:</b> 45</p>
                        <p><b>Vendidas:</b> 5</p>
                        <p><b>Precio:</b>  $50.000</p>
                        <Link to className='btn btn-outline-primary mx-2 my-2'>Editar <i class="bi bi-pencil-square"></i></Link>
                        <Link to className='btn btn-outline-danger mx-2'>Eliminar <i class="bi bi-trash-fill"></i></Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProducsAdmin