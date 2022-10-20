import React, { Fragment } from 'react';

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top fw-light text-white" style={{background: "#388659"}}>
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
                                    <input class="form-control me-2 rounded-pill text-dark" type="search" placeholder="¿Que buscas hoy?" aria-label="Search" style={{width: "300px", height:"50px"}}></input>
                                    <button class="btn" type="submit" style={{marginLeft: "-10px"}}><i class="bi bi-search text-white"></i></button>
                                </form>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a href="" className='btn text-white'><i class="bi bi-person fs-2"></i> <h6 className='fw-light'>Iniciar Sesión</h6></a>
                                <button type="button" class="btn position-relative margin-auto text-white">
                                    <i class="bi bi-cart-plus fs-3"></i>
                                    <span class="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">
                                        2
                                    </span>
                                    <h6 className='fw-light mt-1 text-white'>Mis compras</h6>
                                </button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </Fragment>
    )
}
export default Header