<template>
    <div class="container">
        <div class="thumbnail">
            <img class="back-button" src="@/assets/back-button.svg" @click.left="$emit('back')">
            <img class="thumbnail-img" :src="episode?.thumbnail" alt="Thumbnail" >
            <img class="play-button" src="@/assets/play-button-invert.svg" @click.left="$emit('play', episode)">
        </div>
        <div class="title">
            <h1>{{ episode?.title }}</h1>
            <div class="subtitle">
                <span>{{ episode?.members }}</span>
                <img src="@/assets/ellipse.svg">
                <span>{{ getDate(episode?.published_at) }}</span>
                <img src="@/assets/ellipse.svg">
                <span>{{ getDuration(episode?.file?.duration) }}</span>
            </div>
        </div>
        <hr>
        <div class="description">
            <p>{{ getDescription(episode?.description) }}</p>
        </div>
    </div>
</template>

<script>
    import getDate from '@/utils/getDate';
    import getDuration from '@/utils/getDuration';
    export default {
        name: 'DescriptionView',
        emits: ['play', 'back'],
        data: function() {
            return {
                episode: JSON.parse(localStorage.getItem('episode'))
            }
        },
        methods: {
            getDate: getDate,
            getDuration: getDuration,
            getDescription(description) {
                return description.replace(/(<([^>]+)>)/gi, "");
            }
        }
    }
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 1.5rem;
    }

    .thumbnail {
        position: relative;
        display: flex;
        width: 100%;
        height: 20rem;
        margin-top: 2rem;
        justify-content: center;
    }

    .thumbnail-img {
        width: 50rem;
        height: 25rem;
        object-fit: cover;
        border-radius: 1rem;
        left: 10rem;
    }

    .back-button {
        position: absolute;
        top: 50%;
        left: 16% ;
        width: 4rem;
        height: 4rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    .back-button:hover {
        transform: scale(1.2);
    }

    .play-button {
        position: absolute;
        top: 48%;
        left: 78.5%;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
    }

    .play-button:hover {
        transform: scale(1.3);
    }

    .title {
        display: flex;
        width: 50rem;
        flex-direction: column;
        align-items: center;
        margin-top: 8rem;
    }

    .title h1 {
        font-family: 'Lexend';
        font-size: 2rem;
        font-weight: 600;
        line-height: 2.5rem;
        text-align: left;
        color: var(--color-text-title);
    }

    .subtitle {
        width: 50rem;
        display: flex;
        margin-top: 1rem;
        align-items: center;
        text-align: left;
        align-items: center;
    }

    .subtitle span {
        font-family: 'Inter';
        font-size: 1rem;
        line-height: 17px;
        font-weight: 400;
        margin-top: 1rem;
        color: #808080
    }

    .subtitle img {
        margin: 0 1rem;
        padding-top: 1rem;
    }

    hr {
        width: 50rem;
        margin-top: 1rem;
        margin-bottom: 2rem;
        border: 1px solid var(--color-line);
    }

    .description {
        width: 50rem;
        text-align: justify;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.625rem;
        color: var(--color-text-title);
        margin-bottom: 1rem;
    }
    
</style>