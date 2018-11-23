import { connect, MapDispatchToProps } from 'react-redux';
import PresetButton, { Props as P } from '../components/PresetButton';
import { setControlPointsPresetEaseIn } from '../store/actions';

const mapDispatchToProps: MapDispatchToProps<P, P> = {
	onClick: setControlPointsPresetEaseIn,
};

export default connect(
	null,
	mapDispatchToProps,
)(PresetButton);
