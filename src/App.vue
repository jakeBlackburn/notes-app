<template>
  <Header />
  <NotesDashboard />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NotesDashboard from './components/NotesDashboard.vue'
import Note from './components/Note.vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    NotesDashboard,
    Note,
    Header,
  }
});
</script>

<style>
body, html {
  margin: 0;
  background-color: crimson;
}
</style>
