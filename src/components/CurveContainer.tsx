import * as React from 'react';
import Grid from './Grid';
import Curve from './Curve';
import Guide from './Guide';
import ControlPointContainer from './ControlPointContainer';
import './CurveContainer.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	size: number;
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
	setControlPoint1: (x: number, y: number) => void;
	setControlPoint2: (x: number, y: number) => void;
}

export default class CurveContainer extends React.Component<Props> {
	render () {
		const { size, cp1x, cp1y, cp2x, cp2y, setControlPoint1, setControlPoint2, ...props } = this.props;
		const offset = 200;
		return (
			<div className="CurveContainer" style={{ width: size + 1, height: size + 1 }} {...props}>
				<Grid size={size} />
				<Guide size={size} offset={offset} cp1x={cp1x} cp1y={cp1y} cp2x={cp2x} cp2y={cp2y} />
				<Curve size={size} offset={offset} cp1x={cp1x} cp1y={cp1y} cp2x={cp2x} cp2y={cp2y} />
				<ControlPointContainer size={size} x={cp1x} y={cp1y} updateControlPoint={setControlPoint1} />
				<ControlPointContainer size={size} x={cp2x} y={cp2y} updateControlPoint={setControlPoint2} />
			</div>
		);
	}
}
