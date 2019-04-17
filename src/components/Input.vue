<template>
  <div>
    <v-text-field :label="'x = '" :value="xvar" @input="xset"/>
    <v-text-field :label="'y = '" :value="yvar" @input="yset"/>
    
  </div>
</template>

<script>
export default {
  name: 'Input',
  computed: {
    xvar : {
      get : function(){
        return this.$store.getters.getX
      }
    },
     yvar : {
      get : function(){
        return this.$store.getters.getY
      }
    }
  },
  methods: {
    xset(val){
      this.$store.commit("setX", val)
    },
    yset(val){
      this.$store.commit("setY", val)
    }
  },
}
</script>
