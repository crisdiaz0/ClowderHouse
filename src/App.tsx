import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import HomePage from './Components/Pages/HomePage/HomePage';

export const history = createBrowserHistory();

const App: React.FC = () => {
	return (
		<>
			<NavBar />
			<Router history={history}>
				<Switch>
					<Route path="/" children={HomePage} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
