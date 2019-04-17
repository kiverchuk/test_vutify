<template>
  <div id="inspire">
     <v-card-title class="blue white--text">
            <span class="headline">Menu</span>
  
            <v-spacer></v-spacer>
  
            <v-menu bottom left>
              <template v-slot:activator="{ on }">
                <v-btn
                  dark
                  icon
                  v-on="on"
                >
                  <v-icon>Click</v-icon>
                </v-btn>
              </template>
  
              <v-list>
                <v-list-tile v-for="(item, i) in items" :key="i" >
                    <router-link :to="item.href">
                  <v-list-tile-title >{{ item.title }}</v-list-tile-title>
                    </router-link>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-card-title>
    
  </div>
</template>

<script>
  export default {
      name : "Menue",
    data: () => ({
      items: [
        { 
            title: 'Home',
            href : "/"
        },
        { 
            title: 'Input',
            href : "/Input"
        },
        { 
            title: 'Output',
            href : "/Output"
        },
        { 
            title: 'Result',
            href : "/Result"
        }
      ]
    })
  }
</script>
