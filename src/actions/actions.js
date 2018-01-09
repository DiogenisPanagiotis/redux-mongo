import { GET_MODELS, ADD_MODEL, DELETE_MODEL, 
        UPDATE_MODEL, GET_USERS, ADD_USER, POST_MODEL_NAME,
        RESET_POSTED, RESET_MODEL_NAME, PUT_MODEL_ID, PUT_MODEL_NAME,
        DELETE_MODEL_ID, TOGGLE_FETCHED, LOGIN_EMAIL, LOGIN_PASSWORD,
        INVALID_LOGIN, REGISTER_EMAIL, REGISTER_PASSWORD, TOGGLE_REGISTERED,
        TOGGLE_EMAILTAKEN_TRUE, TOGGLE_EMAILTAKEN_FALSE } from '../constants';
import * as service from '../services'

const actions = {

    getModels: () => ({
        type: GET_MODELS,
        payload: service.getModels()
    }),
    addModel: (model) => ({
        type: ADD_MODEL,
        payload: service.addModel(model)
    }),
    updateModel: (model) => ({
        type: UPDATE_MODEL,
        payload: service.updateModel(model)
    }),
    deleteModel: (modelId) => ({
        type: DELETE_MODEL,
        payload: service.deleteModel(modelId)
    }),
    getUsers: () => ({
        type: GET_USERS,
        payload: service.getUsers()
    }),
    addUser: (user) => ({
        type: ADD_USER,
        payload: service.addUser(user)
    }),
    postModelName: (modelName) => ({
        type: POST_MODEL_NAME,
        payload: modelName
    }), 
    resetPosted: () => ({
        type: RESET_POSTED
    }),
    resetModelName: () => ({
        type: RESET_MODEL_NAME
    }),
    putModelId: (modelId) => ({
        type: PUT_MODEL_ID,
        payload: modelId
    }),
    putModelName: (modelName) => ({
        type: PUT_MODEL_NAME,
        payload: modelName
    }),
    deleteModelId: (modelId) => ({
        type: DELETE_MODEL_ID,
        payload: modelId
    }),
    toggleFetched: () => ({
        type: TOGGLE_FETCHED
    }),
    loginEmail: (email) => ({
        type: LOGIN_EMAIL,
        payload: email
    }),
    loginPassword: (password) => ({
        type: LOGIN_PASSWORD,
        payload: password
    }),
    setInvalidLogin: () => ({
        type: INVALID_LOGIN
    }),
    registerEmail: (email) => ({
        type: REGISTER_EMAIL,
        payload: email
    }),
    registerPassword: (password) => ({
        type: REGISTER_PASSWORD,
        payload: password
    }),    
    toggleRegistered: () => ({
        type: TOGGLE_REGISTERED
    }),
    toggleEmailTakenTrue: () => ({
        type: TOGGLE_EMAILTAKEN_TRUE
    }),
    toggleEmailTakenFalse: () => ({
        type: TOGGLE_EMAILTAKEN_FALSE
    })           
}

export default actions;