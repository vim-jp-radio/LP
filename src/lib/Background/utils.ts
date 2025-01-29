const COLORS = ['#060748', '#29002E'] as const;

export function getRandomSpeed(minSpeed: number, maxSpeed: number): number {
	return Math.random() * (maxSpeed - minSpeed) + minSpeed;
}

export function getRandomColor(): string {
	return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export function getRandomRadius(): number {
	return Math.random() * 20 + 100;
}

export function checkCollision(
	circle1: { x: number; y: number; radius: number },
	circle2: { x: number; y: number; radius: number },
): boolean {
	const dx = circle2.x - circle1.x;
	const dy = circle2.y - circle1.y;
	const distance = Math.sqrt(dx * dx + dy * dy);
	return distance < circle1.radius + circle2.radius;
}

export function handleCollision(
	circle1: { x: number; y: number; dx: number; dy: number },
	circle2: { x: number; y: number; dx: number; dy: number },
): { dx1: number; dy1: number; dx2: number; dy2: number } {
	const xVelocityDiff = circle1.dx - circle2.dx;
	const yVelocityDiff = circle1.dy - circle2.dy;
	const xDist = circle2.x - circle1.x;
	const yDist = circle2.y - circle1.y;

	if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
		return {
			dx1: circle2.dx,
			dy1: circle1.dy,
			dx2: circle1.dx,
			dy2: circle2.dy,
		};
	}

	return {
		dx1: circle1.dx,
		dy1: circle1.dy,
		dx2: circle2.dx,
		dy2: circle2.dy,
	};
}
