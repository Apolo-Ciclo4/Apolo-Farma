import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { register, clearErrors } from '../../actions/userAction';

export const Register = () => {
    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
        celular: "",
        departamento: "",
        ciudad: "",
        direccion: "",
    })

    const navigate = useNavigate();
    const { nombre, email, password, celular, departamento, ciudad, direccion } = user;
    const alert = useAlert()
    const dispatch = useDispatch()
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error, alert])

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(register(nombre, email, password, celular, departamento, ciudad, direccion))
    }

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <Fragment>
            <div className='py-4 mt-5 container' >
                <form className='py-4 px-5 mx-5 shadow-lg ' onSubmit={submitHandler} encType='application/json'>
                    <h1 className='title'>Registrar Usuario</h1>
                    <p className='pt-3 text-muted fst-italic'>Por favor ingrese los siguientes datos, recuerde que todos
                        son obligatorios.</p>
                    <div className='row '>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label' htmlFor="name_field"><i class="bi bi-person-add"></i> Nombre Completo*</label>
                            <input type='text' name='nombre' required className='fw-light form-control w-100'
                                id="name_field" aria-describedby='emailHelp' placeholder='Ejemplo: Pepito Perez' value={nombre}
                                onChange={onChange}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-envelope-at"></i> Correo*</label>
                            <input type='email' name='email' required className='fw-light form-control w-100' id='email'
                                aria-describedby='emailHelp' placeholder='Ejm: correo@correo.com' value={email}
                                onChange={onChange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-key"></i> Password*</label>
                            <input type='password' name='password' required className='fw-light form-control w-100' id='text'
                                aria-describedby='emailHelp' placeholder='Ingrese su contraseña' value={password}
                                onChange={onChange}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-phone"></i> Celular*</label>
                            <input type='text' name='celular' required className='fw-light form-control w-100' id='text'
                                aria-describedby='emailHelp' placeholder='Ejm: 3112223334' value={celular}
                                onChange={onChange}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-geo-alt"></i> Departamento*</label>
                            <input type='text' name='departamento' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: Boyacá' value={departamento}
                                onChange={onChange}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-pin-map"></i> Ciudad*</label>
                            <input type='text' name='ciudad' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: Tunja' value={ciudad}
                                onChange={onChange}></input>
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-person-add"></i> Direccion*</label>
                            <input type='text' name='direccion' required className='fw-light form-control w-100'
                                id='direccion   ' aria-describedby='emailHelp' placeholder='Ejemplo: Pepito Perez' value={direccion}
                                onChange={onChange}></input>
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
        </Fragment>
    )
}
