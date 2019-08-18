<template>
    <v-content>       
        <v-parallax 
            dark
            :src="loadDynamicImg('coach-img.jpg')"
            class="parallax"
        >
            <v-layout
                align-center
                column
                justify-center
                text-center
            >
                <h1 class="intro-text font-weight-thin mb-4">
                    <b>PERSONAL</b><br/>
                    FITNESS COACHING
                </h1>
                <h4 class="subheading py-2 my-2">
                    WE ARE NOT THE SHOUTING TYPE, WE RATHER YOU TEST US BELOW
                </h4>
                <v-btn 
                    rounded 
                    color="#FDD247" 
                    dark
                    style="color: black;"
                >
                    CLAIM YOUR YOUR FREE 5 DAY CLARITY CONSULT
                </v-btn>
            </v-layout>
        </v-parallax>
    </v-content>
</template>
<script>
export default {
    name: "IntroPage",
    methods: {
        loadDynamicImg(img) {
            return require('@/assets/img/' + img);
        }
    }
}
</script>
<style>
.parallax {
    height: 100vh !important;
}

.v-parallax__content {    
    background-color: rgba(0,0,0,0.6);
}

.v-parallax__image {
    top: -30% !important;
    bottom: none !important;
}

.intro-text,
.subheading {
    color: #FDD247;    
    font-family: Roboto, sans-serif;
}

.intro-text {
    font-size: 70px;
    font-stretch: 100%;
    font-weight: bold;
    line-height: 80px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

