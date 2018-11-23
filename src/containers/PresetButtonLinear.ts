import { connect, MapDispatchToProps } from 'react-redux';
import PresetButton, { Props as P } from '../components/PresetButton';
import { setControlPointsPresetLinear } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = {
	onClick: setControlPointsPresetLinear,
};

export default connect(
	null,
	mapDispatchToProps,
)(PresetButton);
