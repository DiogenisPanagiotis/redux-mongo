import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class postContainer extends Component {

    postButtonClick(modelName) {
        const { addModel, resetPosted, resetModelName } = this.props.actions
        const { modelName: modelNameInput } = this.props.postReducer
        if (modelNameInput.length > 0) {
            addModel({ name: modelName })
            resetModelName()
            setTimeout(() => {
                resetPosted()
            }, 3000)  
        }
    }

    render() {
        const { addModel, postModelName, resetPosted } = this.props.actions
        const { modelName, posted } = this.props.postReducer
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">POST Request</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Create a model by providing a model name.</h6>
                                <input 
                                    autoFocus 
                                    type="text" 
                                    className="form-control" 
                                    value={modelName} 
                                    placeholder="Model name" 
                                    onChange = { ({target}) => postModelName(target.value) }
                                    />
                                { modelName.length === 0 && !posted ? <small id="postFormMessage" className="form-text text-muted">Please provide a model name.</small> : null}
                                { posted ? <div className="alert alert-success alert-post" role="alert"> Post request succeessful! </div> : null}
                              </div>
                            </div>
                            <br/>
                            <button onClick={() => this.postButtonClick(modelName)} type="button" className="btn btn-success btn-block">POST</button>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { anotherReducer, postReducer } = state
    return { anotherReducer, postReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(postContainer)
