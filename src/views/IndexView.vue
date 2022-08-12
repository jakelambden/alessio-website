<template>
    <!-- <v-container fluid class="d-flex flex-column bg-background"> -->
        <!-- <v-divider length="1000" color="white" /> -->
        <Logo/>
        <AboutMe/>
        <!-- <v-divider length="1000" color="white" /> -->
        <LatestUploads/>
        <!-- <v-divider length="1000" color="white" /> -->
        <TourDates/>
        <!-- <v-divider length="1000" color="white" /> -->
        <!-- <MailingList/> -->
    <!-- </v-container> -->
</template>
     
<script setup lang = 'ts'>
import Logo from '@/components/Logo.vue';
import AboutMe from '@/components/AboutMe.vue';
import LatestUploads from '@/components/LatestUploads.vue';
import TourDates from '@/components/TourDates.vue';
</script>