<template>
    <v-app class="repeating-gradient">
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
</script>

<style>
/* @import '@/assets/base.css'; */

::-webkit-scrollbar {
    display: none;
}

.v-main{
  align-self: center;
  font-family: 'Josefin Sans', san-serif;
}

.repeating-gradient {
  background-image: repeating-linear-gradient(-45deg,
                      rgba(255,255,255,0.25),
                      rgba(255,255,255,0) 5px,
                      rgba(255,255,255,0.25) 5px,
                      rgba(255,255,255,0) 10px
                    );
}
</style>