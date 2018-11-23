import { Reducer } from 'redux';
import { isActionHoverControlPoint, isActionDragControlPoint } from './actions';

export interface ReducerState {
	hovered: 1 | 2 | null;
	dragged: 1 | 2 | null;
}

const DEFAULT_STATE: ReducerState = {
	hovered: null,
	dragged: null,
};

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionHoverControlPoint(action)) {
		return {
			...state,
			hovered: action.payload.controlPoint,
		};
	}

	if (isActionDragControlPoint(action)) {
		return {
			...state,
			dragged: action.payload.controlPoint,
		};
	}

	return state;
};

export default reducer;

export const isHighlightControlPoint1 = (state: ReducerState) => (
	state.hovered === 1 || state.dragged === 1
);

export const isHighlightControlPoint2 = (state: ReducerState) => (
	state.hovered === 2 || state.dragged === 2
);

export const isHighlightControlPointAny = (state: ReducerState) => (
	state.hovered !== null || state.dragged !== null
);
