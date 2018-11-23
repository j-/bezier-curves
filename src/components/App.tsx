import * as React from 'react';
import CurveContainer from '../containers/CurveContainer';
import ControlPointValues from '../containers/ControlPointValues';
import Presets from '../containers/Presets';
import './App.css';

const App: React.StatelessComponent = () => (
	<div className="App container mt-5 mb-5">
		<h1>B&eacute;zier Curves</h1>

		<div className="App-canvas-container mt-5 mb-5">
			<CurveContainer size={400} />
		</div>

		<div className="App-control-point-values mt-5 mb-5">
			<ControlPointValues />
		</div>

		<div className="App-presets mt-5 mb-5">
			<Presets />
		</div>
	</div>
);

export default App;
