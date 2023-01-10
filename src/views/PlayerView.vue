<template>
    <div class="player">
        <div class="top">
            <img src="@/assets/player/headphone.svg">
            <h1>Tocando agora</h1>
        </div>
        <div class="thumbnail-title-members">
            <img :src="episode?.thumbnail">
            <h1>{{ episode?.title }}</h1>
            <span>{{ episode?.members }}</span>
        </div>
        <audio class="podcast-audio" :src="episode?.file?.url" controls></audio>
        <div class="media-duration">
            <span></span>
            <div class="audio-progress-bar"> 
                <div class="audio-progress-bar-fill"></div>
            </div>
            <span>{{ getDuration(episode?.file?.duration) }}</span>
        </div>
        <div class="buttons">
            <button class="btn-shuffle">
                <img src="@/assets/player/shuffle.svg" alt="">
            </button>
            <button class="btn-previous">
                <img src="@/assets/player/play-arrow-previous.svg" alt="">
            </button>
            <button class="btn-play">
                <img src="@/assets/player/union.svg" alt="" id="test">
            </button>
            <button class="btn-next">
                <img src="@/assets/player/play-arrow-next.svg" alt="">
            </button>
            <button class="btn-repeat">
                <img src="@/assets/player/repeat-rotate.svg" alt="">
            </button>
        </div>
        <h1>{{ test() }}</h1>
    </div>
    
</template>

<script>
    import getDuration from '@/utils/getDuration';
    import test from '@/utils/progressBar';
    export default {
        name: 'PlayerView',
        props: {
            episode: Object,
            currentPodcast: Object
        },
        methods: {
            getDuration: getDuration,
            test: test
        }
    }
</script>

<style scoped>
    * {
        background-color: var(--color-primary-purple);
        color: var(--color-shape);
    }

    .player {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
        width: 100%;
        height: 100%;
    }

    .top {
        display: flex;
        align-items: center;
        padding: 1rem;
        justify-content: center;
        margin-bottom: 5.5rem;
    }

    .top img {
        width: 2rem;
        margin-right: 1rem;
    }

    .top h1 {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.75rem;
        text-align: center;

        color: var(--color-shape);
    }

    .thumbnail-title-members {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        margin-bottom: 5rem;
    }

    .thumbnail-title-members img {
        width: 85%;
        mix-blend-mode: normal;
        border-radius: 1.5rem;
        
    }

    .thumbnail-title-members h1 {
        font-family: 'Lexend';
        width: 90%;
        font-style: normal;
        font-weight: 600;
        font-size: 1.5rem;
        line-height: 1.875rem;
        letter-spacing: .08rem;
        text-align: center;
        margin-top: 2rem;
        margin-bottom: 3rem;
    }

    .thumbnail-title-members span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2rem;
        text-align: center;
        color: #DCCDFF;
    }

    .media-duration {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .media-duration span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.2rem;
        text-align: center;
        color: #DCCDFF;
    }

    
</style>