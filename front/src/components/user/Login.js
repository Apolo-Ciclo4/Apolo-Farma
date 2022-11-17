import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login, clearErrors } from "../../actions/userAction"
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { isAuthenticated, error, loading } = useSelector(state => state.auth)
    const alert = useAlert;

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/")
        }
        if (error) {
            dispatch(clearErrors)
        }
    }, [dispatch, isAuthenticated, error])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
    }
    return (
        <Fragment>
            <div className='py-4 mt-4 container d-flex justify-content-center' >
                <form className='py-5 px-5 mx-5 shadow-lg w-75' onSubmit={submitHandler} encType='application/json'>
                    <h1 className='title'>Iniciar Sesión</h1>
                    <div className='row'>
                        <div className='col' >
                            <label className='pt-3 fw-light form-label'><i class="bi bi-person-lock fs-5"></i> Correo electronico*</label>
                            <div>
                                <input type='email' name='nombreProducto' required className='fw-light form-control w-100'
                                    id='email' aria-describedby='emailHelp' placeholder='Ejemplo: correo@correo.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    ></input>
                            </div>

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i class="bi bi-lock fs-5"></i> Password*</label>
                            <input type='password' name='pass' required className='fw-light form-control' id='text'
                                aria-describedby='emailHelp' placeholder='Ingrese su contraseña'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                ></input>
                        </div>
                    </div>
                    <div className='pt-4 row text-center'>
                        <div className='col'>
                            <input type='submit' value='Ingresar' className='btn btn-outline-success w-75 text-center'
                                name='Ingresar' ></input>
                        </div>
                    </div>
                </form >
            </div>
        </Fragment>

    )
}
