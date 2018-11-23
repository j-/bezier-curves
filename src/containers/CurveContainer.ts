import { connect } from 'react-redux';
import CurveContainer from '../components/CurveContainer';

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
	hoverControlPoint1,
	hoverControlPoint2,
	removeHoverControlPoint,
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
	setControlPoint1: (x: number, y: number) => void;
	setControlPoint2: (x: number, y: number) => void;
	hoverControlPoint1: () => void;
	hoverControlPoint2: () => void;
	removeHoverControlPoint: () => void;
}

const mapDispatchToProps: DispatchProps = ({
	setControlPoint1,
	setControlPoint2,
	hoverControlPoint1,
	hoverControlPoint2,
	removeHoverControlPoint,
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CurveContainer);
