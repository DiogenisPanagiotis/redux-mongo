import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class registerContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            registered: false,
            usernameTaken: false
        }
    }

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    addUser() {
        const { addUser, getUsers } = this.props.actions
        const { username, password, registered, usernameTaken } = this.state
        const { users } = this.props.userReducer

        getUsers()

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === username) {
                    if (usernameTaken) {
                        return
                    }
                    this.setState({ usernameTaken: true })
                    return
                }
            }
        }

        addUser({ username: username, password: password })

        this.setState({ usernameTaken: false })
        this.setState({ registered: true })  
        getUsers()
    }

    render() {
        const { username, password, registered, usernameTaken } = this.state
        const { users } = this.props.userReducer
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Sign Up</h5>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input 
                                            autoFocus
                                            value={username} 
                                            type="email" 
                                            className="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email"
                                            onChange = { ({target}) => this.setState({username: target.value}) }
                                            />
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Password</label>
                                        <input 
                                            value={password} 
                                            type="password" 
                                            className="form-control" 
                                            id="exampleInputPassword1" 
                                            placeholder="Password"
                                            onChange = { ({target}) => this.setState({password: target.value}) }
                                            />
                                    </div>
                                    { registered && !usernameTaken ? <div className="alert alert-success" role="alert"> Thanks for signing up! </div> : '' }
                                    { usernameTaken  ? <div className="alert alert-danger" role="alert"> Username taken </div> : '' }
                                    <button onClick={() => this.addUser()} type="submit" className="btn btn-primary">Sign Up</button>
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
    const { statusReducer, anotherReducer, userReducer } = state
    return { statusReducer, anotherReducer, userReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(registerContainer)
