<template>
    <v-content id="AchiveYouGoal" class="y-bg-content">
        <v-layout class="text-center mt-5">
            <v-flex>
                <div class="display-2 py-5" color="black">
                    ACHIEVE YOUR GOALS IN 4 STEPS
                </div>
                <div class="subtitle-2" color="grey">
                    CLARITY OF PURPOSE  IS THE ULTIMATE PATH TO SUCCESS
                </div>
            </v-flex>
        </v-layout>
        <v-layout wrap class="card-list">
            <v-flex
            v-for="(card, index) in cards"
            :key="card.icon"
            xs12 sm6 md3 lg3
            >
                <v-card flat class="ma-3 card">
                    <v-card-actions>
                        <v-responsive class="pt-4 text-center">
                            <v-btn 
                                fab 
                                large 
                                @click="card.active = !card.active"
                                class="my-4 yel-bg headline"
                            >
                                {{ index + 1 }}
                            </v-btn>
                        </v-responsive>
                    </v-card-actions>            
                    <v-expand-transition>
                        <div v-show="card.active">
                            <v-divider
                                    :inset="false"
                                    horizontal
                                    class="py-5"
                                ></v-divider>
                            <v-card-text>                                
                                I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                            </v-card-text>
                            <v-divider
                                    :inset="false"
                                    horizontal
                                    class="py-2"
                            ></v-divider>
                        </div>
                    </v-expand-transition>
                    <v-card-text class="text-center text-uppercase font-weight-bold subtitle-1" color="black">
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
    name: 'AchiveYourGoals',
    data: () => ({
        show: false,
        cards: [
            { title: "DECIDE TO MAKE THE CHANGE", description: "", active: false },
            { title: "DEFINE YOUR REASONS WHY", description: "", active: false  },
            { title: "CREATE A PLAN TO REACH YOUR GOALS", description: "", active: false  },
            { title: "WORK THE PLAN UNTIL YOU REACH YOUR GOAL", description: "", active: false  }
        ],
    }),
}
</script>
<style>
    .achive-goals-content {
        background-color: #FDD247;
    }
</style>
