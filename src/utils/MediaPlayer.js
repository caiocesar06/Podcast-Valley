class MediaPlayer {
    init = (episodes, { id, url }) => {
        for(const episode in this.episodes) {
            this.addEpisodeToQueue(episode?.id, new Audio(episode?.file?.url));
        }
        this.episodes = episodes;
        this.episode = {id, audio: new Audio(url)};
        this.episodesQueue = [];
    }

    addEpisodeToQueue = (id, audio) => {
        this.episodesQueue.push({id, audio});
    }


    play = () => {
        this.episode.audio.play();
    }

    shuffle = () => {
        console.log(this.episodesQueue);
        let currentIndex = this.episodesQueue.length, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.episodesQueue[currentIndex], this.episodesQueue[randomIndex]] = [
                this.episodesQueue[randomIndex], this.episodesQueue[currentIndex]
            ];
        }
        console.log(this.episodesQueue);
    }
}

export default MediaPlayer;