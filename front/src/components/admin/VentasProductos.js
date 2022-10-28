import React, { Fragment } from 'react'
import { consumoData } from '../json/consumoData';

export default function VentasProductos() {
    return (
        <Fragment>
            <div className='container mt-5'>
                <h1 className='title'> Ventas Realizadas</h1>
                <table class="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Tamaño</th>
                            <th scope="col">Categoria</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Imagen</th>
                        </tr>
                    </thead>
                    <tbody>
                    {consumoData && consumoData.map(consumoData => (
                        <tr>
                            <td>{consumoData.id}</td>
                            <td>{consumoData.nombre}</td>
                            <td>{consumoData.precio}</td>
                            <td>{consumoData.Tamaño}</td>
                            <td>{consumoData.categoria}</td>
                            <td>{consumoData.carrito}</td>
                            <td>
                            <img className='img-fluid' src={consumoData.imagen[0].url} alt='Imagen1' width={"75px"} height={"50px"}></img>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}
