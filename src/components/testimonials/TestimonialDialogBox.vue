<template>
    <v-layout justify-center>
      <v-dialog v-model="dialog" scrollable max-width="400px">
        <template v-slot:activator="{ on }">
          <v-btn block color="secondary" dark v-on="on">Read more</v-btn>
        </template>
        <v-card>
          <v-card-title>List of happy customers</v-card-title>
          <v-divider></v-divider>
          <v-card-text style="height: 400px;">
              <TestimonialCustomerList/>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
              <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
</template>
<script>
import TestimonialCustomerList from './TestimonialCustomerList.vue'

export default {
    name: 'TestimonialDialogBox',
    components: {
        TestimonialCustomerList
    },
    data () {
        return {
            dialogCustomerList: '',
            dialog: false,
        }
    }
}
</script>