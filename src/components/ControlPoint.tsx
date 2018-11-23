import * as React from 'react';
import './ControlPoint.css';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

const ControlPoint: React.StatelessComponent<Props> = (props) => (
	<button
		className="ControlPoint"
		{...props}
	/>
);

export default ControlPoint;
