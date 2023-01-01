<template>
	<div>
		<p>Hello {{ id }}</p>
	</div>
</template>

<script>
export default {
	props: ["id"],
	setup(props) {
		console.log(props.id);
	},
};
</script>

<style scoped></style>
