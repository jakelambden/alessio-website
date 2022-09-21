<template>
    <v-container class="fill-height pa-0 ma-0">
        <v-fade-transition mode="out-in">
            <v-img class="align-center justify-center pa-8" :src="logoCover" cover height="100%">
                <v-img :src="logo" />
            </v-img>
        </v-fade-transition>
    </v-container>
</template>

<script setup lang ='ts'>
import logo from '../assets/logo.png';
import logoCover from '../assets/logo-cover.jpg';
</script>