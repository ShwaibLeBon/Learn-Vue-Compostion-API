import axios from "axios";
import { ref } from "vue";

const getPosts = () => {
	const posts = ref([]);

	const load = async () => {
		await axios
			.get("https://dummyjson.com/posts")
			.then((res) => {
				posts.value = res.data.posts;
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return { posts, load }
}

export default getPosts