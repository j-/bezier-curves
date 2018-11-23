import * as React from 'react';
import CurveContainer from '../containers/CurveContainer';
import ControlPointValues from '../containers/ControlPointValues';
import CssTimingFunction from '../containers/CssTimingFunction';
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
			<div className="App-timing-function mt-3 mb-3 form-group">
				<label htmlFor="App-timing-function-input">CSS timing function</label>
				<CssTimingFunction id="App-timing-function-input" />
			</div>
		</div>

		<div className="App-presets mt-5 mb-5">
			<Presets />
		</div>
	</div>
);

export default App;
