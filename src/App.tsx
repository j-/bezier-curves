import * as React from 'react';
import { drawGrid, drawCurve } from './draw';
import './App.css';

const logo = require('./logo.svg');

const offset = 100;
const size = 800;
const cp1x = 0.5;
const cp1y = 0;
const cp2x = 0.5;
const cp2y = 1;
const canvas = document.createElement('canvas');
canvas.width = offset * 2 + size + 1;
canvas.height = offset * 2 + size + 1;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
drawGrid(ctx, offset, offset, size, 20);
ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
drawGrid(ctx, offset, offset, size, 10);
ctx.strokeStyle = '#09c';
ctx.lineWidth = 2;
drawCurve(ctx, offset, offset, size, cp1x, cp1y, cp2x, cp2y);

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
