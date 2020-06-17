import React, { useState } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import './App.css';
import GalleryPage from './Components/Pages/GalleryPage/GalleryPage';
import { NavBar } from './Components/NavBar/NavBar';
import { LandingPage } from './Components/Pages/LandingPage/LandingPage';

export const history = createBrowserHistory();

const App: React.FC = () => {
	const [hidden, setHidden] = useState(false);

	return (
		<>
			<div className={`donation-header ${hidden ? 'hidden' : ''}`}>
				<div
					className="donation-header-close"
					onClick={() => setHidden(true)}
				>
					&#10006;
				</div>
				<div className="donation-header-text">
					Kittens up for adoption!
				</div>
			</div>
			<NavBar />

			<Router history={history}>
				<Switch>
					<Route path="/" exact component={LandingPage} />
					<Route path="/gallery" exact component={GalleryPage} />
				</Switch>
			</Router>
		</>
	);
};

export default App;
