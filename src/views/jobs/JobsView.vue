<script>
    export default {
        data() {
            return {
                jobs: [
                    {title: 'UX Designer', id: 1, details: 'Lorem'},
                    {title: 'Web Developer', id: 2, details: 'Lorem'},
                    {title: 'Vue Developer', id: 3, details: 'Lorem'}
                ]
            }
        }
    }
</script>

<template>
    <div>
        <header>
            <h1>Jobs</h1>
        </header>
        <div v-for="job in jobs" :key="job.id">
            <RouterLink :to="{name: 'JobsDetails', params: {id: job.id}}">
                <h2>{{job.title}}</h2>
            </RouterLink>
        </div>
        <router-view />
    </div>
</template>

<style scoped>
    div {
        width: 100%;
        text-align: center;
        font-size: 2.5rem;
    }
    h1 {
        font-size: 5rem;
    }
    h2 {
        background: #f4f4f4;
        margin: 10px 40px;
        padding: 20px;
        border-radius: 20px;
    }
    h2:hover {
        background-color: #efefef;
    }
    a {
        text-decoration: none;
        color: #444;
    }
</style>