import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import LandingPage from './components/LandingPage';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div className='route-container'>
					<Switch>
						<Route exact={true} path='/' component={LandingPage} />
						<Route path='/' component={NavBar} />
					</Switch>
					<Switch>
						<Route path='/page/:activePage' component={IndexRoute} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
