import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class putContainer extends Component {

    componentDidMount() {
        const { getModels } = this.props.actions
        getModels()
    }

    updateModel(newModel) {
        const { updateModel } = this.props.actions
        const { modelId, modelName } = this.props.putReducer
        if (modelId.length > 0 && modelName.length > 0) {
            updateModel(newModel)
        }
    }

    render() {
        const { addModel, getModels, putModelId, putModelName } = this.props.actions
        const { modelId, modelName } = this.props.putReducer
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">PUT Request</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Update a model by providing a model name and Id.</h6>
                                <div className="input-group mb-3">
                                  <input 
                                    autoFocus 
                                    type="text" 
                                    className="form-control" 
                                    value={modelId} 
                                    placeholder="Model Id" 
                                    onChange = { ({target}) => putModelId({modelId: target.value}) }
                                    />
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={modelName} 
                                    placeholder="Model Name" 
                                    onChange = { ({target}) => putModelName({modelName: target.value}) }
                                    />
                                </div>
                                <div className='container'>
                                    <div className='row'>
                                        <div className='col col-put'>
                                        { modelId.length === 0 ? <small id="postFormMessage" className="form-text text-muted">Please provide a model Id.</small> : null}
                                        </div>
                                        <div className='col col-put'>
                                        { modelName.length === 0 ? <small id="postFormMessage" className="form-text text-muted">Please provide a model name.</small> : null}
                                        </div>
                                    </div>
                                </div>
                              </div>
                            </div>
                            <br/>
                            <button onClick={() => this.updateModel({'_id': modelId, 'name': modelName})} type="button" className="btn btn-warning btn-block">PUT</button>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { statusReducer, anotherReducer, putReducer } = state
    return { statusReducer, anotherReducer, putReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(putContainer)
