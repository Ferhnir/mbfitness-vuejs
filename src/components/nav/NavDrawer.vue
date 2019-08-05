<template>
        <v-navigation-drawer
            v-model="getNavDrawerState"
            fixed
            temporary            
            class="NavDrawer"
            height="100vh"
            v-click-outside="onClickOutside"
        >
            <v-list nav dense>
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <img src="@/assets/img/ben_profile_pic.jpg">
                    </v-list-item-avatar>
                
                    <v-list-item-content>
                        <v-list-item-title>Ben</v-list-item-title>
                        <v-list-item-subtitle>Proffesional coach</v-list-item-subtitle>
                    </v-list-item-content>

                </v-list-item>
                
                <v-divider></v-divider>

                <v-list
                    dense
                    nav
                    >
                    <v-list-item
                        v-for="item in menus"
                        :key="item.name"
                        link
                    >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>
                    
                        <v-list-item-content>
                            <v-list-item-title>{{ item.name }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon v-html="'$vuetify.icon.clock'"></v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title>
                                +44 73 66 911 226 <br/>
                                Monday - Friday<br/> 
                                06:00 - 20:00
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list>
                    <v-list-item-content>
                        <v-list-item-title>
                            Media:
                        </v-list-item-title>
                    </v-list-item-content>
                    <v-btn 
                        class="mx-3" 
                        fab 
                        dark 
                        color="teal"
                        v-for="el in media"
                        :key="el.name"
                        >
                        <v-icon dark>
                            {{ el.icon }}
                        </v-icon>
                    </v-btn>
                </v-list>
            </v-list>
        </v-navigation-drawer>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import vClickOutside from 'v-click-outside'

export default {
    name: 'NavDrawer',
    directives: {
      clickOutside: vClickOutside.directive
    },
    data() {
        return {
            drawer: null,
            menus: [
                { name: 'Your objective', icon: '$vuetify.icons.objective'},
                { name: 'Achive your goal', icon: '$vuetify.icons.star'},
                { name: 'Choose your pack', icon: '$vuetify.icons.boxes'},
                { name: 'Pricing',  icon: '$vuetify.icons.coins'},
                { name: 'Contact me',  icon: '$vuetify.icons.phone'}
            ],
            media: [
                { name: 'Facebook', icon: '$vuetify.icons.fb'},
                { name: 'Youtube', icon: '$vuetify.icons.yt'},
                { name: 'Email', icon: '$vuetify.icons.envelope'}
            ]
        }
    },
    methods: {
        ...mapActions(['setNavDrawerState']),
        onClickOutside () {
            if(this.getNavDrawerState == true) {
                this.setNavDrawerState(false);
            }
        }
    },
    computed: {
        ...mapGetters(['getNavDrawerState'])
    }
}
</script>
<style>
    .NavDrawer {
        /* z-index: 1200; */
    }
</style>

