import * as React from 'react';
import { drawGrid } from './draw';
import './App.css';

const logo = require('./logo.svg');

const canvas = document.createElement('canvas');
canvas.width = 1001;
canvas.height = 1001;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
drawGrid(ctx, 0, 0, 1000, 20);
ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
drawGrid(ctx, 0, 0, 1000, 10);

class App extends React.Component {
	private canvasContainer: HTMLElement;

	componentDidMount () {
		this.canvasContainer.appendChild(canvas);
	}

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
				<div
					className="App-canvas-container"
					ref={this.setCanvasContainerRef}
				/>
			</div>
		);
	}

	private setCanvasContainerRef = (el: HTMLElement | null) => (
		this.canvasContainer = el as HTMLElement
	)
}

export default App;
