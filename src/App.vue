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
    v-toolbar-items(
      v-if="$store.state.login_user"
    )
      v-btn(
        text
        @click="logout"
      ) ログアウト
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
import firebase from 'firebase';
import { mapActions } from 'vuex';
import SideNav from './components/SideNav';

export default Vue.extend({
  name: 'App',
  components: {
    SideNav,
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.setLoginUser(user);
      } else {
        this.deleteLoginUser();
      }
    })
  },
  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['toggleSideMenu', 'setLoginUser', 'logout', 'deleteLoginUser']),
  }
});
</script>
