import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'
import { Link } from 'react-router-dom'

class App extends Component {

    renderBreadcrumbs() {
        const crud = ['', 'get', 'post', 'put', 'delete', 'register', 'login']
        let crudClasses = []
        let path = window.location.pathname.slice(1)

        crud.map((operation, i) => {
            crudClasses.push(`breadcrumb-item ${path === operation ? 'active' : ''}`)
        })

        return (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className={`${crudClasses[0]}`}><Link to="/">Home</Link></li>
                <li className={`${crudClasses[1]}`}><Link to="/get">Get</Link></li>
                <li className={`${crudClasses[2]}`}><Link to="/post">Post</Link></li>
                <li className={`${crudClasses[3]}`}><Link to="/put">Put</Link></li>
                <li className={`${crudClasses[4]}`}><Link to="/delete">Delete</Link></li>
                <li className={`${crudClasses[5]}`}><Link to="/register">Register</Link></li>
                <li className={`${crudClasses[6]}`}><Link to="/login">Login</Link></li>
              </ol>
            </nav>
        )
    }

    render() {
        const { getModels } = this.props.actions
        console.log(this.props)
        return (
            <div className='container'>
                <div className='row'>
                     <div className='col'>
                     {this.renderBreadcrumbs()}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)
