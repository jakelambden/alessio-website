<template>
  <v-app>
    <NavMain />
    <!-- <v-navigation-drawer app>
    </v-navigation-drawer> -->
    <v-main>
      <RouterView />
    </v-main>
    <FooterMain />
  </v-app>
</template>

<script setup lang = 'ts'>
import { RouterView } from 'vue-router';
import NavMain from '@/components/NavMain.vue';
import FooterMain from '@/components/FooterMain.vue'
</script>

<style>
/* @import '@/assets/base.css'; */

::-webkit-scrollbar {
    display: none;
}

.v-main{
  width: 1080px;
  align-self: center;
}
</style>