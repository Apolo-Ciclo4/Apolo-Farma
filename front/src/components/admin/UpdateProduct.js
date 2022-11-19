import React, { Fragment, useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { clearErrors, getProductDetails, updateProduct } from '../../actions/productActions';
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants';


export const UpdateProduct = () => {

    const navigate = useNavigate()
    const params = useParams();
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState(0);
    const [descripcion, setDescripcion] = useState('');
    const [categoria, setCategoria] = useState('');
    const [inventario, setInventario] = useState(0);
    const [vendedor, setVendedor] = useState('');
    const [imagen, setImagen] = useState([]);
    const [imagenPreview, setImagenPreview] = useState([])
    const [oldImagen, setOldImagen] = useState([])

    const alert = useAlert();
    const dispatch = useDispatch();

    const { error: updateError, success } = useSelector(state => state.product)
    const { error, product } = useSelector(state => state.productDetails)
    const productId = params.id;

    useEffect(() => {

        if (product && product._id !== productId) {
            dispatch(getProductDetails(productId));
        }
        else {

            setNombre(product.nombre);
            setPrecio(product.precio);
            setDescripcion(product.descripcion);
            setCategoria(product.categoria);
            setVendedor(product.vendedor);
            setInventario(product.inventario);
            setOldImagen(product.imagen)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (updateError) {
            alert.error(error)
            dispatch(clearErrors)
        }
        if (success) {
            alert.success("Producto actualizado correctamente");
            navigate("/dashboard")
            dispatch({ type: UPDATE_PRODUCT_RESET })
        }
        // console.log("Mostrando el id despues del else")
    }, [dispatch, alert, error, updateError, product, productId])
    ///////////////////////////////////////////////////////////////
    // useEffect(() => {
    //     if (product && product._id !==productId){
    //         dispatch(getProductDetails(productId));
    //     }else{
    //         setNombre(product.nombre);
    //         setPrecio(product.precio); 
    //         setDescripcion(product.descripcion);
    //         setCategoria(product.categoria); 
    //         setVendedor(product.vendedor);
    //         setInventario(product.inventario);
    //         setOldImagen(product.imagen)
    //     }
    //     if (error) {
    //         alert.error(error);
    //         dispatch(clearErrors())
    //     }

    //     if (success) {         
    //         alert.success('Product updated successfully');
    //         navigate('/dashboard');
    //         dispatch({ type: UPDATE_PRODUCT_RESET })
    //     }

    // }, [dispatch, alert, error, success])

    const submitHandler = (e) => {
        //console.log("Mostrando el ", productId)
       
        alert.success("Actualizado Correctamente")      
        e.preventDefault();

        const formData = new FormData();
        formData.set('nombre', nombre);
        formData.set('precio', precio);
        formData.set('descripcion', descripcion);
        formData.set('categoria', categoria);
        formData.set('inventario', inventario);
        formData.set('vendedor', vendedor);

        imagen.forEach(img => {
            formData.append('imagen', img)
        })

        dispatch(updateProduct(productId, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setImagenPreview([]);
        setImagen([])
        setOldImagen([])

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
                <form onSubmit={submitHandler} className='py-4 px-5 mx-5 shadow-lg' encType='application/json'>
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
                            {oldImagen && oldImagen.map(img => (
                                <img key={img} src={img.url} alt={img.url} className="mt-3 mr-2" width="55" height="52" />
                            ))}

                            {imagenPreview.map(img => (
                                <img src={img} key={img} alt="Vista Previa" className="mt-3 mr-2" width="55" height="52" />
                            ))}


                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <label className='pt-3 fw-light form-label'><i className='bi bi-tags'></i> Categoria*</label>
                            <input type='text' name='contenido' required className='fw-light form-control w-100' id='contrasena'
                                aria-describedby='emailHelp' placeholder='Ejm: Pepito Perez'
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}></input>
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

                            <button type='submit' className='btn btn-outline-success w-75 text-center'
                                name='actualizar'> Actualizar
                            </button>

                        </div>
                    </div>
                </form >
            </div>
        </Fragment >

    )
}
