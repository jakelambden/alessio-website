<template>
    <v-container class="bg-surface fill-height">
      <v-row class="fill-height" align="center">
        <v-col align="center">
          <h2 class="font-weight-black padded-element">Latest Uploads</h2>
          <v-divider class="padded-element"/>
          <v-row style="width: 100%" dense class="padded-element">
            <v-col v-for="galleryImage in galleryImages" :key="galleryImage.id" cols="6">
              <GalleryImage :galleryImage="galleryImage" />
            </v-col>
          </v-row>
          <div class="padded-element">
            <router-link to="/gallery">
              <v-btn>See full gallery<v-icon class="padded-arrow">mdi-arrow-right</v-icon></v-btn>
            </router-link>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script setup lang='ts'>
import { useGalleryStore } from '../stores/GalleryStore';
import GalleryImage from '@/components/GalleryImage.vue'
import { mockGalleryData } from '@/data/MockDataGalleryImages';
import { ref } from 'vue';

const galleryStore = useGalleryStore();
const imageCount = 6;

galleryStore.upsertGalleryImages(mockGalleryData);
const galleryImages = ref(galleryStore.getLatestUploads(imageCount));
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