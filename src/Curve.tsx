import * as React from 'react';
import { drawCurve } from './draw';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
}

class Curve extends React.Component<Props> {
	private canvasContainer: HTMLElement;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor (props: Props) {
		super(props);
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	componentDidMount () {
		this.drawCurve();
		this.canvasContainer.appendChild(this.canvas);
	}

	componentDidUpdate () {
		this.drawCurve();
	}

	render () {
		const { size, cp1x, cp1y, cp2x, cp2y, ...props } = this.props;
		return (
			<div
				className="Curve"
				style={{ width: size + 1, height: size + 1 }}
				ref={this.setCanvasContainerRef}
				{...props}
			/>
		);
	}

	private setCanvasContainerRef = (el: HTMLElement | null) => (
		this.canvasContainer = el as HTMLElement
	)

	private drawCurve = () => {
		const offset = 0;
		const { size, cp1x, cp1y, cp2x, cp2y } = this.props;
		this.canvas.width = size + 1;
		this.canvas.height = size + 1;
		this.ctx.strokeStyle = '#09c';
		this.ctx.lineWidth = 2;
		drawCurve(this.ctx, offset, offset, size, cp1x, cp1y, cp2x, cp2y);
	}
}

export default Curve;
