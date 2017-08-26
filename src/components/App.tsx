import * as React from 'react';
import CurveContainer from '../containers/CurveContainer';
import ControlPointValues from '../containers/ControlPointValues';
import Presets from '../containers/Presets';
import './App.css';

export default class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-canvas-container">
					<CurveContainer size={400} />
				</div>
				<div className="App-control-point-values">
					<ControlPointValues />
				</div>
				<div className="App-presets">
					<Presets />
				</div>
			</div>
		);
	}
}
