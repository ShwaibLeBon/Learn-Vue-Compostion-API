<template>
	<div>
		<h2>User List</h2>
		<ul>
			<li v-for="user in users" :key="user.id">
				<router-link
					:to="{ name: 'UserDetails', params: { id: user.id } }"
					class="nav-link"
					>{{ user.name }}</router-link
				>
			</li>
		</ul>
	</div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
	setup() {
		const users = ref([]);
		onMounted(() => {
			axios
				.get("https://jsonplaceholder.typicode.com/users")
				.then((res) => {
					users.value = res.data;
				});
		});

		return {
			users,
		};
	},
};
</script>

<style scoped>
.nav-link {
	padding: 4px;
}
</style>
