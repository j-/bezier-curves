import { connect } from 'react-redux';
import ControlPointValues from '../components/ControlPointValues';

import {
	RootReducerState,
	getCp1x,
	getCp1y,
	getCp2x,
	getCp2y,
} from '../store';

import {
	setControlPoint1,
	setControlPoint2,
} from '../store/actions';

interface StateProps {
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
	cp1x: getCp1x(state),
	cp1y: getCp1y(state),
	cp2x: getCp2x(state),
	cp2y: getCp2y(state),
});

interface DispatchProps {
	setCp1: (x: number, y: number) => void;
	setCp2: (x: number, y: number) => void;
}

const mapDispatchToProps: DispatchProps = ({
	setCp1: setControlPoint1,
	setCp2: setControlPoint2,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ControlPointValues);
