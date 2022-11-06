import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

export const ViewAdmin = () => {
    return (
        <Fragment>
            <div className="mt-3 pt-5 container">
                <div className="py-5 px-4 mt-3 mb-5  rounded-3 shadow">

                    <h1 className="title" data-aos="fade-in">
                        Sistema Gestor de Administrador
                    </h1>
                    <h5 className="pt-3 mt-3 text-mute fw-light">
                        <b>Rol: Administrador</b>
                    </h5>
                    <h4 className="text-mute fw-light">A continuación encontraras las opciones que puedes realizar</h4>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col pt-5">
                            <div className="card" data-aos="zoom-in-up" data-aos-duration="4000">
                                <img src="../images/icons/add.jpg" className="card-img-top " alt="Registrar"></img>
                                <div className="card-body">
                                    <Link to={`/admin/newproduct`} className="card-title btn btn-outline-success text-center w-100">Agregar un producto</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="card" data-aos="zoom-in-up" data-aos-duration="3000">
                                <img src="../images/icons/list.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <Link to={`/admin/products`} className="card-title btn btn-outline-success text-center w-100">Productos Creados</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="card" data-aos="zoom-in-up" data-aos-duration="3000">
                                <img src="../images/icons/buy.jpg" className="card-img-top" alt="..."></img>
                                <div className="card-body">
                                    <Link to={`/admin/sells`} className="card-title btn btn-outline-success text-center w-100">Productos vendidos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
