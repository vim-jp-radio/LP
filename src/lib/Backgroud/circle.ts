const colors: string[] = ['#060748', '#29002E'];

export class Circle {
	radius: number;
	x: number;
	y: number;
	dx: number;
	dy: number;
	color: string;
	speed: number;
	minSpeed: number;
	maxSpeed: number;
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	constructor(
		canvas: HTMLCanvasElement,
		ctx: CanvasRenderingContext2D,
		minSpeed: number,
		maxSpeed: number,
	) {
		this.canvas = canvas;
		this.ctx = ctx;
		this.radius = Math.random() * 20 + 100;
		this.x = Math.random() * (this.canvas.width - this.radius * 2) + this.radius;
		this.y = Math.random() * (this.canvas.height - this.radius * 2) + this.radius;
		this.minSpeed = minSpeed;
		this.maxSpeed = maxSpeed;
		this.speed = this.getRandomSpeed();
		const angle = Math.random() * Math.PI * 2;
		this.dx = Math.cos(angle) * this.speed;
		this.dy = Math.sin(angle) * this.speed;
		this.color = colors[Math.floor(Math.random() * colors.length)];
	}

	getRandomSpeed(): number {
		return Math.random() * (this.maxSpeed - this.minSpeed) + this.minSpeed;
	}

	draw(): void {
		this.ctx.save();
		this.ctx.beginPath();
		this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		this.ctx.fillStyle = this.color;
		this.ctx.fill();
		this.ctx.closePath();
		this.ctx.restore();
	}

	update(circles: Circle[]): void {
		this.checkWallCollision();
		this.checkCircleCollision(circles);
		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}

	checkWallCollision(): void {
		if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
			this.dx = -this.dx;
			this.adjustSpeed();
		}
		if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
			this.dy = -this.dy;
			this.adjustSpeed();
		}
	}

	checkCircleCollision(circles: Circle[]): void {
		for (const other of circles) {
			if (this === other) {
				continue;
			}
			const dx = other.x - this.x;
			const dy = other.y - this.y;
			const distance = Math.sqrt(dx * dx + dy * dy);
			if (distance < this.radius + other.radius) {
				this.resolveCollision(other);
			}
		}
	}

	resolveCollision(other: Circle): void {
		const xVelocityDiff = this.dx - other.dx;
		const yVelocityDiff = this.dy - other.dy;
		const xDist = other.x - this.x;
		const yDist = other.y - this.y;

		if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
			const angle = -Math.atan2(yDist, xDist);
			const u1 = this.rotate(this.dx, this.dy, angle);
			const u2 = this.rotate(other.dx, other.dy, angle);

			const v1 = { x: u2.x, y: u1.y };
			const v2 = { x: u1.x, y: u2.y };

			const vFinal1 = this.rotate(v1.x, v1.y, -angle);
			const vFinal2 = this.rotate(v2.x, v2.y, -angle);

			this.dx = vFinal1.x;
			this.dy = vFinal1.y;
			other.dx = vFinal2.x;
			other.dy = vFinal2.y;

			this.adjustSpeed();
			other.adjustSpeed();
		}
	}

	adjustSpeed(): void {
		this.speed = this.getRandomSpeed();
		const currentDirection = Math.atan2(this.dy, this.dx);
		this.dx = Math.cos(currentDirection) * this.speed;
		this.dy = Math.sin(currentDirection) * this.speed;
	}

	rotate(dx: number, dy: number, angle: number): { x: number; y: number } {
		return {
			x: dx * Math.cos(angle) - dy * Math.sin(angle),
			y: dx * Math.sin(angle) + dy * Math.cos(angle),
		};
	}
}

function createCircles(
	count: number,
	canvas: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D,
	minSpeed: number,
	maxSpeed: number,
): Circle[] {
	const circles = Array.from(
		{ length: count },
		() => new Circle(canvas, ctx, minSpeed, maxSpeed),
	);
	return circles;
}

function animate(
	canvas: HTMLCanvasElement,
	ctx: CanvasRenderingContext2D,
	circles: Circle[],
): void {
	requestAnimationFrame(() => animate(canvas, ctx, circles));
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	circles.forEach(circle => circle.update(circles));
	ctx.save();
	ctx.restore();
}

export { createCircles, animate };
