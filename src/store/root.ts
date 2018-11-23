import { combineReducers } from 'redux';
import * as controlPoints from './reducer-control-points';

export interface RootReducerState {
	controlPoints: controlPoints.ReducerState;
}

export default combineReducers({
	controlPoints: controlPoints.default,
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
