import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top fw-light text-white" style={{ background: "#388659" }}>
                <div class="container-fluid">
                    <a class="navbar-brand fs-2 text-white" href="#"> <i class="bi bi-heart-pulse-fill text-warning"></i> Apolo Farma</a>
                    <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon text-white"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ">
                            <li class="nav-item">

                            </li>
                        </ul>
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <form class="d-flex align-items-center justify-content-center text-white" role="search">
                                    <input class="form-control me-2 rounded-pill text-dark" type="search" placeholder="¿Que buscas hoy?" aria-label="Search" style={{ width: "300px", height: "50px" }}></input>
                                    <button class="btn" type="submit" style={{ marginLeft: "-10px" }}><i class="bi bi-search text-white"></i></button>
                                </form>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="" className='btn text-white'><i class="bi bi-person fs-2"></i> <h6 className='fw-light'>Iniciar Sesión</h6></a>
                                <button type="button" class="btn position-relative margin-auto text-white">
                                    <i class="bi bi-cart-plus fs-3"></i>
                                    <span class="position-absolute top-50 start- translate-middle badge rounded-pill bg-danger">
                                        2
                                    </span>
                                    <h6 className='fw-light mt-1 text-white'>Mis compras</h6>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
            <div className='mt-5 pt-5 fw-light'>
                <nav className='navbar bg-light fw-light '>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Medicamentos
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Alivio del dolor</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Sistema Respiratorio</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Metabólicos</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Anticonceptivos</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Salud Digestiva</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Dermocosméticos
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Protección Solar</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado Facial</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado de Cabello</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado Corporal</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Infantil</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Salud Sexual
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Alivio del dolor</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Test de Diagnostico</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Tratamiento Testosterona</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Bebé y maternidad
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Alimentación y lactancia</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Pañales y toallitas humedas</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Salud y Bienestar</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Mamá</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Cuidado Personal
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Cuidado del Cabello</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado de la piel</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Higiene personal</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Mamá</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado Masculino</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado Femenino</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Higiene Oral</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Afeitada y depilación</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Belleza
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Cuidado Corporal</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Cuidado del Cabello</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Accesorios</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Maquillaje</a></li>
                        </ul>
                    </div>
                    <div class="btn-group mt-2">
                        <button type="button" class="btn btn-light dropdown-toggle dropdown-menu-start fw-light" data-bs-toggle="dropdown" aria-expanded="false">
                            Bienestar y nutrición
                        </button>
                        <ul class="dropdown-menu fw-light">
                            <li><a class="dropdown-item fw-light" href="#">Alimentos saludables</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Vitaminas y Minerales</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Suplemetos dietarios</a></li>
                            <li><a class="dropdown-item fw-light" href="#">Suplemento Nutricional</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </Fragment>
    )
}
export default Header