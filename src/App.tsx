import * as React from 'react';
import CurveContainer from './CurveContainer';
import './App.css';

const logo = require('./logo.svg');

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
				<div className="App-canvas-container">
					<CurveContainer size={1000} cp1x={0.5} cp1y={0} cp2x={0.5} cp2y={1} />
				</div>
			</div>
		);
	}
}

export default App;
