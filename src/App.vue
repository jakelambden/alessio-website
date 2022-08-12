<template>
  <v-app>
    <NavMain />
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->
    <v-main>
      <RouterView />
    </v-main>
    <MailingList />
  </v-app>
</template>

<script setup lang = 'ts'>
import { RouterView } from 'vue-router';
import NavMain from '@/components/NavMain.vue';
import MailingList from '@/components/MailingList.vue'
</script>

<style>
/* @import '@/assets/base.css'; */

::-webkit-scrollbar {
    display: none;
}

.v-main{
  align-self: center;
  font-family: 'Josefin Sans', san-serif;
}
</style>