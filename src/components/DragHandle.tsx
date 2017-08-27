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
				onTouchStart={this.handleTouchStart}
			/>
		);
	}

	private handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		this.originalClientX = e.clientX;
		this.originalClientY = e.clientY;
		this.startDrag();
	}

	private handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
		e.preventDefault();
		this.originalClientX = e.touches[0].clientX;
		this.originalClientY = e.touches[0].clientY;
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

	private handleTouchMove = (e: TouchEvent) => {
		e.preventDefault();
		if (this.props.onChangeDelta) {
			this.props.onChangeDelta(
				e.touches[0].clientX - this.originalClientX,
				e.touches[0].clientY - this.originalClientY,
			);
		}
	}

	private handleMouseUp = (e: MouseEvent) => {
		this.endDrag();
	}

	private handleTouchEnd = (e: TouchEvent) => {
		this.endDrag();
	}

	private handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			this.cancelDrag();
		}
	}

	private handleTouchCancel = (e: TouchEvent) => {
		this.cancelDrag();
	}

	private bindHandlers () {
		window.addEventListener('mousemove', this.handleMouseMove);
		window.addEventListener('mouseup', this.handleMouseUp);
		window.addEventListener('keydown', this.handleKeyDown);
		window.addEventListener('touchmove', this.handleTouchMove);
		window.addEventListener('touchend', this.handleTouchEnd);
		window.addEventListener('touchcancel', this.handleTouchCancel);
	}

	private unbindHandlers () {
		window.removeEventListener('mousemove', this.handleMouseMove);
		window.removeEventListener('mouseup', this.handleMouseUp);
		window.removeEventListener('keydown', this.handleKeyDown);
		window.removeEventListener('touchmove', this.handleTouchMove);
		window.removeEventListener('touchend', this.handleTouchEnd);
		window.removeEventListener('touchcancel', this.handleTouchCancel);
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
