<template>
  <div class="hello">
    <v-text-field :label="'raspuns = '" :value="this.$store.getters.getX"/>
  </div>
</template>

<script>
export default {
  name: 'Output',
  props: {
    msg: String
  },
  computed: {
    items () {
            return parseInt(this.$store.getters.getX) + parseInt(this.$store.getters.getY)
    }
  },
}
</script>
