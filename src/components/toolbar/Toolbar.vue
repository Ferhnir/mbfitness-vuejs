<template>
    <v-content>
        <v-app-bar
            color="black"
            dark
            class="toolbar"
        >
            <v-spacer></v-spacer>
            <v-btn text icon color="yellow" @click.stop="updateNavDrawerState">
                <v-icon v-html="'$vuetify.icons.menu'"></v-icon>
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
    v-icon {
        color: #EEEE22;
    }

    .toolbar {
        position: fixed;
        top: 0;
        z-index: 1;
    }
</style>

