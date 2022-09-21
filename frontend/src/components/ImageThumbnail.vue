<template>
  <v-img :src="props.imageAsset.uri" :lazy-src="loading" cover @click="detailedView = true">
    <v-overlay v-model="detailedView" scrim="#FFFFFF">
      <v-container class="image-container-detailed d-flex" @click="detailedView = false">
        <v-container class="pl-2 pr-2 pt-2 pb-0 bg-surface">
          <v-row no-gutters>
            <v-col class="d-flex flex-column" align="center">
              <v-img class="image-detailed" contain :src="props.imageAsset.uri">
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5">
                    </v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-container class="bg-surface">
                <h4>{{props.imageAsset.name}}</h4>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-overlay>
  </v-img>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import loading from '../assets/loading.jpg';

interface Props {
  imageAsset: ImageAsset
}

const props = defineProps<Props>();
const detailedView = ref(false);
</script>

<style>
.image-container-detailed {
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-items: center;
}

.image-detailed {
  max-height: 88vh;
}
</style>