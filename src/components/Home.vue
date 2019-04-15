<template>
  <div class="hello">
    <center><h1>Test 2 WEB Chiverciuc Anton</h1> </center>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String 
  },
  computed: {
    items () {
      return this.$store.getters.getStudents
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  }
}
</script>
