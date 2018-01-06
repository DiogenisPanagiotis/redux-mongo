import { GET_MODELS, ADD_MODEL, DELETE_MODEL, UPDATE_MODEL } from '../constants';
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
    })
    
}

export default actions;