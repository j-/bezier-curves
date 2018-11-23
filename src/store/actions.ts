import { Action } from 'redux';

/* Set control point 1 */

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

/* Set control point 2 */

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

/* Set control points */

export interface ActionSetControlPoints extends Action {
	type: 'SetControlPoints';
	payload: {
		cp1x: number;
		cp1y: number;
		cp2x: number;
		cp2y: number;
	};
}

export const isActionSetControlPoints = (action: Action): action is ActionSetControlPoints => (
	action.type === 'SetControlPoints'
);

export const setControlPoints = (cp1x: number, cp1y: number, cp2x: number, cp2y: number): ActionSetControlPoints => ({
	type: 'SetControlPoints',
	payload: {
		cp1x,
		cp1y,
		cp2x,
		cp2y,
	},
});

/* Highlight control point */

export interface ActionHoverControlPoint extends Action {
	type: 'HoverControlPoint';
	payload: {
		controlPoint: 1 | 2 | null;
	};
}

export const isActionHoverControlPoint = (action: Action): action is ActionHoverControlPoint => (
	action.type === 'HoverControlPoint'
);

export const hoverControlPoint = (controlPoint: 1 | 2): ActionHoverControlPoint => ({
	type: 'HoverControlPoint',
	payload: {
		controlPoint,
	},
});

export const hoverControlPoint1 = () => hoverControlPoint(1);
export const hoverControlPoint2 = () => hoverControlPoint(2);

export const removeHoverControlPoint = (): ActionHoverControlPoint => ({
	type: 'HoverControlPoint',
	payload: {
		controlPoint: null,
	},
});
