import * as React from 'react';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
	setControlPoints: (cp1x: number, cp1y: number, cp2x: number, cp2y: number) => void;
}

const Presets: React.StatelessComponent<Props> = ({ setControlPoints, ...props }) => (
	<div className="Presets" {...props}>
		<h2>Presets</h2>

		<button
			className="btn btn-light btn-lg"
			type="button"
			onClick={() => setControlPoints(0, 0, 1, 1)}
		>
			linear
		</button>

		&nbsp;

		<button
			className="btn btn-light btn-lg"
			type="button"
			onClick={() => setControlPoints(0.25, 0.1, 0.25, 1)}
		>
			ease
		</button>

		&nbsp;

		<button
			className="btn btn-light btn-lg"
			type="button"
			onClick={() => setControlPoints(0.42, 0, 1, 1)}
		>
			ease-in
		</button>

		&nbsp;

		<button
			className="btn btn-light btn-lg"
			type="button"
			onClick={() => setControlPoints(0.42, 0, 0.58, 1)}
		>
			ease-in-out
		</button>

		&nbsp;

		<button
			className="btn btn-light btn-lg"
			type="button"
			onClick={() => setControlPoints(0, 0, 0.58, 1)}
		>
			ease-out
		</button>
	</div>
);

export default Presets;
