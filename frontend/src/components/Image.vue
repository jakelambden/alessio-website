<template>
  <v-container class="pa-0 ma-0">
    <v-img :src="props.imageAsset.uri" :lazy-src="loading" cover aspect-ratio="0.9" v-on:click="fullsceen = true">
      <v-overlay v-model="fullsceen" :opacity="100" scrim="#FFFFFF" class="align-center justify-center">
        <v-container class="image-container" v-on:click="fullsceen = false">
          <v-row align="center" class="fill-height">
            <v-col align="center" class="d-flex flex-column">
              <v-img contain :src="props.imageAsset.uri">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5">
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-container class="bg-surface">
                {{props.imageAsset.name}}
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-overlay>
      <!-- <div class="image-name">{{ props.galleryImage.name }}</div> -->
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey-lighten-5">
          </v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-container>
</template>

<script setup lang="ts">
import type { ImageAsset } from '@/stores/ImageStore';
import { ref } from 'vue';
import loading from '../assets/loading.jpg';

interface Props {
  imageAsset: ImageAsset
}

const props = defineProps<Props>();
const fullsceen = ref(false);
</script>

<style>
.image-name {
  position: absolute;
  font-size: x-small;
  bottom: 0;
  right: 0;
  background-color: #121212;
  color: white;
  font-weight: bold;
  padding: 5px 5px 0px 10px;
}

.image-container {
  width: 100vw;
  height: 100vh;
}
</style>