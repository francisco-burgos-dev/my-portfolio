let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = 800;
const agents = [];

/**
 * Event listener for whenver the page gets resize
 */
window.addEventListener("load", dottedLines);
window.addEventListener("resize", resizeCanvas);

function dottedLines() {
	agents.forEach((agent) => {
		agent.update();
		agent.draw(context);
		agent.bounce(canvas.width, canvas.height);
	});
}
function resizeCanvas() {
	canvas.width = innerWidth;

	dottedLines();
}

const animate = () => {
	requestAnimationFrame(animate);
	context.clearRect(0, 0, canvas.width, canvas.height);
	dottedLines();
	for (let i = 0; i < agents.length; i++) {
		const agent = agents[i];
		for (let j = i + 1; j < agents.length; j++) {
			const other = agents[j];
			const dist = agent.pos.getDistance(other.pos);
			if (dist > 100) continue;
			context.strokeStyle = "#1c369e";
			context.beginPath();
			context.moveTo(agent.pos.x, agent.pos.y);
			context.lineTo(other.pos.x, other.pos.y);
			context.stroke();
		}
	}
};

animate();

//Helper Functions
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRandRange(min, max) {
	return Math.random() * (max, min) + min;
}

//Classes
class Vector {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	getDistance(v) {
		const dx = this.x - v.x;
		const dy = this.y - v.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
}

class Agent {
	constructor(x, y) {
		this.pos = new Vector(x, y);
		this.vel = new Vector(getRandRange(-0.7, 0.7), getRandRange(-0.7, 0.7));
		this.radius = getRandRange(3, 10);
	}
	draw(context) {
		context.fillStyle = "#e7a70f";
		context.save();
		context.translate(this.pos.x, this.pos.y);
		context.beginPath();
		context.arc(0, 0, this.radius, 0, Math.PI * 2);
		context.fill();
		context.restore();
	}
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
	}
	bounce(width, height) {
		if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
		if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
	}
}

for (let i = 0; i < 90; i++) {
	const x = getRandomInt(canvas.width);
	const y = getRandomInt(canvas.height);

	agents.push(new Agent(x, y));
}
