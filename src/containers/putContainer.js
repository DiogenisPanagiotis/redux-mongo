import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class putContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            modelId: '',
            modelName: ''
        }
    }

    componentDidMount() {
        const { getModels } = this.props.actions
        getModels()
    }

    updateModel(newModel) {
        const { updateModel } = this.props.actions
        updateModel(newModel)
    }

    render() {
        const { addModel, getModels } = this.props.actions
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">PUT Request</h5>
                                <div className="input-group mb-3">
                                  <input 
                                    autoFocus 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.modelId} 
                                    placeholder="Model Id" 
                                    onChange = { ({target}) => this.setState({modelId: target.value}) }
                                    />
                                  <input 
                                    type="text" 
                                    className="form-control" 
                                    value={this.state.putName} 
                                    placeholder="Model Name" 
                                    onChange = { ({target}) => this.setState({modelName: target.value}) }
                                    />
                                </div>
                                <button onClick={() => this.updateModel({'_id': this.state.modelId, 'name': this.state.modelName})} type="button" className="btn btn-warning">PUT</button>
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
    const { statusReducer, anotherReducer } = state
    return { statusReducer, anotherReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(putContainer)
