<template lang="pug">
v-container(
  text-xs-center
  justify-center
)
  v-layout(
    row
    wrap
  )
    v-flex(xs12)
      h1 連絡先一覧
    v-flex(
      xs12
      mt-5
      mr-5
      text-right
    )
      router-link(:to="{name: 'address_edit'}")
        v-btn(color="info") 連絡先追加
    v-flex(
      xs12
      mt-5
      justify-center
    )
      v-data-table(
        :headers='headers'
        :items='addresses'
      )
        template(v-slot:items="props")
          td(class="text-xs-left") {{ props.item.name }}
          td(class="text-xs-left") {{ props.item.tel }}
          td(class="text-xs-left") {{ props.item.email }}
          td(class="text-xs-left") {{ props.item.address }}
</template>

<script>
export default {
  created(){
    this.addresses = this.$store.state.addresses;
  },
  data () {
    return {
      headers: [
        { text: '名前', value: 'name' },
        { text: '電話番号', value: 'tel' },
        { text: 'メールアドレス', value: 'email' },
        { text: '住所', value: 'address' }
      ],
      addresses: []
    }
  }
}
</script>