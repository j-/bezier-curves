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
	// Horizontal
	ctx.beginPath();
	drawLinesHorizontal(ctx, x, y, size, steps);
	ctx.stroke();
	// Vertical
	ctx.beginPath();
	drawLinesVertical(ctx, x, y, size, steps);
	ctx.stroke();
	ctx.restore();
}
