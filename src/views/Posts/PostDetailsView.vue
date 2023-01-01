<template>
	<h3 class="post-title">{{ post.title }}</h3>
	<p class="post-excerpt">
		{{ post.body }}
	</p>
	<span v-for="tag in post.tags" :key="tag">{{ "#" + tag + " " }}</span>
</template>

<script>
import getPost from "@/composables/getPost";

export default {
	props: ["id"],
	setup(props) {
		const { post, load } = getPost(props.id);
		load();
		return { post };
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
