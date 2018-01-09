import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class registerContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    addUser() {
        const { addUser, getUsers, toggleRegistered, toggleEmailTakenTrue, 
        toggleEmailTakenFalse, registerEmail, registerPassword } = this.props.actions
        const { email, password, registered, emailTaken } = this.props.registerReducer
        const { users } = this.props.userReducer

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === email) {
                    if (emailTaken) {
                        return
                    }
                    toggleEmailTakenTrue()
                    return
                }
            }
        }

        if (email.length > 0 && password.length > 0) {
            addUser({ username: email, password: password }).then(() => {
                registerEmail({ email: '' })
                registerPassword({ password: '' })
                toggleEmailTakenFalse() 
                toggleRegistered() 
                getUsers()
            })
        }
    }

    render() {
        const { email, password, registered, emailTaken } = this.props.registerReducer
        const { users } = this.props.userReducer
        const { registerEmail, registerPassword } = this.props.actions
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
                                            value={email} 
                                            type="email" 
                                            className="form-control" 
                                            id="exampleInputEmail1" 
                                            aria-describedby="emailHelp" 
                                            placeholder="Enter email"
                                            onChange = { ({target}) => registerEmail({email: target.value}) }
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
                                            onChange = { ({target}) => registerPassword({password: target.value}) }
                                            />
                                    </div>
                                    { registered && !emailTaken ? <div className="alert alert-success" role="alert"> Thanks for signing up! </div> : '' }
                                    { emailTaken  ? <div className="alert alert-danger" role="alert"> Email is already taken </div> : '' }
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
    const { anotherReducer, userReducer, registerReducer } = state
    return { anotherReducer, userReducer, registerReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(registerContainer)
