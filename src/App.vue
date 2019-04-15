<template>
  <div id="app" >
    <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card height="200px">
    <menue />
    <router-view/>
    </v-card>
      </v-flex>
    </v-layout>
  </v-app>
  </div>
</template>

<script>
import menue from './components/Menue.vue'

export default {
  name: 'app',
  
  components: {
    menue
  }
}
</script>

