<template>
    <v-fade-transition mode="out-in">
        <v-parallax :src="logoCover" class="logo-background justify-center align-center">
            <v-img :src="logo" class="logo-image"/>
        </v-parallax>
    </v-fade-transition>
</template>

<script setup lang ='ts'>
import logo from '../assets/logo.png';
import logoCover from '../assets/tattoo-cover.jpg';
import { onMounted, computed } from 'vue';
import { useDisplay } from 'vuetify';

// const { name, mobile } = useDisplay();

// const height = computed(() => {
//     switch (name.value) {
//         case 'xs':
//             return 220;
//         case 'sm':
//             return 400;
//         case 'md':
//             return 500;
//         case 'lg':
//             return 600;
//         case 'xl':
//             return 800;
//         case 'xxl':
//             return 1200;
//         default:
//             return 500;
//     }
// });

// onMounted(() => {
// });
</script>

<style>
.logo-background {
    height: 85vh;
}

.logo-image {
    height: 65vh;
    width: 100%;
}
</style>