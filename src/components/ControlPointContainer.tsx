import * as React from 'react';
import ControlPoint from './ControlPoint';
import DragHandle from './DragHandle';
import './ControlPointContainer.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	x: number;
	y: number;
	updateControlPoint: (deltaX: number, deltaY: number) => void;
}

export default class ControlPointContainer extends React.Component<Props> {
	private startX: number;
	private startY: number;

	render () {
		const { size, x, y, updateControlPoint, ...props } = this.props;
		return (
			<div className="ControlPointContainer" {...props}>
				<DragHandle
					className="ControlPointContainer-drag-handle"
					style={{ left: size * x, top: size * (1 - y) }}
					onDragStart={this.handleDragStart}
					onDragEnd={this.handleDragEnd}
					onDragCancel={this.handleDragCancel}
					onChangeDelta={this.handleChangeDelta}
				>
					<ControlPoint />
				</DragHandle>
			</div>
		);
	}

	private handleDragStart = () => {
		this.startX = this.props.x;
		this.startY = this.props.y;
	}

	private handleDragEnd = () => {
		delete this.startX;
		delete this.startY;
	}

	private handleDragCancel = () => {
		const { updateControlPoint } = this.props;
		updateControlPoint(
			this.startX,
			this.startY,
		);
	}

	private handleChangeDelta = (deltaX: number, deltaY: number) => {
		const { size, updateControlPoint } = this.props;
		updateControlPoint(
			this.startX + deltaX / size,
			this.startY + -deltaY / size,
		);
	}
}
