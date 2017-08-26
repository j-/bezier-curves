import { Action } from 'redux';

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

export default (state: ReducerState = DEFAULT_STATE, action: Action): ReducerState => {
	return state;
};

export const getCp1x = (state: ReducerState): number => state.cp1x;
export const getCp1y = (state: ReducerState): number => state.cp1y;
export const getCp2x = (state: ReducerState): number => state.cp2x;
export const getCp2y = (state: ReducerState): number => state.cp2y;
