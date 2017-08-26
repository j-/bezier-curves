import { connect } from 'react-redux';
import CurveContainer from '../components/CurveContainer';

import {
	ReducerState,
	getCp1x,
	getCp1y,
	getCp2x,
	getCp2y,
} from '../store/root';

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

}

const mapDispatchToProps: DispatchProps = ({

});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(CurveContainer);
