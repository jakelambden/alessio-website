import { defineStore } from 'pinia';

export interface TourState {
    tours: Tour[];
}

export interface Tour {
    id: string;
    name: string;
    description: string;
    image: string;
    allDays: Date[];
    availableDays: Date[];
}

export const useTourStore = defineStore('tours', {
  state: (): TourState => ({
    tours: [
        {
            id: '12301902',
            name: 'cool fake tour 1',
            description: 'wild description 1',
            image: 'mad-image.jpg',
            allDays: [new Date(), new Date(), new Date()],
            availableDays: [new Date()],
        },
        {
            id: '5465',
            name: 'cool fake tour 2',
            description: 'wild description 2',
            image: 'wild-image.jpg',
            allDays: [new Date(), new Date()],
            availableDays: [new Date()],
        },
        {
            id: '989435',
            name: 'cool fake tour 3',
            description: 'wild description 3',
            image: 'insane-image.jpg',
            allDays: [new Date()],
            availableDays: [new Date()],
        }
    ]
  }),
  getters: {
  },
  actions: {
  }
});