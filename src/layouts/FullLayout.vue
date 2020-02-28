<template>
<v-app app>  
    <v-content>
      <v-container
        fluid
        fill-height
      >
        <v-layout
          align-center
          justify-center
        >
          <v-flex
            xs12
            sm8
            md4
          >
                <router-view></router-view>

          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
     <v-footer color="indigo" app>
      <span class="white--text">&copy; Its your app</span>
    </v-footer>
</v-app>
</template>

<script>
export default {
     data: () => ({
    drawer: null
  })
}
</script>
