import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useEventStore = defineStore('events', () => {
  const events = ref<Event[]>([]);
  const eventsSortedByStartDate = computed(() => events.value.sort((a, b) => a.startDate.getTime() - b.startDate.getTime()));

  function insertEvents(eventInserts: Event[]) {
    events.value = events.value.concat(eventInserts);
  }

  return { eventsSortedByStartDate, insertEvents }
});