import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top fw-light text-white" style={{ background: "#388659" }}>
                <div className="container-fluid">
                    <Link to={`/`} className="navbar-brand fs-2 text-white"><i className="bi bi-heart-pulse-fill text-warning"></i> Apolo Farma </Link>

                    <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-white"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">

                            </li>
                        </ul>
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <form className="d-flex align-items-center justify-content-center text-white" role="search">
                                    <input className="form-control me-2 rounded-pill text-dark" type="search" placeholder="¿Que buscas hoy?" aria-label="Search" style={{ width: "300px", height: "50px" }}></input>
                                    <button className="btn" type="submit" style={{ marginLeft: "-10px" }}><i className="bi bi-search text-white"></i></button>
                                </form>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={`/`} className='btn text-white'><i className="bi bi-person fs-2"></i> <h6 className='fw-light'>Iniciar Sesión</h6></Link>
                                <Link to={`/admin/view`} className='btn text-white'><i className="bi bi-person-circle fs-2"></i> <h6 className='fw-light'>Administrador</h6></Link>

                                <Link to={`/cart/details`} type="button" className="btn position-relative margin-auto text-white">
                                    <i className="bi bi-cart-plus fs-3"></i>
                                    <span className="position-absolute top-50 start- translate-middle badge rounded-pill bg-danger">
                                        8
                                    </span>
                                    <h6 className='fw-light mt-1 text-white'>Mis compras</h6>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='mt-5 pt-5 fw-light'>
                <nav className='navbar bg-light fw-light '>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Medicamentos
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Alivio del dolor</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light" >Sistema Respiratorio</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light" >Metabólicos</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light" >Anticonceptivos</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light" >Salud Digestiva</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Dermocosméticos
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Protección Solar</Link></li>
                            <li><Link className="dropdown-item fw-light" to={`/Dermocosmeticos/cuidadofacial`}>Cuidado Facial</Link> </li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado de Cabello</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado Corporal</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Infantil</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Salud Sexual
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Alivio del dolor</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Test de Diagnostico</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Tratamiento Testosterona</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Bebé y maternidad
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Alimentación y lactancia</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Pañales y toallitas humedas</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Salud y Bienestar</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Mamá</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Cuidado Personal
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado del Cabello</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado de la piel</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Higiene personal</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Mamá</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado Masculino</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado Femenino</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Higiene Oral</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Afeitada y depilación</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Belleza
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado Corporal</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Cuidado del Cabello</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Accesorios</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Maquillaje</Link></li>
                        </ul>
                    </div>
                    <div className="btn-group mt-2">
                        <button type="button" className="btn btn-light dropdown-toggle dropdown-menu-start fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Bienestar y nutrición
                        </button>
                        <ul className="dropdown-menu fw-light">
                            <li><Link to={`/`} className="dropdown-item fw-light">Alimentos saludables</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Vitaminas y Minerales</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Suplemetos dietarios</Link></li>
                            <li><Link to={`/`} className="dropdown-item fw-light">Suplemento Nutricional</Link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default Header