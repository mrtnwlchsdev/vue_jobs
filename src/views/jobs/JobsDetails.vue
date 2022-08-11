<script>
    export default {
        props: ['id'],
        data() {
            return {
                job: null
            }            
        },
        mounted() {
            fetch('http://localhost:3000/jobs/' + this.id)
            .then(response => response.json())
            .then(data => {
                this.job = data
            })
        }
    }
</script>

<template>
        <div v-if="job">
            <h1>{{job.title}}</h1>
            <p>{{job.details}}</p>
        </div>
</template>

<style scoped>
    h1 {
        text-align: center;
        font-size: 3rem;
    }
    p {
        text-align: center;
        margin-top: 20px;
        font-size: 1.5rem;
    }
</style>