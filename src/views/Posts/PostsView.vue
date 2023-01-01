<template>
	<h1>Blog Post</h1>
	<section>
		<article v-for="post in posts" :key="post.id">
			<h3 class="post-title">
				<router-link
					:to="{ name: 'PostDetails', params: { id: post.id } }"
					>{{ post.title }}</router-link
				>
			</h3>
			<p class="post-excerpt">
				{{ post.body.substring(0, 150) + "..." }}
			</p>
			<router-link :to="{ name: 'PostDetails', params: { id: post.id } }"
				>Read more >></router-link
			>
		</article>
	</section>
</template>

<script>
import getPosts from "@/composables/getPosts";

export default {
	setup() {
		const { posts, load } = getPosts();
		load();
		return { posts };
	},
};
</script>

<style scoped>
article {
	padding: 24px;
	margin-bottom: 16px;
	border: 1px solid #ccc;
	border-radius: 10px;
}
article .post-title a {
	color: inherit;
	font-size: inherit;
}
article .post-title a:hover {
	text-decoration: underline;
}
article .post-excerpt {
	font-size: 14px;
	color: #888;
	line-height: 1.5em;
	white-space: pre-wrap;
}
</style>
