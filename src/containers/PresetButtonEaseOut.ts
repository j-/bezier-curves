import { connect, MapDispatchToProps } from 'react-redux';
import PresetButton, { Props as P } from '../components/PresetButton';
import { setControlPointsPresetEaseOut } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = {
	onClick: setControlPointsPresetEaseOut,
};

export default connect(
	null,
	mapDispatchToProps,
)(PresetButton);
