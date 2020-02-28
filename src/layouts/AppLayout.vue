<template>
  <v-app app>   
    <div>
      <v-navigation-drawer
      v-model="drawer"
      app
      left
    >
      <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item to="/">
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
  
            <v-list-item to="/users">
              <v-list-item-title>Users</v-list-item-title>
            </v-list-item>

             <v-list-item to="/actions">
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item>
  
          </v-list-item-group>
        </v-list>
    </v-navigation-drawer>

      <v-app-bar
        color="deep-purple accent-4"
        dense
        dark
        app
      >
         <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  
        <v-toolbar-title>Admin</v-toolbar-title>
  
        <v-spacer></v-spacer>

  
        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
  
          <v-list>
            <v-list-item
              @click="() => {}"
            >
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
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
       user: {},
      users: [],
      drawer: null,
      dialog: false,
      group:null,
    navigationMenu: [
      { icon: 'contacts', text: 'Contacts' },
      { icon: 'history', text: 'Frequently contacted' },
      { icon: 'content_copy', text: 'Duplicates' },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'Labels',
        model: true,
        children: [
          { icon: 'add', text: 'Create label' },
        ],
      },
      {
        icon: 'keyboard_arrow_up',
        'icon-alt': 'keyboard_arrow_down',
        text: 'More',
        model: false,
        children: [
          { text: 'Import' },
          { text: 'Export' },
          { text: 'Print' },
          { text: 'Undo changes' },
          { text: 'Other contacts' },
        ],
      },
      { icon: 'settings', text: 'Settings' },
      { icon: 'chat_bubble', text: 'Send feedback' },
      { icon: 'help', text: 'Help' },
      { icon: 'phonelink', text: 'App downloads' },
      { icon: 'keyboard', text: 'Go to the old version' },
    ],
    }),
    props: {
      source: String
    }
  }
</script>