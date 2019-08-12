<template>
    <v-content>
        <v-app-bar
            color="black"
            dark
            class="toolbar"
        >
            <v-btn height="45" color="#000">
                <v-img :src="loadDynamicImg('mbfit-logo.jpg')" width="80px" height="45"/>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                color="black" 
                @click.stop="updateNavDrawerState" 
                class="ma-2"
                :disabled="!updateNavDrawerState"
            >
                MENU
                <v-icon right class="v-icon-y">$vuetify.icons.menu</v-icon>
            </v-btn>
        </v-app-bar>
        <NavigationDrawer/>
    </v-content>    
</template>
<script>

import { mapGetters, mapActions } from 'vuex';
import NavigationDrawer from '../nav/NavDrawer';

export default {
    name: 'NavToolbar',
    components: {
        NavigationDrawer
    },
    data() {
        return {
            items: [
                'All', 'Family', 'Friends', 'Coworkers'
            ],
            drawer: false
        }
    },
    methods: {
        ...mapActions(['setNavDrawerState']),
        updateNavDrawerState() {
            this.drawer = !this.getNavDrawerState;
            this.setNavDrawerState(this.drawer);
        },        
        loadDynamicImg(img) {
            return require('@/assets/img/' + img);
        }
    },
    computed: {
        ...mapGetters(['getNavDrawerState']),
    }
}
</script>
<style scoped>
    .bg-dark-mb {
        background-color: inherit;
    }
    .navbar-light-mb,
    .theme--dark.v-btn {
        color: #EEEE22 !important;
    }

    .toolbar {
        position: fixed;
        top: 0;
        z-index: 1;
    }
</style>

