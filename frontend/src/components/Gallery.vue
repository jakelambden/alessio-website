<template>
  <v-container class="d-flex justify-center">
    Gallery categories
  </v-container>
  <v-expansion-panels>
    <v-expansion-panel v-for="(value, key) in imagesGroupedByCollection" :key="key" :title="(key as string)"
      text="A short description of the category here">
      <v-expansion-panel-text>
        <v-row dense>
          <v-col v-for="imageAsset in value" :key="imageAsset.uri" class="d-flex child-flex" cols="4">
            <ImageThumbnail :imageAsset="imageAsset" />
          </v-col>
        </v-row>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script setup lang='ts'>
import { useImageStore } from '../stores/ImageStore';
import ImageThumbnail from './ImageThumbnail.vue';
import { computed } from 'vue';
import { groupBy } from '@/utils/helpers';

const imageStore = useImageStore();
const imagesGroupedByCollection = computed(() => groupBy(imageStore.imagesSortedByUploaded, (value: ImageAsset) => value.collection));
</script>