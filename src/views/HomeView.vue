<template>
    <div v-if="currentEpisode == undefined" class="container" @click="updateCurrentEpisode()">
        <div class="title">
            <h1>Últimos lançamentos</h1>
        </div>
        <div class="cards">
            <Card :episode="episodes[0]"/>
            <Card :episode="episodes[1]" />
        </div>
        <div class="title">
            <h1>Todos os episódios</h1> <span> {{ episodes.length }} ao total</span>
        </div>
        <List :episodes="episodes" />
    </div>
    <div v-else class="container" >
        <DescriptionView />
    </div>
</template>

<script>
    import Card from '@/components/Card.vue';
    import List from '@/components/List.vue';
    import DescriptionView from '@/views/DescriptionView.vue';
    export default {
        name: 'HomeView',
        data: function() {
            return {
                currentEpisode: JSON.parse(localStorage.getItem('episode'))
            }
        },
        props: {
            episodes: Array,
        },
        components: {
            Card,
            List,
            DescriptionView,
        },
        methods: {
            updateCurrentEpisode: function() {
                this.currentEpisode = JSON.parse(localStorage.getItem('episode'));
            }
        }
    }
</script>

<style scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .cards {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }

    h1 {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 1.25rem;
        line-height: 1.25rem;
        color: var(--color-text-title);   
    }

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1rem;
        color: var(--color-text-body);
    }

    .title {
        display: flex;
        justify-content: space-between;
        width: 85%;
        margin-top: 2.5rem;
        margin-bottom: 1rem;
    }
</style>