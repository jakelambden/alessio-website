<template>
    <div class="logo-content">
        <Logo />
    </div>
    <Summary />
    <Background />
    <AboutMe />
    <Process />
    <CurrentWork />
    <LatestUploads />
    <!-- <UpcomingEvents /> -->
    <Footer />
</template>
     
<script setup lang ='ts'>
import Logo from '@/components/Logo.vue';
import AboutMe from '@/components/AboutMe.vue';
import LatestUploads from '@/components/LatestUploads.vue';
import UpcomingEvents from '@/components/UpcomingEvents.vue';
import Background from '../components/Background.vue';
import Summary from '../components/Summary.vue';
import Process from '../components/Process.vue';
import Footer from '../components/Footer.vue'
import CurrentWork from '../components/CurrentWork.vue'
</script>

<style>
.logo-content {
    height: calc((100vh - 64px));
}
</style>