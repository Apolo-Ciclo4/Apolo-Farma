import React, { Fragment } from 'react';

const Footer = () => {
    return (
        <Fragment>
            <footer class="py-5 my-5 text-white fw-light" style={{background: "#388659"}}>
                <div class="row text-white">
                    <div class="col-6 col-md-2 mb-3 ">
                        <h5 className='px-2'>Apolo Farma</h5>
                        <ul class="nav flex-column text-white px-2">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Home</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Features</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Pricing</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">FAQs</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">About</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Sedes</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Bogota</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cali</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Medellin</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Cartagena</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Tunja</a></li>
                        </ul>
                    </div>

                    <div class="col-6 col-md-2 mb-3">
                        <h5>Contacto</h5>
                        <ul class="nav flex-column">
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">apolo@apolosolutions.com</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">pqrapolo@apolosolutions.com</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Call center +57 311 222 3334</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Call center +57 322 322 5334</a></li>
                            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-white">Call center +57 312 212 3214</a></li>
                        </ul>
                    </div>

                    <div class="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Suscribite a nuestro newsletter</h5>
                            <p>Recibiras información sobre promociones y más</p>
                            <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" class="visually-hidden">Correo Electronico</label>
                                <input id="newsletter1" type="text" class="form-control" placeholder="Email address"></input>
                                    <button class="btn btn-outline-light mr-2 ml-2" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2022 Apolo, Inc. All rights reserved.</p>
                    <ul class="list-unstyled d-flex">
                        <li class="ms-3"><a class="link-dark" href="#"></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"></a></li>
                        <li class="ms-3"><a class="link-dark" href="#"></a></li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer