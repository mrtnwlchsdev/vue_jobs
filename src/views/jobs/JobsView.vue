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
        <header>Jobs</header>
        <div v-for="job in jobs" :key="job.id">
            {{job.title}}
        </div>
    </div>
</template>

<style scoped>
    div {
        width: 100%;
        text-align: center;
        font-size: 3rem;
    }
</style>