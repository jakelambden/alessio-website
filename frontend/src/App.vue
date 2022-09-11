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
import { useGalleryStore, type GalleryImageUpsert } from './stores/GalleryStore';
import { v4 as uuid } from 'uuid';

const galleryStore = useGalleryStore();

//Util Class?
const myHeaders = new Headers();
const myRequest = new Request('https://alessio-website-api.azurewebsites.net/api/storage/get', {
  method: 'GET',
  headers: myHeaders,
  cache: 'default',
});

interface IncomingImageData {
  name: string,
  uri: string,
  uploadedAt: Date,
}

//Util Class?
fetch(myRequest)
  .then((response) => response.json())
  .then((data: IncomingImageData[]) => {
    const galleryImages: GalleryImageUpsert[] = [];

    data.forEach(element => {
      const splitName = element.name.split('/');

      const name = (splitName.length > 1)
        ? splitName[splitName.length - 1]
        : splitName[0];

      const collection = (splitName.length > 1)
        ? splitName[splitName.length - 2]
        : '';

      const galleryData: GalleryImageUpsert = {
        id: uuid(),
        name,
        collection,
        uri: element.uri,
        uploadedAt: new Date(element.uploadedAt),
      }

      galleryImages.push(galleryData);
    });

    galleryStore.upsertGalleryImages(galleryImages);
    return;
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