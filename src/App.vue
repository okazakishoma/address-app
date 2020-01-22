<template lang="pug">
v-app
  v-app-bar(
    app
    color="primary"
    dark
  )
    v-app-bar-nav-icon(
      @click="toggleSideMenu"
    )
    v-toolbar-title マイアドレス帳
    v-spacer
  SideNav
  v-content
    v-container(
      fluid
      fill-height
      align-start
    )
      router-view
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import SideNav from './components/SideNav';

export default Vue.extend({
  name: 'App',
  components: {
    SideNav,
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu']),
  }
});
</script>
