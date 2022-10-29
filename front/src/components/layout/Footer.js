import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Fragment>
            <footer className="py-5 my-5 text-white fw-light" style={{background: "#388659"}}>
                <div className="row text-white">
                    <div className="col-6 col-md-2 mb-3 ">
                        <h5 className='px-2'>Apolo Farma</h5>
                        <ul className="nav flex-column text-white px-2">
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Home</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Features</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Pricing</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">FAQs</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">About</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Sedes</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Bogota</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Cali</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Medellin</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Cartagena</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Tunja</Link></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Contacto</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">apolo@apolosolutions.com</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">pqrapolo@apolosolutions.com</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Call center +57 311 222 3334</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Call center +57 322 322 5334</Link></li>
                            <li className="nav-item mb-2"><Link to={`/`} className="nav-link p-0 text-white">Call center +57 312 212 3214</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Suscribite a nuestro newsletter</h5>
                            <p>Recibiras información sobre promociones y más</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Correo Electronico</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"></input>
                                    <button className="btn btn-outline-light mr-2 ml-2" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>&copy; 2022 Apolo, Inc. All rights reserved.</p>
                    <ul className="list-unstyled d-flex">
                        <li className="ms-3"><Link to={``} className="link-dark"></Link></li>
                        <li className="ms-3"><Link to={``} className="link-dark"></Link></li>
                        <li className="ms-3"><Link to={``} className="link-dark"></Link></li>
                    </ul>
                </div>
            </footer>
        </Fragment>
    )
}
export default Footer