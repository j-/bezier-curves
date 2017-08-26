import { Action } from 'redux';

export interface ActionSetControlPoint1 extends Action {
	type: 'SetControlPoint1';
	payload: {
		x: number;
		y: number;
	};
}

export const isActionSetControlPoint1 = (action: Action): action is ActionSetControlPoint1 => (
	action.type === 'SetControlPoint1'
);

export const setControlPoint1 = (x: number, y: number): ActionSetControlPoint1 => ({
	type: 'SetControlPoint1',
	payload: {
		x,
		y,
	},
});

export interface ActionSetControlPoint2 extends Action {
	type: 'SetControlPoint2';
	payload: {
		x: number;
		y: number;
	};
}

export const isActionSetControlPoint2 = (action: Action): action is ActionSetControlPoint2 => (
	action.type === 'SetControlPoint2'
);

export const setControlPoint2 = (x: number, y: number): ActionSetControlPoint2 => ({
	type: 'SetControlPoint2',
	payload: {
		x,
		y,
	},
});
