import { Action } from 'redux';

import {
	isActionSetControlPoints,
	isActionSetControlPoint1,
	isActionSetControlPoint2,
} from './actions';

export interface ReducerState {
	cp1x: number;
	cp1y: number;
	cp2x: number;
	cp2y: number;
}

const DEFAULT_STATE: ReducerState = {
	cp1x: 0.5,
	cp1y: 0,
	cp2x: 0.5,
	cp2y: 1,
};

/** Restricts `value` to the range 0-1 */
const clamp = (value: number) => (
	Math.min(Math.max(value, 0), 1)
);

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	if (isActionSetControlPoints(action)) {
		return {
			...state,
			cp1x: clamp(action.payload.cp1x),
			cp1y: action.payload.cp1y,
			cp2x: clamp(action.payload.cp2x),
			cp2y: action.payload.cp2y,
		};
	}

	if (isActionSetControlPoint1(action)) {
		return {
			...state,
			cp1x: clamp(action.payload.x),
			cp1y: action.payload.y,
		};
	}

	if (isActionSetControlPoint2(action)) {
		return {
			...state,
			cp2x: clamp(action.payload.x),
			cp2y: action.payload.y,
		};
	}

	return state;
};

export const getCp1x = (state: ReducerState): number => state.cp1x;
export const getCp1y = (state: ReducerState): number => state.cp1y;
export const getCp2x = (state: ReducerState): number => state.cp2x;
export const getCp2y = (state: ReducerState): number => state.cp2y;
