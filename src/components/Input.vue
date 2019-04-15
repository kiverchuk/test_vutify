<template>
  <div>
    <v-text-field :label="'x = '" :value="xvar" :cheanc ="xvar"/>
    <v-text-field :label="'y = '" :value="yvar" v-on:keyup.up.prevent="yvar"/>
  </div>
</template>

<script>
export default {
  name: 'Input',
  computed: {
    xvar : {
      get : function(){
        return this.$store.getters.getX
      },
      set : function(val){
         this.$store.commit("setX", val)
      }
    },
     yvar : {
      get : function(){
        return this.$store.getters.getY
      },
      set : function(val){
         this.$store.commit("setY", val)
      }
    }
  }
}
</script>
