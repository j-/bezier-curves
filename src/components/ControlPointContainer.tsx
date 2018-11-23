import * as React from 'react';
import ControlPoint from './ControlPoint';
import DragHandle from './DragHandle';
import './ControlPointContainer.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	x: number;
	y: number;
	updateControlPoint: (deltaX: number, deltaY: number) => void;
	mouseoverControlPoint: () => void;
	mouseoutControlPoint: () => void;
	dragstartControlPoint: () => void;
	dragendControlPoint: () => void;
}

export default class ControlPointContainer extends React.Component<Props> {
	private startX: number;
	private startY: number;

	render () {
		const {
			size, x, y,
			updateControlPoint,
			mouseoverControlPoint,
			mouseoutControlPoint,
			dragstartControlPoint,
			dragendControlPoint,
			...props
		} = this.props;
		return (
			<div className="ControlPointContainer" {...props}>
				<DragHandle
					className="ControlPointContainer-drag-handle"
					style={{ left: size * x, top: size * (1 - y) }}
					onDragStart={this.handleDragStart}
					onDragEnd={this.handleDragEnd}
					onDragCancel={this.handleDragCancel}
					onChangeDelta={this.handleChangeDelta}
					onMouseOver={mouseoverControlPoint}
					onMouseOut={mouseoutControlPoint}
				>
					<ControlPoint
						onKeyDown={this.handleKeyDown}
					/>
				</DragHandle>
			</div>
		);
	}

	private handleDragStart = () => {
		this.startX = this.props.x;
		this.startY = this.props.y;
		this.props.dragstartControlPoint();
	}

	private handleDragEnd = () => {
		delete this.startX;
		delete this.startY;
		this.props.dragendControlPoint();
	}

	private handleDragCancel = () => {
		const { updateControlPoint } = this.props;
		updateControlPoint(
			this.startX,
			this.startY,
		);
		this.props.dragendControlPoint();
	}

	private handleChangeDelta = (deltaX: number, deltaY: number) => {
		const { size, updateControlPoint } = this.props;
		updateControlPoint(
			this.startX + deltaX / size,
			this.startY + -deltaY / size,
		);
	}

	private handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		const { x, y, updateControlPoint } = this.props;
		const amount = (
			e.getModifierState('Shift') ? 1 :
			e.getModifierState('Alt') ? 0.01 :
			0.1
		);
		switch (e.key) {
			case 'ArrowUp':
				e.preventDefault();
				updateControlPoint(x, y + amount);
				return;
			case 'ArrowDown':
				e.preventDefault();
				updateControlPoint(x, y - amount);
				return;
			case 'ArrowLeft':
				e.preventDefault();
				updateControlPoint(x - amount, y);
				return;
			case 'ArrowRight':
				e.preventDefault();
				updateControlPoint(x + amount, y);
				return;
			default:
				// Ignore
		}
	}
}
