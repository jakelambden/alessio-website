<template>
    <div class="index-content">
        <Logo />
    </div>
    <div class="index-content">
        <AboutMe />
    </div>
    <div class="index-content">
        <Bio />
    </div>
    <div class="index-content">
        <WorkStyle />
    </div>
    <div class="index-content">
        <Process />
    </div>
    <div class="index-content">
        <LatestUploads />
    </div>
    <div class="index-content">
        <UpcomingEvents />
    </div>
    <Footer />
</template>
     
<script setup lang ='ts'>
import Logo from '@/components/Logo.vue';
import AboutMe from '@/components/AboutMe.vue';
import LatestUploads from '@/components/LatestUploads.vue';
import UpcomingEvents from '@/components/UpcomingEvents.vue';
import Bio from '../components/Bio.vue';
import WorkStyle from '../components/WorkStyle.vue';
import Process from '../components/Process.vue';
import Footer from '../components/Footer.vue'
</script>

<style>
.index-content {
    height: calc((100vh - 64px));
}
</style>