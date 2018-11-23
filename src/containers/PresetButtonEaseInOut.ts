import { connect, MapDispatchToProps } from 'react-redux';
import PresetButton, { Props as P } from '../components/PresetButton';
import { setControlPointsPresetEaseInOut } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = {
	onClick: setControlPointsPresetEaseInOut,
};

export default connect(
	null,
	mapDispatchToProps,
)(PresetButton);
