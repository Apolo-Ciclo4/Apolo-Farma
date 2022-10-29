import React, { Fragment } from 'react'
import { consumoData2 } from '../json/consumoData2'

export const UpdateProduct = () => {
    return (
        <Fragment>
            <div className='py-4 mt-5 container' >
            {consumoData2 && consumoData2.map(consumoData2=> (
                <form action='#' method='POST' className='py-4 px-5 mx-5 shadow-lg '>
                    <h1 className='title'>Modificar un producto</h1>
                    <p className='pt-3 text-muted fst-italic'>Por favor ingrese los siguientes datos, recuerde que todos
                        son obligatorios.</p>

                    <div className='row '>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-bag-plus-fill'></i> Nombre del producto*</label>
                            <input type='text' name='nombreProducto' required className='fw-light form-control w-100'
                                id='nombre' aria-describedby='emailHelp' placeholder='Ejemplo: Crema Hidratante' value={consumoData2.nombre}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-currency-dollar'></i> Precio del Producto*</label>
                            <input type='number' name='precio' required className='fw-light form-control w-100' id='number'
                                aria-describedby='emailHelp' placeholder='20.000' value={consumoData2.precio}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-stack'></i> Cantidad Stock*</label>
                            <input type='number' name='size' required className='fw-light form-control w-100' id='text'
                                aria-describedby='emailHelp' placeholder='Ejemplo: 10' value={consumoData2.inventario}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'>
                                <i className='bi bi-paperclip'></i> Seleccionar Imagen*</label>
                            <input type='file' className='form-control' id='inputGroupFile03' aria-describedby='inputGroupFileAddon03' aria-label='Upload' name='image'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Categoria*</label>
                            <input type='text' name='categoria' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: Dermocosmetica' value={consumoData2.categoria}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Contenido*</label>
                            <input type='text' name='contenido' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: 70 ML' value={consumoData2.Tamaño}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-pencil'></i> Descripción*</label>
                            <textarea className='form-control rounded-3 fw-light' id='exampleFormControlTextarea1' rows='3' maxLength='150' value={consumoData2.descripcion}></textarea>
                        </div>
                    </div>
                    <div className='pt-4 row text-center'>
                        <div className='col'>
                            <input type='button' value='Actualizar' className='btn btn-outline-success w-75 text-center'
                                name='guardar'></input>
                        </div>
                    </div>
                    
                </form >
                ))}
            </div>
        </Fragment>
    )
}
