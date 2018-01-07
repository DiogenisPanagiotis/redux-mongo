import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import App from './containers/App'
import getContainer from './containers/getContainer'
import postContainer from './containers/postContainer'
import putContainer from './containers/putContainer'
import deleteContainer from './containers/deleteContainer'
import homeContainer from './containers/homeContainer'
import loginContainer from './containers/loginContainer'
import registerContainer from './containers/registerContainer'

render(
    <Provider store={store}>
        <BrowserRouter>
        	<div>
	            <Route path="/" component={App}/>
	            <Route exact path="/" component={homeContainer}/>
	            <Route path="/get" component={getContainer}/>
	            <Route path="/post" component={postContainer}/>
	            <Route path="/put" component={putContainer}/>
                <Route path="/delete" component={deleteContainer}/>
                <Route path="/register" component={registerContainer}/>
	            <Route path="/login" component={loginContainer}/>
        	</div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
)