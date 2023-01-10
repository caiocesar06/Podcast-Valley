<template>
    <header>
        <nav>
            <a href="/">
                <img src="@/assets/logo.svg" alt="Logo">
            </a>
            <p>{{ getDate() }}</p>
        </nav>
    </header>
</template>

<script>
    import getDate from '@/utils/getDate';
    export default {
        name: 'HeaderView',
        methods: {
            getDate: getDate
        }
    }
</script>

<style scoped>
    header {
        background-color: var(--color-shape);
        width: 100%;
        height: 6.5rem;
        left: 0px;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid var(--color-line);
    }

    nav {
        width: 80%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    img { 
        width: 10.2rem;
        height: 2.5rem;
    }
    p {
        float: right;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 0.825rem;
        line-height: 1rem;
        color: var(--color-text-body);
    }

    a {
        text-decoration: none;
        transition: 0.2s opacity;
    }

    a:hover {
        opacity: 0.8;
    }
</style>