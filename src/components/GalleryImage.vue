<template>
    <v-img
        :src="props.galleryImage.url"
        min-height="50"
        aspect-ratio="1"
        cover
        class="bg-grey-lighten-2"
    >
    <div class="image-name">{{ props.galleryImage.name }}</div>
        <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey-lighten-5">
            </v-progress-circular>
            </v-row>
        </template>
    </v-img>
</template>

<script setup lang="ts">
import type { GalleryImageData } from '@/stores/GalleryStore';

interface Props {
  galleryImage: GalleryImageData
}

const props = defineProps<Props>();
</script>

<style>
.image-name {
  position: absolute; 
  bottom: 0;
  right: 0;
  background-color: #121212;
  color: white;
  font-weight: bold;
  padding: 5px 5px 0px 10px;
}
</style>