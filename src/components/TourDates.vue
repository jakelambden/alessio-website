<template>
    <div id="tour-dates">
        <v-carousel show-arrows="hover" progress="primary" v-model="model" height="100%" delimiter-icon="mdi-minus" hide-delimiters>
            <template v-slot:prev="{ props }">
              <v-btn
                variant="elevated"
                color="success"
                @click="props.onClick"
              >{{tours[model].name}}</v-btn>
            </template>
            <template v-slot:next="{ props }">
              <v-btn
                variant="elevated"
                color="info"
                @click="props.onClick"
              >{{tours[model].name}}</v-btn>
            </template>
            <v-carousel-item v-for="tour in tours" :key="tour.id">
                <v-container class="d-flex flex-column align-center justify-center pa-16 fill-height bg-surface">
                    <v-spacer></v-spacer>
                    <h1 class="font-weight-black">{{ tour.name }}</h1>
                    <h2 class="font-weight-black font-italic">{{ tour.description }}</h2>
                    <v-spacer></v-spacer>
                    <h3 class="font-weight-black">Session Availability</h3>
                    <v-divider length="300"></v-divider>
                    <v-chip-group multiple>
                        <v-chip filter class="ma-2" color="white">Thursday</v-chip>
                        <v-chip filter class="ma-2" color="white">Friday</v-chip>
                        <v-chip filter class="ma-2" color="white">Saturday</v-chip>
                        <v-chip filter class="ma-2" color="white">Sunday</v-chip>
                    </v-chip-group>
                    <v-btn>Enquire now</v-btn>
                    <v-spacer></v-spacer>
                </v-container>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script setup lang = 'ts'>
import { ref } from 'vue';
import { type Tour, useTourStore } from '../stores/TourStore';
const model = ref(0);
const tourStore = useTourStore();
const tours = ref(tourStore.$state.tours);
</script>

<style>
#tour-dates {
  height: 600px;
}
</style>