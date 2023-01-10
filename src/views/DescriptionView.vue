<template>
    <div class="container">
        <div class="thumbnail">
            <img src="@/assets/back-button.svg">
            <img :src="episode?.thumbnail" alt="Thumbnail">
            <img src="@/assets/play-button-invert.svg">
        </div>
        <div class="title">
            <h1>{{ episode?.title }}</h1>
            <span>{{ episode?.members }}</span>
            <img src="@/assets/ellipse.svg">
            <span>{{ getDate(episode?.published_at) }}</span>
            <img src="@/assets/ellipse.svg">
            <span>{{ getDuration(episode?.file?.duration) }}</span>
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
            },
        }
    }
</script>