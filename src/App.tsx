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
				{/* <Route path="/login" exact component={LoginPage} />
				<Route path="/signup" exact component={SignUpPage} /> */}
				{/* <Route path="/homepage" exact component={withAuth(HomePage)} /> */}
			</Switch>
		</Router>
	);
};

export default App;
