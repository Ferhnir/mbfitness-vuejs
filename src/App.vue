<template>
  <v-app>
    <NavToolbar />
    <v-content>
      <IntroPage/>
      <YourObjective/>
      <AchiveYourGoals/>
      <ChooseYourPack/>
      <Testimonial/>
      <CustomizedCoaching/>
      <ContactMe/>
      <FiveWeekQuestionare/>
    </v-content>    
  </v-app>
</template>

<script>
import NavToolbar from './components/toolbar/Toolbar'
import IntroPage from './components/Intro'
import YourObjective from './components/YourObjective'
import AchiveYourGoals from './components/AchiveYourGoals'
import ChooseYourPack from './components/ChooseYourPack'
import Testimonial from './components/Testimonial'
import CustomizedCoaching from './components/CustomizedCoaching'
import ContactMe from './components/ContactMe'
import FiveWeekQuestionare from './components/forms/FiveWeekQuestionare'

export default {
  name: 'App',
  components: {
    NavToolbar,
    IntroPage,
    YourObjective,
    AchiveYourGoals,
    ChooseYourPack,
    Testimonial,
    CustomizedCoaching,
    ContactMe,
    FiveWeekQuestionare
  }
}
</script>
<style>
    .yellow-title {
        color: #FDD247 !important;
    }

    .b-bg-content {
        background-color: #000;
    }

    .y-bg-content {
        background-color: #FDD247;
    }

    .w-bg-content {
      background-color: #FFF !important;
    }

    .py-200 {
        padding-top: 200px;
    }
</style>

