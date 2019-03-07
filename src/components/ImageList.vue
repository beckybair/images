<template>
  <div>
    <div v-if="isLogedIn" class="image-container">
      <h3>Image List</h3>
      <img v-for="image in allImages" :src="image.link" alt="image.name">
    </div>
    <h2 v-else>Login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages()
  }
}
</script>

<style scoped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
h2 {
  text-align: center;
}
</style>
