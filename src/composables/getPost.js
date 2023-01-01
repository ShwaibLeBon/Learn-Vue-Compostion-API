import axios from "axios";
import { ref } from "vue";

const getPost = (id) => {
	const post = ref({});

	const load = async () => {
		await axios
			.get("https://dummyjson.com/posts/" + id)
			.then((res) => {
				post.value = res.data;
			})
			.catch((err) => {
				console.log(err.message);
			});
	};

	return { post, load }
}

export default getPost