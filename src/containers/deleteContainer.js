import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class deleteContainer extends Component {
    delete() {
        if (this.props.anotherReducer.models) {
            this.props.anotherReducer.models.forEach((model, i) => {
                this.props.actions.deleteModel(model)
            })
        }
    }
    render() {
        const { addModel, getModels } = this.props.actions
        console.log(this.props)
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">DELETE Request</h5>
                                <button onClick={() => this.delete() } type="button" className="btn btn-danger">DELETE</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(deleteContainer)
