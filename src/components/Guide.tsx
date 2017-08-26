import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	offset: number;
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
}

export default class Guide extends React.Component<Props> {
	private canvasContainer: HTMLElement;
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;

	constructor (props: Props) {
		super(props);
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;
	}

	componentDidMount () {
		this.drawGuide();
		this.canvasContainer.appendChild(this.canvas);
	}

	componentDidUpdate () {
		this.drawGuide();
	}

	render () {
		const { size, offset, cp1x, cp1y, cp2x, cp2y, ...props } = this.props;
		return (
			<div
				className="Guide"
				style={{ width: size + offset * 2, height: size + offset * 2 }}
				ref={this.setCanvasContainerRef}
				{...props}
			/>
		);
	}

	private setCanvasContainerRef = (el: HTMLElement | null) => (
		this.canvasContainer = el as HTMLElement
	)

	private drawGuide = () => {
		const { size, offset, cp1x, cp1y, cp2x, cp2y } = this.props;
		const { canvas, ctx } = this;
		canvas.width = size + offset * 2;
		canvas.height = size + offset * 2;
		ctx.save();
		ctx.translate(0.5, 0.5);
		ctx.beginPath();
		ctx.setLineDash([10, 5]);
		ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
		ctx.lineWidth = 2;
		ctx.moveTo(offset, offset + size);
		ctx.lineTo(offset + cp1x * size, offset + (1 - cp1y) * size);
		ctx.lineTo(offset + cp2x * size, offset + (1 - cp2y) * size);
		ctx.lineTo(offset + size, offset);
		ctx.stroke();
		ctx.restore();
	}
}
