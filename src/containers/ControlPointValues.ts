import { connect } from 'react-redux';
import ControlPointValues from '../components/ControlPointValues';

import {
	RootReducerState,
	getCp1x,
	getCp1y,
	getCp2x,
	getCp2y,
	isHighlightControlPoint1,
	isHighlightControlPoint2,
} from '../store';

import {
	setControlPoint1,
	setControlPoint2,
} from '../store/actions';

interface StateProps {
	cp1x: number;
	cp1y: number;
	cp1highlight: boolean;
	cp2x: number;
	cp2y: number;
	cp2highlight: boolean;
}

const mapStateToProps = (state: RootReducerState): StateProps => ({
	cp1x: getCp1x(state),
	cp1y: getCp1y(state),
	cp1highlight: isHighlightControlPoint1(state),
	cp2x: getCp2x(state),
	cp2y: getCp2y(state),
	cp2highlight: isHighlightControlPoint2(state),
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
