import { connect, MapStateToProps } from 'react-redux';
import Input, { Props as P } from '../components/Input';
import { RootReducerState, getTimingFunction } from '../store';

const mapStateToProps: MapStateToProps<P, P, RootReducerState> = (state) => ({
	className: 'form-control',
	readOnly: true,
	value: getTimingFunction(state),
});

export default connect(
	mapStateToProps,
)(Input);
