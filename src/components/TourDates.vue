<template>
  <v-carousel height="350" progress="primary" v-model="currentTourIndex" hide-delimiters>
      <template v-slot:prev="{ props }">
        <div class="navigation-container">
          <v-btn
            size="small"
            rounded
            variant="elevated"
            color="background"
            @click="props.onClick"
          >{{tours[prevTourIndex].name}}
          </v-btn>
        </div>
      </template>
      <template v-slot:next="{ props }">
        <div class="navigation-container">
          <v-btn style="position: absolute; bottom: 10px;"
            size="small"
            large
            rounded
            variant="elevated"
            color="background"
            @click="props.onClick"
          >{{tours[nextTourIndex].name}}
          </v-btn>
        </div>
      </template>
      <v-carousel-item v-for="tour in tours" :key="tour.id">
          <v-container class="bg-surface" style="height: 100%">
            <v-row>
              <v-col>
                <h2 class="text-center">{{ tour.name }}</h2>
                <h3 class="font-italic text-center">{{ tour.description }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h3 class="text-center">Session Availability</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-chip-group multiple column class="d-flex justify-center">
                    <v-chip v-for="(booking, index) in tour.bookings" :key="index" :disabled="booking.available" filter class="ma-2" color="white">
                      {{ booking.date.toLocaleString('en-us', {weekday:'long', month: '2-digit', year: '2-digit', timeZone: 'UTC'}) }}
                    </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
            <v-row>
              <v-col class="d-flex justify-center">
                <v-btn>Enquire now</v-btn>
              </v-col>
            </v-row>
          </v-container>
      </v-carousel-item>
  </v-carousel>
</template>

<script setup lang = 'ts'>
import { computed, ref } from 'vue';
import { type Tour, useTourStore } from '../stores/TourStore';
const tourStore = useTourStore();
const tours = ref(tourStore.$state.tours);

const currentTourIndex = ref(0);
const prevTourIndex = computed(() => ((currentTourIndex.value - 1) + tours.value.length) % tours.value.length);
const nextTourIndex = computed(() => (currentTourIndex.value + 1) % tours.value.length);
</script>

<style>
.navigation-container{
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
}
</style>