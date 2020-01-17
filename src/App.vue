<template lang="pug">
v-app
  v-card(
    color="grey lighten-4"
    flat
    height="200px"
    title
  )
    v-toolbar(dense)
      v-app-bar-nav-icon
      v-toolbar-title マイアドレス帳
      v-spacer
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>
