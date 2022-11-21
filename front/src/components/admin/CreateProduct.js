import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'
import { clearErrors, newProduct } from '../../actions/productActions'


export const CreateProduct = () => {

    const navigate = useNavigate()
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [vendedor, setVendedor] = useState('');
    const [inventario, setInventario] = useState(0);
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])

    const categorias = [
        "Medicamentos",
        "Dermocosmeticos",
        "Salud Sexual",
        "Bebe y Maternidad",
        "Cuidado Personal"
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            navigate('/');
            alert.success('Product created successfully');
            dispatch({ type: NEW_PRODUCT_RESET })
        }

    }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('categoria', categoria);
        formData.set('vendedor', vendedor);
        formData.set('inventario', inventario);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(newProduct(formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagenPreview(oldArray => [...oldArray, reader.result])
                    setImagen(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }
    return (
        <Fragment>
            <div className='py-4 mt-5 container' >
                <form className='py-4 px-5 mx-5 shadow-lg' onSubmit={submitHandler} encType='application/json'>
                    <h1 className='title'>Crear un nuevo producto</h1>
                    <p className='pt-3 text-muted fst-italic'>Por favor ingrese los siguientes datos, recuerde que todos
                        son obligatorios.</p>
                    <div className='row '>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-bag-plus-fill'></i> Nombre del producto*</label>
                            <input type='text' name='nombreProducto' required className='fw-light form-control w-100'
                                id='nombre' aria-describedby='emailHelp' placeholder='Ejemplo: Crema Hidratante'
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}></input>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-currency-dollar'></i> Precio del Producto*</label>
                            <input type='number' name='precio' required className='fw-light form-control w-100' id='number'
                                aria-describedby='emailHelp' placeholder='20.000'
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-stack'></i> Cantidad Stock*</label>
                            <input type='number' name='size' required className='fw-light form-control w-100' id='text'
                                aria-describedby='emailHelp' placeholder='Ejemplo: 10'
                                value={inventario}
                                onChange={(e) => setInventario(e.target.value)}></input>
                        </div>
                        <div className='col'>
                            <label>Imágenes</label>

                            <div className='custom-file'>
                                <input
                                    type='file'
                                    name='product_images'
                                    className='custom-file-input'
                                    id='customFile'
                                    onChange={onChange}
                                    multiple
                                />
                                <label className='custom-file-label' htmlFor='customFile'>
                                    Seleccione Imágenes
                                </label>
                            </div>

                            
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Categoria*</label>
                            <select className="form-control fw-light"
                                id="category_field"
                                value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                                {categorias.map(categoria => (
                                    <option key={categoria} value={categoria} >{categoria}</option>
                                ))}
                            </select>
                        </div>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Vendedor*</label>
                            <input type='text' name='contenido' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: Pepito Perez'
                                value={vendedor}
                                onChange={(e) => setVendedor(e.target.value)}></input>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-pencil'></i> Descripción*</label>
                            <textarea className='form-control rounded-3 fw-light' id='exampleFormControlTextarea1' rows='3'
                                maxLength='150'
                                value={descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}></textarea>
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

