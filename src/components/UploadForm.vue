<template>
  <div>
    <h3>Upload Form</h3>

    <div class="dropper">
      <input type="file" @change="uploadImages($event.target.files)" multiple accept="image/*" name="imgUpload" id="imgUpload">
      <span>Drop image here to upload it</span>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'UploadForm',
  methods: mapActions(['uploadImages'])
}
</script>

<style scoped>
.dropper {
  display: flex;
  position: relative;
  height: 30vh;
  border: 2px dashed black;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
}
.dropper:hover {
  background-color: lightgray;
}
input {
  position: absolute;
  width: 100%;
  height: 30vh;
  opacity: 0;
}
</style>
