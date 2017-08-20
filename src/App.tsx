import * as React from 'react';
import CurveContainer from './CurveContainer';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-canvas-container">
					<CurveContainer size={1000} cp1x={0.5} cp1y={0} cp2x={0.5} cp2y={1} />
				</div>
			</div>
		);
	}
}

export default App;
