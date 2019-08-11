<template>
  <v-app>
    <NavToolbar />
    <v-content>
      <IntroPage/>
      <YourObjective/>
      <AchiveYourGoals/>
      <ChooseYourPack/>
      <Testimonial/>
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

export default {
  name: 'App',
  components: {
    NavToolbar,
    IntroPage,
    YourObjective,
    AchiveYourGoals,
    ChooseYourPack,
    Testimonial
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

    .py-200 {
        padding-top: 200px;
    }
</style>

