<template>
    <v-img
        id="event-image"
        :src="props.event.image"
        cover
    >
        <!-- <div class="fill-height radial-gradient" /> -->
    </v-img>
    <div id="event-content">
        <v-container class="fill-height">
            <v-row class="fill-height d-flex flex-column">
                <v-col class="d-flex flex-column" align="center">
                    <h4 class="font-italic font-weight-light">{{ location }}</h4>
                    <h5 class="font-weight-light">
                        {{ event.startDate.toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit', timeZone: 'UTC'}) }}
                        -
                        {{ event.endDate.toLocaleString('en-GB', {day: '2-digit', month: '2-digit', year: '2-digit', timeZone: 'UTC'}) }}
                    </h5>
                </v-col>
                <v-col class="d-flex flex-column" align="center">
                    <h2>{{ props.event.name }}</h2>
                    <h3 class="font-italic">{{ props.event.description }}</h3>
                </v-col>
                <v-col class="d-flex flex-column" align="center">
                    <h3>Session Availability</h3>
                    <v-chip-group multiple column class="justify-center pa-2">
                        <v-chip v-for="(booking, index) in props.event.bookings" :key="index" :disabled="booking.available" filter size="large">
                            {{ booking.date.toLocaleString('en-GB', {weekday:'short', day: '2-digit', month: '2-digit', timeZone: 'UTC'}) }}
                        </v-chip>
                    </v-chip-group>
                    <v-btn>Enquire now</v-btn>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang = 'ts'>
import type { EventData } from '@/stores/EventStore';
import { computed } from 'vue';

const location = computed(() => [props.event.country, props.event.state, props.event.city, props.event.suburb, props.event.venue].filter(Boolean).join(", "));

interface Props {
  event: EventData
}

const props = defineProps<Props>()
</script>

<style>
.radial-gradient {
background-image: radial-gradient(closest-side, rgba(18,18,18,0), rgba(18,18,18,1));
}

#event-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
}

#event-content {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
}
</style>