import * as React from 'react';
import Grid from './Grid';
import Curve from './Curve';
import './CurveContainer.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
}

class CurveContainer extends React.Component<Props> {
	render () {
		const { size, cp1x, cp1y, cp2x, cp2y, ...props } = this.props;
		return (
			<div className="CurveContainer" style={{ width: size + 1, height: size + 1 }} {...props}>
				<Grid size={size} />
				<Curve size={size} cp1x={cp1x} cp1y={cp1y} cp2x={cp2x} cp2y={cp2y} />
			</div>
		);
	}
}

export default CurveContainer;
