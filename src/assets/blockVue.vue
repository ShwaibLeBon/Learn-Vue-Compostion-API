<template>
	<div class="block" v-if="showBlock" @click="stopTimer">Click me!</div>
</template>

<script>
export default {
	props: ["delay"],
	data() {
		return {
			showBlock: false,
			timer: null,
			reactionTime: 0,
		};
	},
	mounted() {
		setTimeout(() => {
			this.showBlock = true;
			this.startTimer();
		}, this.delay);
	},
	methods: {
		startTimer() {
			this.timer = setInterval(() => {
				this.reactionTime += 10;
			}, 10);
		},
		stopTimer() {
			clearInterval(this.timer);
			this.$emit("getResults", this.reactionTime);
		},
	},
};
</script>

<style>
.block {
	width: 300px;
	height: 150px;
	background-color: #2c3e50;
	margin: 20px auto;
	border-radius: 20px;
	color: white;
}
</style>
