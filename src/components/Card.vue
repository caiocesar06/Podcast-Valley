<template>
    <div class="card">
        <img :src="episode?.thumbnail" alt="" class="card-thumbnail">
        <div class="card-content">
            <h1 class="card-title"> <a @click.left="sendToLocalStorage(episode)"> {{ episode?.title }} </a> </h1>
            <p class="card-members">{{ episode?.members }}</p>
            <p class="card-content-pub-duration">
                {{ getDate(episode?.published_at) }}
                <img src="../assets/ellipse.svg">
                {{ getDuration(episode?.file?.duration) }}
            </p>
        </div>
        <img src="../assets/play-button.svg" alt="Play" class="card-play-button" @click.left="$emit('play', episode)">
    </div>
</template>

<script>
import getDate from '@/utils/getDate';
import getDuration from '@/utils/getDuration';
import sendToLocalStorage from '@/utils/sendToLocalStorage';
export default {
    name: 'CardComponent',
    props: {
        episode: Object
    },
    emits: ['play'],
    methods: {
        getDate: getDate,
        getDuration: getDuration,
        sendToLocalStorage: sendToLocalStorage,
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend');

a {
    text-decoration: none;
    color: var(--color-text);
}

a:hover {
    text-decoration: underline;
}

.card-play-button {
    cursor: pointer;
    width: 2rem;
    transition: transform 0.2s;
    margin-top: 3.5rem;
}

.card-play-button:hover {
    transform: scale(1.8);
}

.card {
    background-color: var(--color-shape);
    box-sizing: border-box;
    width: 30rem;
    height: 8.5rem;
    border-radius: 1.5rem;
    border: 1px solid var(--color-line);
    display: flex;
    align-items: center;
    padding: 1.25rem;
    padding-left: 1.35rem;
}

.card-content {
    width: 12rem;
    margin-right: 2rem;
}

.card-thumbnail {
    border-radius: .75rem;
    width: auto;
    height: 5.5rem;
    margin-right: 1rem;
    object-fit: cover;
}

.card-content h1 {
    font-family: 'Lexend';

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-weight: 600;
    font-style: normal;
    font-size: 1rem;
    line-height: 1.25rem;
    margin-bottom: .5rem;

    color: var(--color-text-title);
    transition: text-indent 2.5s linear;
    cursor: pointer;
}

.card-content p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;

    color: var(--color-text-body);
}

.card-content h1:hover {
    text-indent: -30rem;
}

.card-members {
    margin-bottom: 1.5rem;
    transition: text-indent 1.5s linear;
}

.card-members:hover {
    text-indent: -15rem;
}

.card-content-pub-duration p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1rem;

    color: var(--color-text-body);
}

.card-content-pub-duration img {
    margin-bottom: .2rem;
}
</style>