import * as React from 'react';
import { drawGrid } from '../draw';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
}

export default class Grid extends React.Component<Props> {
	private canvasContainer: HTMLElement;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor (props: Props) {
		super(props);
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	componentDidMount () {
		this.drawGrid();
		this.canvasContainer.appendChild(this.canvas);
	}

	componentDidUpdate () {
		this.drawGrid();
	}

	render () {
		const { size, ...props } = this.props;
		return (
			<div
				className="Grid"
				style={{ width: size + 1, height: size + 1 }}
				ref={this.setCanvasContainerRef}
				{...props}
			/>
		);
	}

	private setCanvasContainerRef = (el: HTMLElement | null) => (
		this.canvasContainer = el as HTMLElement
	)

	private drawGrid = () => {
		const offset = 0;
		const { size } = this.props;
		this.canvas.width = size + 1;
		this.canvas.height = size + 1;
		// Minor grid lines
		this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';
		drawGrid(this.ctx, offset, offset, size, 20);
		// Major grid lines
		this.ctx.strokeStyle = 'rgba(0, 0, 0, 0.15)';
		drawGrid(this.ctx, offset, offset, size, 10);
	}
}
