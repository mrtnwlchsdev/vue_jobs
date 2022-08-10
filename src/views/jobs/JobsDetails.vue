<script>
    export default {
        props: ['id']
    }
</script>

<template>
    <h1>Job Details Page</h1>
    <p>The Job ID is {{id}}</p>    
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