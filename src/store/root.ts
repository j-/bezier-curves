import { combineReducers } from 'redux';
import * as controlPoints from './control-points';

export interface ReducerState {
	controlPoints: controlPoints.ReducerState;
}

export default combineReducers({
	controlPoints: controlPoints.default,
});

export const getCp1x = (state: ReducerState): number => (
	controlPoints.getCp1x(state.controlPoints)
);

export const getCp1y = (state: ReducerState): number => (
	controlPoints.getCp1y(state.controlPoints)
);

export const getCp2x = (state: ReducerState): number => (
	controlPoints.getCp2x(state.controlPoints)
);

export const getCp2y = (state: ReducerState): number => (
	controlPoints.getCp2y(state.controlPoints)
);
