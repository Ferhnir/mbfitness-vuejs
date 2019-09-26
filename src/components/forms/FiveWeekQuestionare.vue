<template>
  <v-dialog 
    :value="getContactDialogState" 
    max-width="800"
    persistent
    >
    <v-card>
      <v-card-title>
        <span class="subtitle-2">5 Weeks Consultation Questionnaire</span>
        <v-btn icon dark color="black" @click="setContactDialogState(false)" class="pos-top-right">
          <v-icon>close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-tabs
        center-active
        light 
        show-arrows
        next-icon="$vuetify.icons.next"
        prev-icon="$vuetify.icons.prev"
        :icons-and-text="true"
      >
        <v-tab 
          v-for="(el, key) in questionaryComponents"
          :key="key"
          :href="`#tab-${key}`"
        >
          {{ progressIcon(key) }}
          {{ el.index }} / {{ _.size(questionaryComponents) }}
          <v-icon :color="el.progressIconColor">{{ el.progressIcon }}</v-icon>

        </v-tab>
        <v-tab-item
          v-for="(el, key) in questionaryComponents"
          :key="key"
          :value="'tab-' + key"
        >
          <component v-bind:is="el.component"></component>
        </v-tab-item>
      </v-tabs>
      <v-card-actions>
        <v-btn color="red lighten-1" @click="resetFormAnswers">Reset form</v-btn>
        <v-btn color="green lighten-1" @click="setContactDialogState(false)" disabled>Send form</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import vClickOutside from 'v-click-outside'

export default {
    name: "FiveWeekQuestionare",
    components: {
      QuestionIntro: () => import('./partials/questionIntro'),
      QuestionOne: () => import('./partials/questionOne'),
      QuestionTwo: () => import('./partials/questionTwo'),
      QuestionThree: () => import('./partials/questionThree'),
      QuestionFour: () => import('./partials/questionFour'),
      QuestionFive: () => import('./partials/questionFive'),
      AgreeTermsAndCond: () => import('./partials/agreeTermsAndCond')
    },
    directives: {
      clickOutside: vClickOutside.directive
    },
    data () {
      return {
        stepState: '$vuetify.icons.edit',
        questionaryComponents: {
          setOne: { 
            index: 1, 
            component: 'questionOne', 
            array: ['firstName','lastName', 'dateOfBirth'], 
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' },
          setTwo: { 
            index: 2, 
            component: 'questionTwo', 
            array: ['emailAdress','wayToContact','adviceQuery'], 
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' },
          setThree: { 
            index: 3, 
            component: 'questionThree', 
            array: ['trainingTime','trainingLengthTime','mainGoals'], 
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' },
          setFour: {
            index: 4,
            component: 'questionFour',
            array: ['donateCharity', 'pressingStruggle', 'successfulUntertaking'],
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' },
          setFive: {
            index: 5,
            component: 'questionFive',
            array: ['lastMedicalExam', 'whereShop', 'currentDiet', 'yourCommitment'],
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' },
          setSix: {
            index: 6,
            component: 'agreeTermsAndCond',
            array: ['termsAndCond'],
            progressIcon: '$vuetify.icons.edit', 
            progressIconColor: 'grey' }
        },
        xtest: {
          color: 'grey',
        }
      }
    },
    methods: {
      ...mapActions([
        'setContactDialogState',
        'resetFormAnswers'
      ]),
      progressIcon(key) {
          let stateArray = [];

          this._.forEach(this.questionaryComponents[key].array, (v) => {
            stateArray.push(this.getFormAnswer(v))
          })

          if(this._.every(stateArray)){
            this.questionaryComponents[key].progressIconColor = 'green',
            this.questionaryComponents[key].progressIcon = '$vuetify.icons.check'
          } else if(this._.find(stateArray, null)) {
            this.questionaryComponents[key].progressIconColor = 'orange'
            this.questionaryComponents[key].progressIcon = '$vuetify.icons.edit'
          } else {
            this.questionaryComponents[key].progressIconColor = 'grey'
            this.questionaryComponents[key].progressIcon = '$vuetify.icons.edit'
          }
      },
    },
    computed: {
      ...mapGetters([
        'getContactDialogState',
        'getFormAnswer',
      ])
    }
}
</script>
<style scoped>
  .pos-top-right{
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .card-list,
  .theme--light.v-card {
    background-color: #FFF !important;
  }

  .no-border {
    border: #FFF 1px solid !important;
    padding: 10px;
  }
</style>