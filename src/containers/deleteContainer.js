import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class deleteContainer extends Component {
    render() {
        const { deleteModel, deleteModelId } = this.props.actions
        const { modelId } = this.props.deleteReducer
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">DELETE Request</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Delete a model by providing a model Id.</h6>
                                <input 
                                    autoFocus 
                                    type="text" 
                                    className="form-control" 
                                    value={modelId} 
                                    placeholder="Model Id" 
                                    onChange = { ({target}) => deleteModelId(target.value) }
                                    />
                                { modelId.length === 0 ? <small id="postFormMessage" className="form-text text-muted">Please provide a model Id.</small> : <div className="custom-break"></div>}
                                <button onClick={() => deleteModel(modelId) } type="button" className="btn btn-danger btn-block">DELETE</button>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { deleteReducer } = state
    return { deleteReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(deleteContainer)
