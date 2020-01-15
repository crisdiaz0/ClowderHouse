import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { LandingPage } from './Components/Pages/LandingPage/LandingPage';
import './App.css';

export const history = createBrowserHistory();

const App: React.FC = () => {
	return (
		<Router history={history}>
			<Switch>
				<Route path="/" exact component={LandingPage} />
			</Switch>
		</Router>
	);
};

export default App;
