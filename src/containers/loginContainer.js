import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions/actions'
import '../Style.css'

class loginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            verified: false,
            verifiedUser: '',
            invalid: false
        }
    }

    componentDidMount() {
        const { getUsers } = this.props.actions
        getUsers()        
    }

    verifyUser() {
        const { addUser, getUsers } = this.props.actions
        let { username, password, verified, invalid } = this.state
        let { users } = this.props.userReducer

        getUsers()

        if (users && users.length > 0) {
            for (let userModel of users) {
                if (userModel.username === username && userModel.password === password) {
                    this.setState({ verified: true })
                    this.setState({ verifiedUser: userModel.username })
                    if (invalid === true) {
                        this.setState({ invalid: false })
                    }   
                    getUsers()
                    return
                }
            }

        }
        
        this.setState({ invalid: true })
        getUsers()
    }

    logout() {
        this.setState({ verified: false })
    }

    render() {
        let { username, password, verified, verifiedUser, invalid } = this.state
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
                                        value={username} 
                                        type="email" 
                                        className="form-control" 
                                        id="exampleInputEmail2" 
                                        aria-describedby="emailHelp" 
                                        placeholder="Enter email"
                                        onChange = { ({target}) => this.setState({username: target.value}) }
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
                                        onChange = { ({target}) => this.setState({password: target.value}) }
                                        />
                                  </div>
                                  { verified ? <div className="alert alert-primary" role="alert"> Welcome {verifiedUser} </div> : ''}
                                  { invalid && !verified ? <div className="alert alert-danger" role="alert"> Invalid username or password </div> : ''}
                                  {
                                    !verified?
                                    <button onClick={() => this.verifyUser()} type="submit" className="btn btn-primary">Login</button>
                                    :
                                    <button onClick={() => this.logout()} type="submit" className="btn btn-danger">Logout</button>
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
    const { userReducer } = state
    return { userReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...actions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginContainer)
