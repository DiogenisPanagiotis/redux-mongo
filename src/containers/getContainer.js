import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class getContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            fetched: false
        }
    }

    componentDidMount() {
        const { getModels } = this.props.actions
        getModels()
    }

    getModels() {
        const { getModels } = this.props.actions
        getModels()
        this.setState({ fetched: true})
    }

    render() {
        const { models } = this.props.anotherReducer
        const { fetched } = this.state
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">GET Request</h5>
                                <button onClick={() => this.getModels()} type="button" className="btn btn-primary">GET</button>
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
