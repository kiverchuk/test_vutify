<template>
  <div>
     Students
      <v-data-table
    :headers="headers"
    :items="items"
    class="elevation-1"
  >
    <template v-slot:items="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.media }}</td>
      
    </template>
  </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Students',
  data() {
    return {
      studentslist: null,
      headers: [
        {
          text: 'Nume',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Media', value: 'media' }
      ],
    }
  },
  computed: {
    items () {
      console.log(this.$store.getters.getStud)
      return this.$store.getters.getStud
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  },
  
}
</script>
<style >
  .material-icons {
    display: none !important;
  }
</style>