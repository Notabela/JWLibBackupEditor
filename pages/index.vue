<template>
  <div>
    <b-container>
      <h1 class='text-center mt-2 font-weight-light'>JWLib Backup Editor</h1>
      <p class='text-center'>
        A tool for removing notes in a .jwlibrary backup file by Tag.
      </p>
      <p class='text-center'>
        Please read the <a href='https://github.com/Notabela/JWLibBackupEditor#important-notes' target='_blank'>disclaimer notes</a> before proceeding
      </p>
      <Upload />
    </b-container>
    <footer class='text-center'>
      <p>© {{new Date().getFullYear()}} Notabela. All rights reserved.</p>
      <a class='d-flex justify-content-center align-items-center' href='https://github.com/Notabela/JWLibBackupEditor' target='_blank'>
      <img src='github.png' class='mr-1' width='20rem' alt='github logo' />
        Visit project on Github
      </a>
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
    margin-bottom: 9rem;
  }
</style>
