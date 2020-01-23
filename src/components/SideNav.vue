<template lang="pug">
v-container(
  fluid
)
  v-navigation-drawer(
    v-model="$store.state.drawer"
    absolute
    temporary
  )
    v-list
      v-list-item
        v-list-item-avatar
          img(
            v-if="photoURL"
            :src="photoURL"
          )
        v-list-item-content
          v-list-item-title {{ userName }}

      v-divider

      v-list-item(
        v-for="(item, index) in items"
        :key="index"
        :to="item.link"
      )
        v-list-item-icon
          v-icon {{ item.icon }}
        v-list-item-content
          v-list-item-title {{ item.title }}
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      items: [
        { title: 'ホーム', icon: 'mdi-home', link: { name: 'home' } },
        { title: '連絡先一覧', icon: 'mdi-menu', link: { name: 'addresses' } },
      ]
    }
  },
  computed: {
    ...mapGetters(['userName', 'photoURL']),
  },
}
</script>