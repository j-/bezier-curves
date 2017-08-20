import * as React from 'react';
import './ControlPoint.css';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {

}

export default class ControlPoint extends React.Component<Props> {
	render () {
		const { ...props } = this.props;
		return (
			<button
				className="ControlPoint"
				{...props}
			/>
		);
	}
}
