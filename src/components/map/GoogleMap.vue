<template>
<v-row justify="center">
      <v-dialog v-model="getMapDialogState" fullscreen hide-overlay transition="dialog-bottom-transition">
        <v-card class="google-maps-card">
          <v-toolbar dark color="primary">
            <v-spacer></v-spacer>
            <v-btn icon dark @click="setMapDialogState(false)">
              <v-icon>close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list three-line subheader>
              <v-img :src="loadImage('map.png')" position="center auto"></v-img>
          </v-list>
        </v-card>
      </v-dialog>
    </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "GoogleMap",
    props: [ 'vTest' ],
    data () {
        return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        }
    },
    methods: {
        ...mapActions(['setMapDialogState']),
    },
    computed: {
        ...mapGetters(['getMapDialogState']),
    }
}
</script>
<style scoped>
</style>