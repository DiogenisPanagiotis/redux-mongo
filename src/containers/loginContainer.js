import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class loginContainer extends Component {

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    verifyUser() {
        const { getUsers, setInvalidLogin } = this.props.actions
        let { email, password, invalid } = this.props.loginReducer
        let { users } = this.props.userReducer
        let { localStorage } = window

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === email && userModel.password === password) {
                    let userCookie = JSON.stringify({ email: userModel.username })
                    localStorage.setItem('user', userCookie)
                    if (invalid === true) {
                        setInvalidLogin()
                    }   
                    getUsers()
                    return
                }
            }
        }
        
        setInvalidLogin()
    }

    logout() {
        let { localStorage } = window
        let { loginEmail, loginPassword } = this.props.actions
        localStorage.removeItem('user')
        loginEmail({ email: ''})
        loginPassword({ password: ''})
    }

    render() {
        let { email, password, invalid } = this.props.loginReducer
        let { loginEmail, loginPassword } = this.props.actions
        let { localStorage } = window
        console.log('render ', localStorage)
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
                        <div className='jumbotron'>
                            <div className="card">
                              <div className="card-body">
                                <h5 className="card-title">Login</h5>

                                  <div className="form-group">
                                    <label htmlFor="exampleInputEmail2">Email address</label>
                                    <input 
                                        autoFocus
                                        value={email} 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail2" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        onChange = { ({target}) => loginEmail({email: target.value}) }
                                        />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="exampleInputPassword2">Password</label>
                                    <input 
                                        value={password} 
                                        type="password" 
                                        className="form-control" 
                                        id="exampleInputPassword2" 
                                        placeholder="Password"
                                        onChange = { ({target}) => loginPassword({password: target.value}) }
                                        />
                                  </div>
                                  { localStorage.user ? <div className="alert alert-primary" role="alert"> Welcome {JSON.parse(localStorage.getItem('user')).email} </div> : ''}
                                  { invalid && !localStorage.user ? <div className="alert alert-danger" role="alert"> Invalid username or password </div> : ''}
                                  {
                                    localStorage.user ?
                                    <button onClick={() => this.logout()} type="submit" className="btn btn-danger">Logout</button>
                                    :
                                    <button onClick={() => this.verifyUser()} type="submit" className="btn btn-primary">Login</button>
                                  }
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
    const { userReducer, loginReducer } = state
    return { userReducer, loginReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer)
