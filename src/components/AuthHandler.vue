<template>
  <div>
    <h3>Please wait...</h3>
  </div>  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AuthHandler',
  methods: mapActions(['finalizeLogin']),
  created() {
    this.finalizeLogin(window.location.hash)
  }
}
</script>
