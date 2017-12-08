import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom';

import Home from './pages/home';
import Header from './modules/header'
import Footer from './modules/footer'

import AppStore from 'stores/app';

class App extends React.Component{
	render(){
		return(
			<Router>
				<div>
					<Header/>
                 	<Switch>
				        <Route path="/" component={Home} />
			        </Switch>
					<Footer/>
				</div>
			</Router>
		);
	}
}

render(<App/>, document.getElementById('app'))