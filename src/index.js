import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import IndexRoute from './components/IndexRoute';
import NavBar from './components/NavBar';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Route path='/' component={NavBar} />
					<Switch>
						<Route path='/page/:activePage' component={IndexRoute} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('app'));
