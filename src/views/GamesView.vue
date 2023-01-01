<template>
	<h1>Reaction Timer Game</h1>
	<button class="btn" @click="start" :disabled="isPlaying">Play</button>
	<block-vue v-if="isPlaying" :delay="delay" @getResults="getResults" />
	<results-vue :results="results" v-if="showResults" />
</template>

<script>
import { ref } from "vue";
import blockVue from "../assets/blockVue.vue";
import resultsVue from "../assets/resultsVue.vue";
export default {
	components: { blockVue, resultsVue },
	setup() {
		const delay = ref(null);
		const isPlaying = ref(false);
		const showResults = ref(false);
		const results = ref(0);

		// Forms Data
		const email = ref("");
		const password = ref("");

		function start() {
			delay.value = 2000 + Math.random() * 5000;
			isPlaying.value = true;
			showResults.value = false;
		}
		function getResults(event) {
			isPlaying.value = false;
			results.value = event;
			showResults.value = true;
		}

		return {
			start,
			isPlaying,
			delay,
			getResults,
			showResults,
			results,
			email,
			password,
		};
	},
};
</script>

<style scoped>
.btn {
	padding: 12px 24px;
	background-color: #27ddd4;
	border: none;
	outline: none;
	cursor: pointer;
}
.btn:disabled {
	cursor: not-allowed;
	background-color: #87d4d0;
}

form {
	max-width: 300px;
	margin: auto;
}

label {
	color: #aaa;
	display: inline-block;
	font-size: 0.6em;
	margin: 25px 0 15px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
}

input {
	display: block;
	padding: 10px 6px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
}
</style>
