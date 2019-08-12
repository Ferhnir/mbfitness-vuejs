<template>
    <v-content id="ChooseYourPack" class="b-bg-content pb-5">
        <v-layout class="text-center mt-5 pb-5">
            <v-flex>
                <div class="display-2 text-center py-5 yellow-title">
                    DISCOVER THE PACK THAT REPRESENTS YOU!
                </div>
            </v-flex>
        </v-layout>
        <v-layout wrap class="card-list">
            <v-flex
            v-for="card in cards"
            :key="card.icon"
            xs12 sm6 md4 lg4
            >
                <v-card flat class="ma-3 card b-pack">
                    <v-responsive class="pt-4 text-center">
                        <v-img :src="loadDynamicImg(card.img)" />
                    </v-responsive>
                    <v-card-text class="text-center text-uppercase font-weight-bold subtitle-2">
                        {{ card.title }}
                        <div class="caption">
                            {{ card.subtitle }}
                        </div>  
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout id="Pricing" class="text-center mt-5">
            <v-flex>
                <div class="display-2 text-center py-5 yellow-title">
                    THE COST OF SUCCESS
                </div>
                <div class="subtitle-1 text-center py-5 yellow-title">
                    Enjoy the cost of success or pay the price of failure
                </div>
            </v-flex>
        </v-layout>
        <v-layout wrap class="card-list card-bg-y">
            <v-flex
            v-for="(pack, index) in packages"
            :key="index"
            xs12 sm6 md4 lg4
            >
                <v-card flat class="ma-3 card" :class="pack.bg" elevation="10">
                    <v-card-text class="text-center text-uppercase font-weight-bold subtitle-2" v-html="pack.title"></v-card-text>
                    <v-card-text class="text-center text-uppercase display-3" v-html="pack.price"></v-card-text>
                    <v-card-text class="text-center text-uppercase display-1">per month</v-card-text>
                    <v-card-text class="text-center text-uppercase subtitle-2">
                        <v-list-item
                        v-for="(item, index) in pack.details"
                        :key="index"
                        >
                            <v-list-item-content>
                                <v-list-item-title>{{ item }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <div class="text-center my-5">
                            <v-btn rounded color="bttn-bg-pink" dark large>GET STARTED</v-btn>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-content>
</template>
<script>
export default {
    name: 'ChooseYourPack',
        data: () => ({
        cards: [
            { title: "WE PUSH FOR WORTHY CAUSES", subtitle: "Join our free Fit For a Cause Challenge", img: "package1.jpg" },
            { title: "BEST OF FOUR", subtitle: "Have a look at our Fit 4 Programs", img: "package2.jpg"  },
            { title: "TURN ORDINARY MOM TO SEXY MOM", subtitle: "MOMS FOCUSED PROGRAMS", img: "package3.jpg"  },
            { title: "EAT YOUR FAVORE AND LOOSE THE GUT", subtitle: "A COMPLETE NUTRITIONAL COACHING", img: "package4.jpg"  },
            { title: "MAKE DAD HANDSOME AGAIN", subtitle: "DAD'S FOCUSED PROGRAMS", img: "package6.jpg"  },
            { title: "BEST OF TWO", subtitle: "TWO FOR ONE TEAM COACHING", img: "package5.jpg"  },
        ],
        packages: [
            { bg: "y-pack", title: "3 MONTH <br/>TRANSFORMATION <br/>MEMBERSHIP", price: "£300", set: "#300", details: [
                "3 Times Per Week", "30 Minutes", "100% Money back", "2 Free Pt for Family", "And many more"
            ]},
            { bg: "b-pack", title: "3 MONTH <br/>TRANSFORMATION <br/>MEMBERSHIP", price: "£360", set: "#360", details: [
                "3 Times Per Week", "45 Minutes", "100% Money back", "2 Free Pt for Family", "And many more"
            ]},
            { bg: "y-pack", title: "3 MONTH <br/>TRANSFORMATION <br/>MEMBERSHIP", price: "£420", set: "#420", details: [
                "3 Times Per Week", "60 Minutes", "100% Money back", "2 Free Pt for Family", "And many more"
            ]}
        ]
    }),
    methods: {
        loadDynamicImg(img) {
            return require('@/assets/img/' + img);
        }
    }
}
</script>
<style scoped>
    .card-list,
    .theme--light.v-card {
        background-color: #000 !important;
    }

    .card-bg-y {
        background-color: #FDD247 !important;
    }

    .y-pack .subtitle-2,
    .y-pack .display-3,
    .y-pack .display-1 {
        color: rgb(0,0,0) !important;
        background-color: #FDD247;
    }
    .card-bg-b {
        background-color: #000 !important;
    }

    .b-pack .caption,
    .b-pack .subtitle-1,
    .b-pack .subtitle-2,
    .b-pack .display-3,
    .b-pack .display-1,
    .b-pack .v-list-item__content {
        color: #FDD247 !important;
        background-color: #000;
    }

    .bttn-bg-pink {
        background-color: #EF5240 !important;
        color: #000 !important;
    }
</style>

