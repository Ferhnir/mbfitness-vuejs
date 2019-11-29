<template>
    <v-container id="AboutMe" grid-list-md style="max-width: 800px;">
        <v-card 
            max-width="100%"
            class="mx-auto"
            color="white"
        >
            <v-row py-4 pl-4 row wrap align-center>
                <v-col md6>
                    <v-responsive max-width="350" class="mx-auto">
                        <v-img :src="loadImage('20180708_112849-e1547427266136.jpg')"></v-img>
                    </v-responsive>
                </v-col>
                <v-col md6 class="text-center contant-bttns" style="min-width: 350px;">
                    <v-row align="center">
                        <v-col cols="12" sm="12">
                            <div class="text-center">
                                <div class="my-2">
                                    <h3>PUREGYM Ashton-under-Lyne</h3><br />
                                    <h5>Unit 2B, Ashton Retail Park, Wellington Rd<br />
                                    Ashton-under-Lyne OL6 6DJ</h5>
                                </div>
                                <div class="my-4">
                                    <v-btn @click="setMapDialogState(true)">
                                        <v-icon left>map</v-icon> GoogleMaps
                                    </v-btn>
                                </div>
                                <div 
                                    v-for="btn in buttons"
                                    :key="btn.icon"
                                    class="my-4"
                                >                                    
                                    <v-btn :href="btn.target">
                                        <v-icon left>
                                            {{ btn.icon }}    
                                        </v-icon>{{ btn.title }}
                                    </v-btn>
                                </div> 
                            </div>    
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-card>
        <GoogleMap/>
    </v-container>
</template>
<script>

import GoogleMap from './map/GoogleMap'
import { mapActions } from 'vuex';

export default {
    name: "ContactMe",
    components: {
        GoogleMap
    },
    data() {
        return {
            mojTest: false,
            buttons: [
                { title: "Call", icon: "$vuetify.icons.phone", target: "tel:+447366911226" },
                { title: "WhatsApp", icon: "$vuetify.icons.whatsapp", target: "whatsapp://call?number=+447366911226" },
                { title: "", icon: "$vuetify.icons.fb", target: "" }
            ]
        }
    },
    methods: {
        ...mapActions(['setMapDialogState']),
    },
}
</script>