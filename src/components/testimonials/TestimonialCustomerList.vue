<template>
    <div>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >  
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
  
        </v-list-item>
    </div>
</template>
<script>
export default {
    name: 'TestimonialCustomerList',
    data () {
        return {
            items: [
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
                { icon: true, title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
                { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
                { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
                { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
            ],
        }
    }
}
</script>