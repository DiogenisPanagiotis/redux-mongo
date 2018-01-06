import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class getContainer extends Component {

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
                                <h5 className="card-title">GET Request</h5>
                                <button onClick={() => getModels()} type="button" className="btn btn-primary">GET</button>
                              </div>
                            </div>
                            <br />
                            <ul className="list-group">
                                {this.props.anotherReducer.models ? this.props.anotherReducer.models.map((model, i) => {
                                    return (
                                        <li className="list-group-item" key={`${model._id}`}>
                                            {model.name}
                                        </li>
                                    )
                                })
                                :
                                ''
                                }
                            </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(getContainer)