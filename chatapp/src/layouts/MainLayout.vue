<template>
  <q-layout view="lHh Lpr lFf">
    <q-header 
    class="glossy"
    elevated>
      <q-toolbar>
        <q-btn 
        @click="$router.back()"
        v-if="$route.fullPath.includes('/chat')"
        color="primary" 
        icon="arrow_back" 
        label="Back"
        dense />
        <q-toolbar-title class ="absolute-center">
          {{ title }}
        </q-toolbar-title>
          <q-btn 
            class="absolute-right q-pr-sm"
            no-caps
            to="/auth"
            color="primary" 
            icon="account_circle" 
            label="Login"
            dense />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  computed: {
    title() {
      let currentPath = this.$route.fullPath
      if (currentPath === '/') {
        return 'ChatApp';
      } else if (currentPath.startsWith('/chat')) {
        return 'Chat';
      } else if (currentPath.startsWith('/auth')) {
        return 'Login';
      }
      return 'ChatApp';
    }
  },
  methods: {
    openURL
  }
}
</script>