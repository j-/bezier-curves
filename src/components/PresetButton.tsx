import * as React from 'react';
import Button, { Props as ButtonProps } from './Button';

export interface Props extends ButtonProps {

}

const PresetButton: React.StatelessComponent<Props> = (props) => (
	<Button
		className="btn btn-light btn-lg"
		type="button"
		{...props}
	/>
);

export default PresetButton;
