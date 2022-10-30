import React, { Fragment } from 'react'

export const CreateProduct = () => {
    return (
        <Fragment>
            <div className='py-4 mt-5 container' >
                <form action='' method='POST' className='py-4 px-5 mx-5 shadow-lg '>
                    <h1 className='title'>Crear un nuevo producto</h1>
                    <p className='pt-3 text-muted fst-italic'>Por favor ingrese los siguientes datos, recuerde que todos
                        son obligatorios.</p>
                    <div className='row '>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-bag-plus-fill'></i> Nombre del producto*</label>
                            <input type='text' name='nombreProducto' required className='fw-light form-control w-100'
                                id='nombre' aria-describedby='emailHelp' placeholder='Ejemplo: Crema Hidratante'></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-currency-dollar'></i> Precio del Producto*</label>
                            <input type='number' name='precio' required className='fw-light form-control w-100' id='number'
                                aria-describedby='emailHelp' placeholder='20.000'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-stack'></i> Cantidad Stock*</label>
                            <input type='number' name='size' required className='fw-light form-control w-100' id='text'
                                aria-describedby='emailHelp' placeholder='Ejemplo: 10'></input>
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
                                aria-describedby='emailHelp' placeholder='Ejm: Dermocosmetica'></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Contenido*</label>
                            <input type='text' name='contenido' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: 70 ML'></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-pencil'></i> Descripción*</label>
                            <textarea className='form-control rounded-3 fw-light' id='exampleFormControlTextarea1' rows='3' maxLength='150'></textarea>
                        </div>
                    </div>
                    <div className='pt-4 row text-center'>
                        <div className='col'>
                            <input type='submit' value='Guardar' className='btn btn-outline-success w-75 text-center'
                                name='guardar' ></input>
                        </div>
                    </div>
                </form >
            </div>
        </Fragment >
    )
}

