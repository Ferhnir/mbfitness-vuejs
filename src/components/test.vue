<template>
    <v-content class="something">
        xxx
    </v-content>
</template>
<script>
export default {
    name: "TestPage",
    methods: {
        loadDynamicImg(img) {
            return require('@/assets/img/' + img);
        }
    }
}
</script>
<style>
    .something {
        display: block;
        height: 100vh;
        background-color: black !important;
    }
</style>

