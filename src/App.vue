<template>
  <v-app>
    <NavToolbar />
    <v-content>
      <IntroPage/>
      <TestPage/>
    </v-content>    
  </v-app>
</template>

<script>
import IntroPage from './components/Intro'
import TestPage from './components/test'
import NavToolbar from './components/toolbar/Toolbar'

export default {
  name: 'App',
  components: {
    IntroPage,
    TestPage,
    NavToolbar
  }
}
</script>
<style>
</style>

