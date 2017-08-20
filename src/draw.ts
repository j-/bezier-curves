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
): void {
	const stepsMajor = 10;
	const stepsMinor = stepsMajor * 2;
	ctx.save();
	ctx.translate(0.5, 0.5);
	// Minor style
	ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
	// Minor horizontal
	ctx.beginPath();
	drawLinesHorizontal(ctx, x, y, size, stepsMinor);
	ctx.stroke();
	// Minor vertical
	ctx.beginPath();
	drawLinesVertical(ctx, x, y, size, stepsMinor);
	ctx.stroke();
	// Major style
	ctx.strokeStyle = 'rgba(0, 0, 0, 0.3)';
	// Major horizontal
	ctx.beginPath();
	drawLinesHorizontal(ctx, x, y, size, stepsMajor);
	ctx.stroke();
	// Major vertical
	ctx.beginPath();
	drawLinesVertical(ctx, x, y, size, stepsMajor);
	ctx.stroke();
	ctx.restore();
}
