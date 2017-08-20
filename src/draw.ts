function drawLinesHorizontal (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	size: number,
	steps: number,
): void {
	const stepSize = size / steps;
	for (var i = 0; i < steps + 1; i++) {
		const offset = i * stepSize;
		ctx.moveTo(x, y + offset);
		ctx.lineTo(x + size, y + offset);
	}
}

function drawLinesVertical (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	size: number,
	steps: number,
): void {
	const stepSize = size / steps;
	for (var i = 0; i < steps + 1; i++) {
		const offset = i * stepSize;
		ctx.moveTo(x + offset, y);
		ctx.lineTo(x + offset, y + size);
	}
}

export function drawGrid (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	size: number,
	steps: number,
): void {
	ctx.save();
	ctx.translate(0.5, 0.5);
	ctx.beginPath();
	drawLinesHorizontal(ctx, x, y, size, steps);
	drawLinesVertical(ctx, x, y, size, steps);
	ctx.stroke();
	ctx.restore();
}

export function drawCurve (
	ctx: CanvasRenderingContext2D,
	x: number,
	y: number,
	size: number,
	cp1x: number,
	cp1y: number,
	cp2x: number,
	cp2y: number,
): void {
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(x, y + size);
	ctx.bezierCurveTo(
		x + cp1x * size,
		y + (1 - cp1y) * size,
		x + cp2x * size,
		y + (1 - cp2y) * size,
		x + size,
		y,
	);
	ctx.stroke();
	ctx.restore();
}
