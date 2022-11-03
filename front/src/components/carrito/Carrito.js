import React, { Fragment } from 'react'
import { consumoData } from '../json/consumoData';

const Carrito = () => {
    return (
        <Fragment>
            <div className='container fw-light mt-5 '>
                <h1 className='title' id='listadoProductos'>Resumen de Compra</h1>
                <div className='container'>

                    <div className='row row-cols-6 mt-5 text-center'>
                        <div className='col'>
                            <h6 className='text-center'>Imagen</h6>
                        </div>
                        <div className='col text-center'><h6>Producto</h6> </div>
                        <div className='col text-center'><h6>Cantidad</h6></div>
                        <div className='col text-center'><h6>Unidad</h6></div>
                        <div className='col text-center'><h6>Total</h6></div>
                        <div className='col text-center'></div>
                    </div>

                    <hr className='mt-0'></hr>
                    {consumoData && consumoData.map(consumoData => (
                        <div className='row row-cols-6 mt-2 text-center'>
                            <div className='col'>
                                <img className='img-fluid' src={consumoData.imagen[0].url} alt='Imagen1' width={"75px"} height={"50px"}></img>
                            </div>
                            <div className='col'> {consumoData.nombre}</div>
                            <div className='col'>{consumoData.carrito}</div>
                            <div className='col'>{consumoData.precio}</div>
                            <div className='col'>{consumoData.precio}</div>
                            <div className='col mt-0'><a className='btn text-danger mt-0 fs-5 pt-0'><i className='bi bi-trash3'></i></a></div>
                        </div>
                    ))}
                    <div className='row'>
                        <div className='col'>
                            <h5 className='text-end mx-5 px-4 '>Total Compra: <span className='fw-light'>$155.000</span></h5>
                        </div>
                    </div>
                    <div className='row text-end mx-5 px-1 mt-2'>
                        <div className='col justify-content-end'>
                            <a className='btn btn-danger justify-content-end text-white mx-3'>Cancelar Compra</a>
                            <a className='btn btn-success justify-content-end text-white'>Finalizar Compra <i className='bi bi-lock'></i></a>
                        </div>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Carrito