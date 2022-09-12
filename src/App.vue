<template>
  <NotesDashboard />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotesDashboard from './components/NotesDashboard.vue'
import Note from './components/Note.vue'


export default defineComponent({
  name: 'App',
  components: {
    NotesDashboard,
    Note,
  }
});
</script>

<style>

</style>
