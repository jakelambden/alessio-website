<template>
  <v-container class="d-flex justify-center">Gallery categories</v-container>
  <v-expansion-panels>
    <v-expansion-panel v-for="collection in galleryImages().entries()" :key="collection[0]" :title="collection[0]"
      text="A short description of the category here">
      <v-expansion-panel-text>
        <v-row dense>
          <v-col v-for="image in collection[1]" :key="image.id" class="d-flex child-flex" cols="4">
            <GalleryImage :galleryImage="image" />
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang='ts'>
import { useGalleryStore } from '../stores/GalleryStore';
import GalleryImage from '@/components/GalleryImage.vue';
import { computed } from 'vue';

export interface GalleryImagesReduced {
  name: string;
  uri: string;
  uploadedAt: Date;
  id: string;
}

const galleryStore = useGalleryStore();

const galleryImages = computed(() => {
  return () => {
    const newMap = new Map<string, GalleryImagesReduced[]>();

    galleryStore.getGalleryImages().forEach(galleryImage => {
      const { collection, ...values } = galleryImage;

      const collectionTitle = collection
        ? collection
        : 'Other';

      newMap.has(collectionTitle)
        ? newMap.get(collectionTitle)?.push(values)
        : newMap.set(collectionTitle, [values]);
    });

    return newMap;
  }
});
</script>