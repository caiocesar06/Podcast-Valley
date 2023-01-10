<template>
    <div class="container">
        <table>
            <thead>
                <th>PODCAST</th>
                <th>INTEGRANTES</th>
                <th>DATA</th>
                <th>DURAÇÃO</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="episode in episodes" :key="episode.id">
                    <td class="content podcast">
                        <img :src="episode?.thumbnail" class="thumbnail"/>
                        <div class="title">
                            <h1><a @click.left="sendToLocalStorage(episode)">{{ episode?.title }}</a></h1>
                        </div>
                    </td>
                    <td class="content members">{{ episode?.members }}</td>
                    <td class="content">{{ getDate(episode?.published_at) }}</td>
                    <td class="content">{{ getDuration(episode?.file?.duration) }}</td>
                    <td><img src="@/assets/play-button.svg" alt="Play" class="card-play-button"></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import getDate from '@/utils/getDate';
    import getDuration from '@/utils/getDuration';
    import sendToLocalStorage from '@/utils/sendToLocalStorage';
    export default {
        name: 'ListComponent',
        props: {
            episodes: Array
        },
        methods: {
            getDate: getDate,
            getDuration: getDuration,
            sendToLocalStorage: sendToLocalStorage,
        }
    }
</script>

<style scoped>  
    .container {
        margin: 0 auto;
        max-width: 70 rem;
        padding: 0 2rem;
    }

    a {
        text-decoration: none;
        color: var(--color-text);
        transition: opacity text-decoration 0.2s;
    }

    a:hover {
        text-decoration: underline;
        cursor: pointer;
        opacity: 0.8;
    }

    .card-play-button {
        cursor: pointer;
        width: 2rem;
        transition: transform 0.2s;
    }

    .card-play-button:hover {
        transform: scale(1.8);
    }

    table {
        max-width: 70rem;
        border-collapse: collapse;
        border-spacing: 0 0.5rem;
    }

    th, td {
        padding: 1rem;
        border-bottom: 1px solid var(--color-line);
    }

    th {
        text-align: left;
        color: var(--color-line);
        font-weight: normal;
    }

    tr {
        transition: background-color 0.2s;
    }

    tr:hover {
        background-color: var(--color-line);
    }

    img {
        width: 2rem;
        height: 2rem;
    }

    .thumbnail {
        width: auto;
        height: 5rem;
        border-radius: .5rem;
        object-fit: cover;
    }

    .content {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1rem;

        max-width: 15rem;
        
        color: var(--color-text-body);

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .members {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        transition: text-indent 2.5s linear;
    }

    .members:hover {
        text-indent: -16rem;
    }

    .podcast {
        display: flex;
        align-items: center;
        min-width: 40rem;
    }

    .podcast h1 {
        font-family: 'Lexend';
        font-weight: 600;
        color: var(--color-text-title);
        margin-left: 1rem;
        font-size: 1.25rem;
        white-space: normal;
        line-height: normal;
    }

    thead th {
        font-family: 'Lexend';
        font-style: normal;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1rem;
        text-transform: uppercase;
        
        color: #ABA8B3;
    }
</style>