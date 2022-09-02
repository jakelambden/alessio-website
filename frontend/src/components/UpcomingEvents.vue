<template>
  <v-container class="bg-surface fill-height">
    <v-row class="fill-height">
      <v-col class="d-flex flex-column justify-center" > 
        <h3 class="text-center">Events</h3>
        <v-divider/>
        <v-carousel class="fill-height" progress="primary" v-model="currentTourIndex" hide-delimiters>
          <template v-slot:prev="{ props }">
            <div class="navigation-container">
              <v-btn class="navigation-button"
                rounded
                variant="elevated"
                color="background"
                @click="props.onClick"
              >{{events[prevTourIndex].name}}
              </v-btn>
            </div>
          </template>
          <template v-slot:next="{ props }">
            <div class="navigation-container">
              <v-btn class="navigation-button"
                rounded
                variant="elevated"
                color="background"
                @click="props.onClick"
              >{{events[nextTourIndex].name}}
              </v-btn>
            </div>
          </template>
          <v-carousel-item v-for="event in events" :key="event.id">
            <UpcomingEvent :event="event"/>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang = 'ts'>
import { computed, ref } from 'vue';
import { useEventStore } from '../stores/EventStore';
import { mockEventsData } from '../data/MockDataEvents';
import UpcomingEvent from '../components/UpcomingEvent.vue'

const eventStore = useEventStore();
eventStore.upsertEvents(mockEventsData);

const events = ref(eventStore.getEvents());

const currentTourIndex = ref(0);
const prevTourIndex = computed(() => ((currentTourIndex.value - 1) + events.value.length) % events.value.length);
const nextTourIndex = computed(() => (currentTourIndex.value + 1) % events.value.length);
</script>

<style>
.v-window__controls{
  padding: 0;
}

.navigation-container{
  align-self:flex-end;
  margin-bottom: 15px;
}

.navigation-button{
  font-size: xx-small;
}
</style>