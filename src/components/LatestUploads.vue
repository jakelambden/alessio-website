<template>
    <v-container class="align-center bg-surface">
      <v-row class="pa-2">
        <v-col class="d-flex justify-center">
          <h2 class="font-weight-black">Latest Uploads</h2>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col v-for="galleryImage in galleryImages" :key="galleryImage.id" cols="6">
          <GalleryImage :galleryImage="galleryImage" />
        </v-col>
      </v-row>
      <v-row class="pa-2">
        <v-col class="d-flex justify-center">
          <router-link to="/gallery">
            <v-btn>See full gallery<v-icon class="padded-arrow">mdi-arrow-right</v-icon></v-btn>
          </router-link>
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
const imageCount = 4;

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
</style>