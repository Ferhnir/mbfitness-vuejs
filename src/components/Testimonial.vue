<template>
    <v-content id="Testimonials" class="b-bg-content py-5 pb-12">
        <v-divider :inset="false" horizontal color="#FDD247"></v-divider>
        <v-layout class="text-center mt-5 py-5 pb-12 b-pack">
            <v-flex>
                <div class="display-3 py-5">
                    Look who has made it
                </div>
            </v-flex>
        </v-layout>
        <v-layout wrap class="card-list text-center mt-5 b-pack">
            <v-flex
                v-for="(card, index) in cards"
                :key="index"
                xs12 sm6 md4 lg4
            >
                <v-card
                    class="ma-3 card"
                    color="#26c6da"
                    dark
                    max-width="400"
                    >                
                    <v-card-text class="subtitle-1 text-left font-weight-light font-italic">
                        "{{ card.desc }}"
                    </v-card-text>
                
                    <v-card-actions>
                        <v-list-item class="text-left">
                            <v-list-item-avatar color="grey darken-3">
                                <v-img
                                class="elevation-6"
                                :src="loadDynamicImg(card.avatar)"
                                ></v-img>
                            </v-list-item-avatar>
                    
                            <v-list-item-content>
                                <v-list-item-title>{{ card.name }}</v-list-item-title>
                                <v-list-item-title>{{ card.proff }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout wrap class="card-list text-center mt-5 b-pack">
            <v-flex xs12 sm12 md12 lg12>
                <TestimonialDialogBox/>
            </v-flex>
        </v-layout>
    </v-content>
</template>
<script>
import TestimonialDialogBox from './testimonials/TestimonialDialogBox.vue'

export default {
    name: "TestimonialPage",
    components: {
        TestimonialDialogBox
    },
    data () {
        return {
            colors: [
                'black',
            ],
            cards: [
                { name: "Mamili", proff: "Engineer", avatar: "y12.png", desc: "When I started I could not do a single push up, now I am pushing equivalent to my age 40x. Coach Ben was clear in the when I will achieve that..Super happy." },
                { name: "Ekaete", proff: "Rock Climber", avatar: "y10.png", desc: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
                { name: "Stephen Orr", proff: "Car Enthusiast", avatar: "y11.png", desc: "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."}
            ]
        }
    },
    methods: {
        loadDynamicImg(img) {
            return require('@/assets/img/' + img);
        }
    }
}
</script>
<style scoped>
    .b-pack .caption,
    .b-pack .subtitle-1,
    .b-pack .subtitle-2,
    .b-pack .display-3,
    .b-pack .display-1,
    .b-pack .v-list-item__content,
    .v-card__actions {
        color: #FDD247 !important;
        background-color: #000;
    }
</style>