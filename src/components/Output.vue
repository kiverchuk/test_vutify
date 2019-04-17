<template>
  <div class="hello">
    <v-text-field :label="'raspuns = '" :value="raspuns"/>
    <v-select v-bind:items="operations" v-model="selected" label="Select operation" autocomplete @change="items()"></v-select>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data() {
    return {
      selected : null,
      raspuns : "alege gesteunea",
      operations : ["+", "-", "*", "/"]
    }
  },
  computed: {
    
  },
  methods: {
    items () {
      console.log("|"+this.selected+"|")
      switch(this.selected){
        case '+':
          this.raspuns = parseInt(this.$store.getters.getX) + parseInt(this.$store.getters.getY)
          break
        case "-":
          this.raspuns = parseInt(this.$store.getters.getX) - parseInt(this.$store.getters.getY)
          break
        case "*":
          this.raspuns = parseInt(this.$store.getters.getX) * parseInt(this.$store.getters.getY)
          break
        case "/":
          let impartitor = parseInt(this.$store.getters.getY)
          if (impartitor != 0)
            this.raspuns = parseInt(this.$store.getters.getX) / impartitor
            break
        default :
        
      }
      
    }
  },
}
</script>
