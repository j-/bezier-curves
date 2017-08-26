import { connect } from 'react-redux';
import CurveContainer from '../components/CurveContainer';

import {
	ReducerState,
	getCp1x,
	getCp1y,
	getCp2x,
	getCp2y,
} from '../store/root';

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

const mapStateToProps = (state: ReducerState): StateProps => ({
	cp1x: getCp1x(state),
	cp1y: getCp1y(state),
	cp2x: getCp2x(state),
	cp2y: getCp2y(state),
});

interface DispatchProps {
	setControlPoint1: (x: number, y: number) => void;
	setControlPoint2: (x: number, y: number) => void;
}

const mapDispatchToProps: DispatchProps = ({
	setControlPoint1,
	setControlPoint2,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CurveContainer);
