<template>
  <v-container class="bg-surface">
    <v-row>
      <v-col>
        <h3 class="text-center">Local Events</h3>
        <v-divider/>
      </v-col>
    </v-row>
    <v-carousel progress="primary" v-model="currentTourIndex" hide-delimiters>
        <template v-slot:prev="{ props }">
          <div class="navigation-container navigation-container-left">
            <v-btn class="navigation-button"
              width="100%"
              rounded
              variant="elevated"
              color="background"
              @click="props.onClick"
            >{{tours[prevTourIndex].name}}
            </v-btn>
          </div>
        </template>
        <template v-slot:next="{ props }">
          <div class="navigation-container navigation-container-right">
            <v-btn class="navigation-button"
              width="100%"
              rounded
              variant="elevated"
              color="background"
              @click="props.onClick"
            >{{tours[nextTourIndex].name}}
            </v-btn>
          </div>
        </template>
        <v-carousel-item v-for="tour in tours" :key="tour.id">
            <v-container style="height: 100%;" class="d-flex flex-column">
              <v-spacer/>
              <v-row>
                <v-col>
                  <h2 class="text-center">{{ tour.name }}</h2>
                  <h3 class="font-italic text-center">{{ tour.description }}</h3>
                </v-col>
              </v-row>
              <v-row>
                <v-col class="d-flex flex-column justify-center">
                  <h3 class="text-center">Session Availability</h3>
                  <v-chip-group multiple column class="d-flex justify-center">
                      <v-chip v-for="(booking, index) in tour.bookings" :key="index" :disabled="booking.available" filter class="ma-2" color="white">
                        {{ booking.date.toLocaleString('en-us', {weekday:'long', month: '2-digit', year: '2-digit', timeZone: 'UTC'}) }}
                      </v-chip>
                  </v-chip-group>
                  <v-btn>Enquire now</v-btn>
                </v-col>
              </v-row>
              <v-spacer/>
            </v-container>
        </v-carousel-item>
    </v-carousel>
  </v-container>
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
.v-window__controls{
  padding: 0;
}

.navigation-container{
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 10px;
}

.navigation-container-left{
  padding-right: 5px;
}

.navigation-container-right{
  padding-left: 5px;
}

.navigation-button{
  font-size: xx-small;
}
</style>