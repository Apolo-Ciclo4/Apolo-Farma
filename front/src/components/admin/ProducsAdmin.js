import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { consumoData } from '../json/consumoData';

const ProducsAdmin = () => {
    return (
        <Fragment>
            <div className='container my-5 fw-light'>
                <h1 className='title my-5' id='listadoProductos'>Listado de Productos Administrador</h1>
                {/* Primera fila */}
                {consumoData && consumoData.map(consumoData => (
                    <div className='d-flex row my-4 mx-5 px-5 py-2 rounded-3 align-items-center' style={{ border: "1px solid #a3b18a" }}>
                        <div className='col-sm-12 col-md-6 col-lg-3 my-3 fw-light'>
                            <img className='img-fluid py-3 rounded-3' src={consumoData.imagen[0].url} alt='Imagen1' width={"220px"} height={"170px"}></img>
                        </div>
                        <div className='col mt-2'>
                            <p><b>Nombre del producto: </b>{consumoData.nombre}</p>
                            <p><b>Descripción: </b>{consumoData.descripcion}</p>
                            <p><b>Stock:</b> {consumoData.inventario}</p>
                            <p><b>Vendidas:</b> {consumoData.carrito}</p>
                            <p><b>Precio:</b> {consumoData.precio}</p>
                        </div>
                        <div className='col  my-0 py-0 '>
                            <Link to className='btn btn-outline-success mx-2 my-2'>Editar <i className="bi bi-pencil-square"></i></Link>
                            <Link to className='btn btn-outline-danger mx-2'>Eliminar <i className="bi bi-trash-fill"></i></Link>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default ProducsAdmin