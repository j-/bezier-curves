import * as React from 'react';
import CurveContainer from '../containers/CurveContainer';
import './App.css';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="App-canvas-container">
					<CurveContainer size={1000} />
				</div>
			</div>
		);
	}
}

export default App;
