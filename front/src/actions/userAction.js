import axios from "axios"
import { CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, 
    LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, 
    REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } 
    from "../constants/userConstants"

//Login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST })

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/login', {email, password}, config)
        console.log(data)

        dispatch({
            type:LOGIN_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        console.log(error)
        dispatch({
            type:LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}

export const register = (nombre, email, password, celular, departamento, ciudad, direccion) => 
async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config={
            headers: {
                'Content-Type': 'application/json'
            }
        }
        console.log("prueba front", nombre,password,celular)
        const {data} = await axios.post('/api/usuario/registro', {nombre, email, password, celular, departamento, ciudad, direccion}, config)
        

        dispatch({
            type: REGISTER_USER_SUCCESS,
            payload: data.user
        })
    }
    catch (error) { 
        console.log(error)
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message

        })
    }
}

//logout
//logout User
export const logout = () => async (dispatch)=>{
    try{
        await axios.get("/api/logout")
        dispatch({
            type: LOGOUT_SUCCESS,
        })
    } catch(error){
        dispatch({
            type:LOGOUT_FAIL,
            payload: error.response.data.message
        })
    }
}

//CARGAR EL USUARIO (LOAD USER)
// export const loadUser=()=> async(dispatch) =>{
//     try{
//         dispatch({type: LOAD_USER_REQUEST})
//         const {data} = await axios.get("/api/yo")
//         dispatch({
//             type: LOAD_USER_SUCCESS,
//             payload: data.user
//         })
//     }catch(error){
//         dispatch({
//             type: LOAD_USER_FAIL,
//             payload: error.response.data.message
//         })
//     }
// }

//Clear error
export const clearErrors = () => async (dispatch) =>{
    dispatch({
        type: CLEAR_ERRORS
    })
}