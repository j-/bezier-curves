import { connect, MapDispatchToProps } from 'react-redux';
import PresetButton, { Props as P } from '../components/PresetButton';
import { setControlPointsPresetEase } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = {
	onClick: setControlPointsPresetEase,
};

export default connect(
	null,
	mapDispatchToProps,
)(PresetButton);
