<template>
  <v-app>
    <div class="repeating-gradient" />
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
import { useImageStore } from './stores/ImageStore';
import { getImages } from './utils/fetch';
import { onBeforeMount } from 'vue';

onBeforeMount(async () => {
  const imageStore = useImageStore();
  const images = await getImages();
  imageStore.insertImages(images);
});
</script>

<style>
/* @import '@/assets/base.css'; */

::-webkit-scrollbar {
  display: none;
}

.v-main {
  align-self: center;
  width: 1024px;
  font-family: 'Josefin Sans', san-serif;
}

.repeating-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(-45deg,
      rgba(255, 255, 255, 0.01),
      rgba(255, 255, 255, 0.01) 10px,
      rgba(255, 255, 255, 0) 10px,
      rgba(255, 255, 255, 0) 20px);
}
</style>