<template>
<b-container>
  <b-form-file
    v-model='backupFile'
    class='mt-3 mb-3'
    :state='Boolean(backupFile)'
    placeholder='Choose a .jwlibrary backup file or drop it here...'
    drop-placeholder='Drop file here'
    accept='.jwlibrary'
  ></b-form-file>
  <b-card
    v-if='parsedFile && isSupportedSchema'
    :title='parsedFile.manifest.name'
    :sub-title='`Date created: ${ parsedFile.manifest.creationDate }`'
  >
    <b-list-group class='mt-3 mb-3'>
      <b-list-group-item>
        <h5>Remove Notes by Tag</h5>
        <p>Remove all notes associated with the chosen tags <em>including the tags themselves</em></p>

        <b-form-checkbox-group
          v-model='checkedTags'
          class='b-checkbox-group d-flex flex-column'
          :options='tags'
        ></b-form-checkbox-group>
      </b-list-group-item>
    </b-list-group>

    <b-overlay
        :show="working"
        rounded
        opacity="0.6"
        spinner-small
        spinner-variant="primary"
        class="d-inline-block"
    >
        <b-button
          variant='primary'
          :disabled='!checkedTags.length'
          @click='$bvToast.show("complete-msg"); removeSelectedTags()'
          >
          Continue
        </b-button>
    </b-overlay>
    <b-toast id="complete-msg" title="Note" variant='info'>
        The new backup file will automatically be downloaded
        when complete
    </b-toast>
  </b-card>
  <b-card
    v-if='parsedFile && !isSupportedSchema'
  >
    <b-card-text>
      The backup file version is not supported. Please check back later for an update.
    </b-card-text>
  </b-card>
  </b-container>
</template>

<script lang='ts'>
  import Vue from 'vue';
  import { parseJWLibFile, getTags, downloadAsJWLibFile, removeSelectedTagsAndNotes } from '../helpers';

  const schemaVersion = 8;

  export default Vue.extend({
    data() {
      return {
        backupFile: null as (Blob | null),
        parsedFile: null as (JWLibFile | null),
        checkedTags: [],
        working: false,
        tags: [] as Array<any>,
      }
    },
    computed: {
      isSupportedSchema(): Boolean {
        return !this.parsedFile || this.parsedFile.manifest.userDataBackup.schemaVersion === schemaVersion;
      }
    },
    watch: {
      async backupFile(value) {
        if (value) {
          this.parsedFile = await parseJWLibFile(value);
          console.log(this.parsedFile);
          this.tags = getTags(this.parsedFile.db);
          this.checkedTags = []; // reset checked tags
        } else {
          this.parsedFile = null;
        }

      }
    },
    methods: {
      removeSelectedTags() {
        this.working = true;

        setTimeout(() => {
          const newJWLibFile = removeSelectedTagsAndNotes(this.checkedTags, this.parsedFile!)
          downloadAsJWLibFile(newJWLibFile);
          this.working = false;
        }, 1000)
      }
    }
  })
</script>
