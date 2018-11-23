import { combineReducers } from 'redux';
import * as controlPoints from './reducer-control-points';
import * as highlightControlPoint from './reducer-highlight-control-point';

export interface RootReducerState {
	controlPoints: controlPoints.ReducerState;
	highlightControlPoint: highlightControlPoint.ReducerState;
}

export default combineReducers({
	controlPoints: controlPoints.default,
	highlightControlPoint: highlightControlPoint.default,
});

export const getCp1x = (state: RootReducerState): number => (
	controlPoints.getCp1x(state.controlPoints)
);

export const getCp1y = (state: RootReducerState): number => (
	controlPoints.getCp1y(state.controlPoints)
);

export const getCp2x = (state: RootReducerState): number => (
	controlPoints.getCp2x(state.controlPoints)
);

export const getCp2y = (state: RootReducerState): number => (
	controlPoints.getCp2y(state.controlPoints)
);

export const getTimingFunction = (state: RootReducerState) => (
	controlPoints.getTimingFunction(state.controlPoints)
);

export const isHighlightControlPoint1 = (state: RootReducerState) => (
	highlightControlPoint.isHighlightControlPoint1(state.highlightControlPoint)
);

export const isHighlightControlPoint2 = (state: RootReducerState) => (
	highlightControlPoint.isHighlightControlPoint2(state.highlightControlPoint)
);

export const isHighlightControlPointAny = (state: RootReducerState) => (
	highlightControlPoint.isHighlightControlPointAny(state.highlightControlPoint)
);
