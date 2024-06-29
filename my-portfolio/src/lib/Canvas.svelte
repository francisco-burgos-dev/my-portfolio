<script>
	import { onMount, tick } from 'svelte';

	/**@type {HTMLCanvasElement}*/
	let canvas;
	/**@type {any}*/
	let context;
	/**@type {number}*/
	let width = 500;
	/**@type {number}*/
	export let height = 500;

	//Classes///////////////////////////////////////////////////////
	class Vector {
		/**
		 *
		 * @param {number}x
		 * @param {number}y
		 */
		constructor(x, y) {
			this.x = x;
			this.y = y;
		}
		/**
		 *
		 * @param {any} v
		 */
		getDistance(v) {
			const dx = this.x - v.x;
			const dy = this.y - v.y;
			return Math.sqrt(dx * dx + dy * dy);
		}
	}
	class Agent {
		/**
		 *
		 * @param {number}x
		 * @param {number}y
		 */
		constructor(x, y) {
			this.pos = new Vector(x, y);
			this.vel = new Vector(randRange(-1, 1), randRange(-1, 1));
			this.radius = randRange(3, 7);
		}
		/**
		 *
		 * @param {number} width
		 * @param {number}height
		 */
		bounce(width, height) {
			if (this.pos.x <= 0 || this.pos.x >= width) this.vel.x *= -1;
			if (this.pos.y <= 0 || this.pos.y >= height) this.vel.y *= -1;
		}
		update() {
			this.pos.x += this.vel.x;
			this.pos.y += this.vel.y;
		}
		/**
		 *
		 * @param {any} context
		 */
		draw(context) {
			context.fillStyle = '#e7a70f';
			context.save();
			context.translate(this.pos.x, this.pos.y);
			context.beginPath();
			context.arc(0, 0, this.radius, 0, Math.PI * 2);
			context.fill();
			context.restore();
		}
	}
	////////////////////////////////////////////////////////
	/**@type {any[]}*/
	let agents = [];

	onMount(async () => {
		for (let i = 0; i < 70; i++) {
			const x = randRange(0, width);
			const y = randRange(0, height);
			agents.push(new Agent(x, y));
		}
		context = canvas.getContext('2d');
		await tick();

		function animation() {
			requestAnimationFrame(animation);
			context.clearRect(0, 0, width, height);
			agents.forEach((agent) => {
				agent.update();
				agent.draw(context);
				agent.bounce(width, height);
				for (let i = 0; i < agents.length; i++) {
					const agent = agents[i];
					for (let j = i + 1; j < agents.length; j++) {
						const other = agents[j];
						const dist = agent.pos.getDistance(other.pos);
						if (dist > 100) continue;
						context.strokeStyle = '#1c369e';
						context.beginPath();
						context.moveTo(agent.pos.x, agent.pos.y);
						context.lineTo(other.pos.x, other.pos.y);
						context.stroke();
					}
				}
			});
		}
		animation();
	});
	//helper functions
	/**
	 *
	 * @param {number} min
	 * @param {number}max
	 */
	function randRange(min, max) {
		return Math.random() * (max - min) + min;
	}
</script>

<svelte:window bind:innerWidth={width} />
<canvas {width} {height} bind:this={canvas} />
