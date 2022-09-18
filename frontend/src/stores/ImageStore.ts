import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useImageStore = defineStore('images', () => {
  const images = ref<ImageAsset[]>([]);
  const imagesSortedByUploaded = computed(() => images.value.sort((a, b) => a.uploadedAt.getTime() - b.uploadedAt.getTime()));

  function insertImages(imageInserts: ImageAsset[]) {
    images.value = images.value.concat(imageInserts);
  }

  return { imagesSortedByUploaded, insertImages }
});