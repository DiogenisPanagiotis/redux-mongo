import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class postContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            modelName: ''
        }
    }
    render() {
        const { addModel } = this.props.actions
        console.log(this.props)
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
                                    value={this.state.modelName} 
                                    placeholder="Model name" 
                                    onChange = { ({target}) => this.setState({modelName: target.value}) }
                                    />
                                <br/>
                                <button onClick={() => addModel({ name: this.state.modelName })} type="button" className="btn btn-success">POST</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(postContainer)
