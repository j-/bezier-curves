import { Reducer } from 'redux';
import { isActionHighlightControlPoint } from './actions';

export interface ReducerState {
	highlighted: 1 | 2 | null;
}

const DEFAULT_STATE: ReducerState = {
	highlighted: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionHighlightControlPoint(action)) {
		return {
			...state,
			highlighted: action.payload.controlPoint,
		};
	}

	return state;
};

export default reducer;

export const isHighlightControlPoint1 = (state: ReducerState) => (
	state.highlighted === 1
);

export const isHighlightControlPoint2 = (state: ReducerState) => (
	state.highlighted === 2
);

export const isHighlightControlPointAny = (state: ReducerState) => (
	state.highlighted !== null
);
