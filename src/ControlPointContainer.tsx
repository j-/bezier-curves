import * as React from 'react';
import ControlPoint from './ControlPoint';
import './ControlPointContainer.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	x: number;
	y: number;
}

export default class ControlPointContainer extends React.Component<Props> {
	render () {
		const { size, x, y, ...props } = this.props;
		return (
			<div className="ControlPointContainer" {...props}>
				<ControlPoint style={{ left: size * x, top: size * (1 - y) }} />
			</div>
		);
	}
}
