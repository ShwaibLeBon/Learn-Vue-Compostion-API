<template>
	<div>
		<h2>Your time is: {{ results + "ms" }}</h2>
		<h4>{{ rank }}</h4>
	</div>
</template>

<script>
export default {
	props: ["results"],
	data() {
		return {
			rank: null,
		};
	},
	mounted() {
		if (this.results <= 500) {
			this.rank = "Excellent";
		} else if (this.results >= 500 && this.results <= 1000) {
			this.rank = "Amazing";
		} else {
			this.rank = "Well played";
		}
	},
};
</script>

<style lang="scss" scoped></style>
