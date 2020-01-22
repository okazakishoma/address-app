import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyB4emmX8RjOnftvRRVFr7BjmNjDcADdZuk",
  authDomain: "address-app-pj.firebaseapp.com",
  databaseURL: "https://address-app-pj.firebaseio.com",
  projectId: "address-app-pj",
  storageBucket: "address-app-pj.appspot.com",
  messagingSenderId: "345921446328",
  appId: "1:345921446328:web:177b496017b10c0e2eaf4d",
  measurementId: "G-1464SZEP55"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
