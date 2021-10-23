<template>
  <div>
    <b-container>
      <h1 class='text-center mt-2 font-weight-light'>JWLib Backup Editor</h1>
      <p class='text-center'>A tool for removing notes in a .jwlibrary backup file by Tag</p>
      <Upload />
    </b-container>
    <footer class='text-center'>
      <p>© {{new Date().getFullYear()}} Notabela. All rights reserved.</p>
      <p>"JW Library" is a registered trademark of Watch Tower Bible and Tract Society of Pennsylvania.</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang='scss'>
  footer {
    position: fixed;
    bottom: 0;
    background: white;
    z-index: 9;
    padding: 1rem 0.5rem;
    width: 100%;
  }

  body {
    margin-bottom: 9.6rem;
  }
</style>
