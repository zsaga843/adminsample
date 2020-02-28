<template>
  <v-app app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>

import AppLayout from './layouts/AppLayout'
import FullLayout from './layouts/FullLayout'
export default {
  computed: {
    layout () {
      return this.$store.getters.layout
    }
  },
  components: {
    'app-layout': AppLayout,
    'full-layout': FullLayout
    // define as many layouts you want for the application
  }
}
</script>
