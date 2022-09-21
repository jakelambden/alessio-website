<template>
  <v-container class="pt-16 pb-16 pl-8 pr-8 bg-surface">
    <v-row class="fill-height" align="center">
      <v-col align="center">
        <h2 class="font-weight-black padded-element">Latest Uploads</h2>
        <v-divider class="padded-element" />
        <v-row style="width: 100%" dense class="padded-element">
          <v-col v-for="imageAsset in latestUploads(imageCount)" :key="imageAsset.uri" cols="6">
            <Image :imageAsset="imageAsset" />
          </v-col>
        </v-row>
        <div class="padded-element">
          <router-link to="/gallery">
            <v-btn>See full gallery<v-icon class="padded-arrow">mdi-arrow-right</v-icon>
            </v-btn>
          </router-link>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang='ts'>
import { useImageStore } from '../stores/ImageStore';
import Image from '@/components/Image.vue';
import { computed } from 'vue';
const imageStore = useImageStore();
const imageCount = 6;
const latestUploads = computed(() => (imageCount: number) => imageStore.imagesSortedByUploaded.slice(0, imageCount));
</script>

<style>
a {
  color: #FFFFFF;
  text-decoration: none;
}

/* a:hover {
   color: #00F
} */

.padded-arrow {
  padding-left: 10px;
}

.padded-element {
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>