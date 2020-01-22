<template lang="pug">
v-container(
  text-center
  justify-center
)
  v-layout(row wrap)
    v-flex(xs12)
      h1 マイアドレス帳
      p マイアドレス帳をご利用の方は、Googleアカウントでログインしてください。
    v-flex(xs12 mt-5)
      v-btn(
        color='info'
        @click="login"
      ) Googleアカウントでログイン
</template>

<script>
import {mapActions} from 'vuex'
export default {
  methods: {
    ...mapActions(['login'])
  }
}
</script>
