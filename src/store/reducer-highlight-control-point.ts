import { Reducer } from 'redux';
import { isActionHoverControlPoint } from './actions';

export interface ReducerState {
	hovered: 1 | 2 | null;
}

const DEFAULT_STATE: ReducerState = {
	hovered: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionHoverControlPoint(action)) {
		return {
			...state,
			hovered: action.payload.controlPoint,
		};
	}

	return state;
};

export default reducer;

export const isHighlightControlPoint1 = (state: ReducerState) => (
	state.hovered === 1
);

export const isHighlightControlPoint2 = (state: ReducerState) => (
	state.hovered === 2
);

export const isHighlightControlPointAny = (state: ReducerState) => (
	state.hovered !== null
);
