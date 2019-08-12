<template>
    <v-content id="YourObjective" grid-list-xl class="b-bg-content py-200">
        <v-layout class="your-obj-layout">
            <v-flex>
                <div class="display-2 text-center py-5 yellow-title">
                    WHAT IS YOUR OBJECTIVE?
                </div>  
            </v-flex>  
        </v-layout>
        <v-layout wrap class="card-list my-5 gap-50">
            <v-flex
            v-for="card in cards"
            :key="card.icon"
            xs12 sm6 md3 lg3
            >
                <v-card flat class="ma-3 card">
                    <v-responsive class="pt-4 text-center">
                        <v-btn fab large class="my-4 yel-bg" @click="$vuetify.goTo('#ChooseYourPack', options)">
                            <v-icon color="#FDD247">{{ card.icon }}</v-icon>
                        </v-btn>
                    </v-responsive>
                    <v-card-text class="text-center text-uppercase font-weight-bold title" color="black">
                        {{ card.title }}
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout class="your-obj-layout">
            <div class="display-2 text-center py-5 your-obj-title"></div>  
        </v-layout>
    </v-content>
</template>
<script>
export default {
    name: "YourObjective",
    data: () => ({
        cards: [
            { title: "become fit", icon: "star" },
            { title: "losing weight", icon: "$vuetify.icons.heart" },
            { title: "tone up my body", icon: "bolt" },
            { title: "release stress", icon: "$vuetify.icons.anchor" }
        ],
        options: {
            duration: 700,
            offset: 50,
            easing: 'easeOutQuad',
        },
    }),
}
</script>
<style>
    .your-obj-layout,
    .card-list {
        max-width: 1000px;
        margin: auto;
        border-radius: 10px;
    }

    .card-list,
    .theme--light.v-card {
        background-color: #FDD247 !important;
    }

    .theme--light.v-card {
        border: 1px solid black !important;
    }
    .yel-bg {
        color: #FDD247 !important;
        background-color: black !important;
    }

    .gap-50 {
        margin-bottom: 50px !important;
    }
</style>
