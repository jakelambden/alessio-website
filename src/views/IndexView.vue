<template>
    <Logo/>
    <AboutMe/>
    <Bio/>
    <WorkStyle/>
    <Process/>
    <LatestUploads/>
    <UpcomingEvents/>
    <Footer/>
</template>
     
<script setup lang = 'ts'>
import Logo from '@/components/Logo.vue';
import AboutMe from '@/components/AboutMe.vue';
import LatestUploads from '@/components/LatestUploads.vue';
import UpcomingEvents from '@/components/UpcomingEvents.vue';
import Bio from '../components/Bio.vue';
import WorkStyle from '../components/WorkStyle.vue';
import Process from '../components/Process.vue';
import Footer from '../components/Footer.vue'
</script>