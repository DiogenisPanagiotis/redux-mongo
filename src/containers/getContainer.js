import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class getContainer extends Component {

    componentDidMount() {
        const { getModels, toggleFetched } = this.props.actions
        const { fetched } = this.props.getReducer
        getModels()
        if (fetched) {
            toggleFetched()
        }
    }

    getModels() {
        const { getModels, toggleFetched } = this.props.actions
        getModels()
        toggleFetched()
    }

    render() {
        const { models } = this.props.anotherReducer
        const { fetched } = this.props.getReducer
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">GET Request</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Retrieve all created models.</h6>
                                <button onClick={() => this.getModels()} type="button" className="btn btn-primary btn-block">GET</button>
                              </div>
                            </div>
                            { fetched ? <br/> : null }
                            <ul className="list-group">
                                {
                                    models ? 
                                        fetched === false ?
                                            <div className="alert alert-primary alert-primary-get" role="alert">There are currently <b>{models.length}</b> models created!</div>
                                            :
                                            models.map((model, i) => {
                                                return (
                                                    <li className="list-group-item" key={`${model._id}`}>
                                                        <span className="badge badge-pill badge-primary float-right">{model._id}</span>
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
                    <div className='col-lg-3'></div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    const { statusReducer, anotherReducer, getReducer } = state
    return { statusReducer, anotherReducer, getReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(getContainer)
