<template>
	<div>
		<div class="header">
			<h2 class="title">Composition API</h2>
			<nav>
				<ul>
					<router-link :to="{ name: 'Users' }" class="nav-link"
						>Users</router-link
					>
					<router-link :to="{ name: 'Posts' }" class="nav-link"
						>Posts</router-link
					>
					<router-link :to="{ name: 'Games' }" class="nav-link"
						>Games</router-link
					>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
}
</style>
