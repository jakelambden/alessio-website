import { defineStore } from 'pinia';

export interface EventState {
    events: Map<string, EventData>;
}

export interface EventData {
    country?: string,
    state?: string,
    city?: string,
    suburb?: string,
    venue: string,
    name: string;
    description: string;
    image: string;
    startDate: Date,
    endDate: Date,
    bookings: {
        date: Date,
        available: boolean
    }[];
}

export type EventUpsert = { id: string } & Partial<EventData>;

export const useEventStore = defineStore('events', {
  state: (): EventState => ({
    events: new Map<string, EventData>()
  }),
  getters: {
    getEvents: (state) => {
      return () => Array.from(state.events)
        .map(([key, value]) => ({id: key, ...value}))
        .sort((a, b) => a.startDate.getTime() - b.startDate.getTime());
    }
  },
  actions: {
    upsertEvents(eventUpserts: EventUpsert[]){
      eventUpserts.forEach(eventUpsert => {
        const { id, ...eventData } = eventUpsert;

        if (this.events.has(id)){
          this.events.set(id, {...this.events.get(id) as EventData, ...eventData});
        }
        else{
          const newEvent: EventData = {
            venue: "",
            name: "",
            description: "",
            image: "",
            startDate: new Date(),
            endDate: new Date(),
            bookings: [],
            ...eventData
          }

          this.events.set(id, newEvent);
        }
      });
    },
  }
});