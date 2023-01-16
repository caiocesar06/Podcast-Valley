<template>
	<div class="site" @beforeinput="clearLocalStorage()">
		<div class="main">
			<div class="header">
				<HeaderView />
			</div>
			<div class="home">
				<HomeView :episodes="episodes" @play="setPlayerEpisode" />
			</div>
		</div>
		<div class="player" v-if="playerEpisode">
			<PlayerView :episodes="episodes" :episode="playerEpisode" :haveEpisode="haveEpisode"/>
		</div>
	</div>
</template>

<script>
import HeaderView from '@/views/HeaderView.vue';
import HomeView from '@/views/HomeView.vue';
import PlayerView from '@/views/PlayerView.vue';

export default {
	name: 'App',
	data() {
		return {
			episodes: Array,
			playerEpisode: Object,
			haveEpisode: false
		}
	},
	created() {
		localStorage.clear();
	},
	mounted() {
		fetch('https://raw.githubusercontent.com/codificar/podcastvalley/main/podcastvalley_data.json')
			.then(response => response.json())
			.then(data => {
				const episodesSortedByDate = data?.episodes?.sort((a, b) => {
					return new Date(b.published_at) - new Date(a.published_at)
				});
				this.episodes = episodesSortedByDate;
			})
			.catch(error => console.log(error));
	},
	components: {
		HeaderView,
		HomeView,
		PlayerView
	},
	methods: {
		setPlayerEpisode: function (episode) {
			this.playerEpisode = Object.assign({}, episode);
			this.haveEpisode = true;
		},
	}
}
</script>

<style scoped>
.main {
	width: 70%;
	height: 100%;
}

.player {
	width: 30%;
	height: 100%;
	position: fixed;
	left: 70%;
}

.site {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
}
</style>