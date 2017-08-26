import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	onChangeDelta?: (deltaX: number, deltaY: number) => void;
	onDragCancel?: () => void;
	onDragStart?: () => void;
	onDragEnd?: () => void;
}

export default class DragHandle extends React.Component<Props> {
	private originalClientX: number;
	private originalClientY: number;

	render () {
		const { onChangeDelta, onDragStart, onDragEnd, onDragCancel, ...props } = this.props;
		return (
			<div
				{...props}
				onMouseDown={this.handleMouseDown}
			/>
		);
	}

	private handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		this.originalClientX = e.clientX;
		this.originalClientY = e.clientY;
		this.startDrag();
	}

	private handleMouseMove = (e: MouseEvent) => {
		if (this.props.onChangeDelta) {
			this.props.onChangeDelta(
				e.clientX - this.originalClientX,
				e.clientY - this.originalClientY,
			);
		}
	}

	private handleMouseUp = (e: MouseEvent) => {
		this.endDrag();
	}

	private handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			this.cancelDrag();
		}
	}

	private bindHandlers () {
		window.addEventListener('mousemove', this.handleMouseMove);
		window.addEventListener('mouseup', this.handleMouseUp);
		window.addEventListener('keydown', this.handleKeyDown);
	}

	private unbindHandlers () {
		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseup', this.handleMouseUp);
		window.removeEventListener('keydown', this.handleKeyDown);
	}

	private startDrag () {
		this.bindHandlers();
		if (this.props.onDragStart) {
			this.props.onDragStart();
		}
	}

	private endDrag () {
		this.unbindHandlers();
		if (this.props.onDragEnd) {
			this.props.onDragEnd();
		}
	}

	private cancelDrag () {
		this.unbindHandlers();
		if (this.props.onDragCancel) {
			this.props.onDragCancel();
		}
	}
}
