import { connect } from 'react-redux';
import Presets from '../components/Presets';

import {
	setControlPoints,
} from '../store/actions';

interface StateProps {

}

const mapStateToProps = (): StateProps => ({

});

interface DispatchProps {
	setControlPoints: (cp1x: number, cp1y: number, cp2x: number, cp2y: number) => void;
}

const mapDispatchToProps: DispatchProps = ({
	setControlPoints,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Presets);
