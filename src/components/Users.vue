<template>
    <v-row class="mx-auto">
      <v-col cols="12">
           <v-card>
 <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="users"
       :search="search"
      item-key="id"
      show-select
       show-expand
      class="elevation-1"
      loading=false 
      loading-text="Loading... Please wait"
    >

 <template v-slot:item.id="{ item }">
      <v-chip color="primary lighten-1" dark>{{ item.id }}</v-chip>
    </template>

     <template v-slot:expanded-item="{ item }">
        <td colspan="2">Address: {{item.address}}</td>
      </template>

    </v-data-table>



           </v-card>
               <div class="text-center mt-10">
         <v-btn rounded color="deep-purple accent-4" dark>Check</v-btn>
     </div>
      </v-col>
    
    </v-row>

</template>

<script>


  export default {
    name: 'Home',

    data: () => ({
   
selected: [],
search: '',
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'First Name', value: 'first_name' },
        { text: 'Last Name', value: 'last_name' },
        { text: 'Address', value: 'address' },
        { text: 'Aadhaar No.', value: 'aadhaar' },
        { text: 'PAN No.', value: 'pancard' },
        { text: '', value: 'data-table-expand' },
      ],
      users: [
        {
          id: '1',
          first_name: 'John',
          last_name: 'Melt',
          address: 'Pune Maharashtra 411057'
        },
        {
          id: '2',
          first_name: 'Topper',
          last_name: 'Melt2'
        },
        {
          id: '3',
          first_name: 'Lemon',
          last_name: 'Melt3'
        },
       
      ],

    }),
    created(){
      this.$store.commit('SET_LAYOUT', 'app-layout');

    }
  }
</script>
