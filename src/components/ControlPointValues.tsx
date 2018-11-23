import * as React from 'react';
import './ControlPointValues.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
	setCp1: (x: number, y: number) => void;
	setCp2: (x: number, y: number) => void;
}

export default class ControlPointValues extends React.Component<Props> {
	render () {
		const {
			cp1x,
			cp1y,
			cp2x,
			cp2y,
			setCp1,
			setCp2,
			...props,
		} = this.props;

		return (
			<div className="ControlPointValues" {...props}>
				<div className="ControlPointValues-config form-group row">
					<label
						className="ControlPointValues-config-label"
						htmlFor="ControlPointValues-cp1x"
					>
						CP1 x
					</label>
					<input
						id="ControlPointValues-cp1x"
						className="ControlPointValues-config-value form-control"
						type="number"
						value={cp1x}
						onChange={this.handleChangeCp1x}
						step={0.1}
						min={0}
						max={1}
					/>
				</div>
				<div className="ControlPointValues-config form-group row">
					<label
						className="ControlPointValues-config-label"
						htmlFor="ControlPointValues-cp1y"
					>
						CP1 y
					</label>
					<input
						id="ControlPointValues-cp1y"
						className="ControlPointValues-config-value form-control"
						type="number"
						value={cp1y}
						onChange={this.handleChangeCp1y}
						step={0.1}
					/>
				</div>
				<div className="ControlPointValues-config form-group row">
					<label
						className="ControlPointValues-config-label"
						htmlFor="ControlPointValues-cp2x"
					>
						CP2 x
					</label>
					<input
						id="ControlPointValues-cp2x"
						className="ControlPointValues-config-value form-control"
						type="number"
						value={cp2x}
						onChange={this.handleChangeCp2x}
						step={0.1}
						min={0}
						max={1}
					/>
				</div>
				<div className="ControlPointValues-config form-group row">
					<label
						className="ControlPointValues-config-label"
						htmlFor="ControlPointValues-cp2y"
					>
						CP2 y
					</label>
					<input
						id="ControlPointValues-cp2y"
						className="ControlPointValues-config-value form-control"
						type="number"
						value={cp2y}
						onChange={this.handleChangeCp2y}
						step={0.1}
					/>
				</div>
			</div>
		);
	}

	private handleChangeCp1x = (e: React.ChangeEvent<HTMLInputElement>) => (
		this.props.setCp1(
			Number(e.currentTarget.value),
			this.props.cp1y,
		)
	)

	private handleChangeCp1y = (e: React.ChangeEvent<HTMLInputElement>) => (
		this.props.setCp1(
			this.props.cp1x,
			Number(e.currentTarget.value),
		)
	)

	private handleChangeCp2x = (e: React.ChangeEvent<HTMLInputElement>) => (
		this.props.setCp2(
			Number(e.currentTarget.value),
			this.props.cp2y,
		)
	)

	private handleChangeCp2y = (e: React.ChangeEvent<HTMLInputElement>) => (
		this.props.setCp2(
			this.props.cp2x,
			Number(e.currentTarget.value),
		)
	)
}
