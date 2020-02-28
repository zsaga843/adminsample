<template>

 <v-card
 class="mx-auto"
        max-width="700"
      >
        <v-toolbar flat color="primary" dark>
          <v-toolbar-title>Login</v-toolbar-title>
  
          <v-spacer></v-spacer>
  
        </v-toolbar>
  
        <v-divider></v-divider>
  
        <v-card-text>
                <v-form >
                  <v-text-field
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary">Login</v-btn>
              </v-card-actions>
      </v-card>

</template>

<script>


  export default {
    name: 'Login',

    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            returnUrl: '',
            error: ''
        }
    },
    created () {
         this.$store.commit('SET_LAYOUT', 'full-layout');
    },
    methods: {
        
    }
  }
</script>
