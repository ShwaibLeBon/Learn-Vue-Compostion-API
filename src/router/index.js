import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/HomeView'
import Games from '@/views/GamesView'
import Users from '@/views/Users/UsersView'
import UserDetails from '@/views/Users/UserDetailsView'
import Posts from '@/views/Posts/PostsView'
import PostDetails from '@/views/Posts/PostDetailsView'

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/users', name: 'Users', component: Users },
	{ path: '/user/:id', name: 'UserDetails', component: UserDetails, props: true },
	{ path: '/posts', name: 'Posts', component: Posts },
	{ path: '/post/:id', name: 'PostDetails', component: PostDetails, props: true },
	{ path: '/games', name: 'Games', component: Games }
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	base: process.env.BASE_URL
})

export default router
