<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    
    <div class="right menu">
      <!-- User logged in -->
      <div v-if="isLoggedIn" class="horizontal">
        <router-link to="/" href="#" class="item"><i class="far fa-images"></i>&nbsp; Galleries</router-link>
        <router-link to="/upload" href="#" class="item"><i class="fas fa-cloud-upload-alt"></i>&nbsp; Upload</router-link>
        <a href="#" class="item" @click="logout"><i class="fas fa-sign-out-alt"></i>&nbsp; Logout</a>
      </div>
      <!-- User not logged in -->
      <a v-else href="#" class="ui item" @click="login"><i class="fas fa-sign-in-alt"></i>&nbsp; Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'AppHeader',
  computed: mapGetters(['isLoggedIn']),
  methods: mapActions(['login', 'logout'])
}
</script>

<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
}
</style>
