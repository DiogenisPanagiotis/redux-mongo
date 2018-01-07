import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class postContainer extends Component {

    postButtonClick(modelName) {
        const { addModel, resetPosted, resetModelName } = this.props.actions
        addModel({ name: modelName })
        resetModelName()
        setTimeout(() => {
            resetPosted()
        }, 3000)
    }

    render() {
        const { addModel, postModelName, resetPosted } = this.props.actions
        const { modelName, posted } = this.props.postReducer
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">POST Request</h5>
                                <input 
                                    autoFocus 
                                    type="text" 
                                    className="form-control" 
                                    value={modelName} 
                                    placeholder="Model name" 
                                    onChange = { ({target}) => postModelName(target.value) }
                                    />
                                <br/>
                                { posted ? <div className="alert alert-success alert-post" role="alert"> Post request succeessful! </div> : null}
                                <button onClick={() => this.postButtonClick(modelName)} type="button" className="btn btn-success">POST</button>
                              </div>
                            </div>
                        </div>
                    </div>
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
