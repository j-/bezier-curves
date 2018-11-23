import * as React from 'react';
import PresetButtonLinear from '../containers/PresetButtonLinear';
import PresetButtonEase from '../containers/PresetButtonEase';
import PresetButtonEaseIn from '../containers/PresetButtonEaseIn';
import PresetButtonEaseInOut from '../containers/PresetButtonEaseInOut';
import PresetButtonEaseOut from '../containers/PresetButtonEaseOut';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

}

const Presets: React.StatelessComponent<Props> = (props) => (
	<div className="Presets" {...props}>
		<h2>Presets</h2>

		<PresetButtonLinear>
			linear
		</PresetButtonLinear>

		&nbsp;

		<PresetButtonEase>
			ease
		</PresetButtonEase>

		&nbsp;

		<PresetButtonEaseIn>
			ease-in
		</PresetButtonEaseIn>

		&nbsp;

		<PresetButtonEaseInOut>
			ease-in-out
		</PresetButtonEaseInOut>

		&nbsp;

		<PresetButtonEaseOut>
			ease-out
		</PresetButtonEaseOut>
	</div>
);

export default Presets;
