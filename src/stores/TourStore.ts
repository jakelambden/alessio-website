import { defineStore } from 'pinia';

export interface TourState {
    tours: Tour[];
}

export interface Tour {
    id: string;
    name: string;
    description: string;
    image: string;
    bookings: {
        date: Date,
        available: boolean
    }[];
}

export const useTourStore = defineStore('tours', {
  state: (): TourState => ({
    tours: [
        {
            id: '12301902',
            name: 'cool fake tour 1',
            description: 'wild description 1',
            image: 'mad-image.jpg',
            bookings: [
                {
                    date: new Date(),
                    available: true
                },
                {
                    date: new Date(),
                    available: true
                },
                {
                    date: new Date(),
                    available: false
                }
            ],
        },
        {
            id: '5465',
            name: 'cool fake tour 2',
            description: 'wild description 2',
            image: 'wild-image.jpg',
            bookings: [
                {
                    date: new Date(),
                    available: true
                },
                {
                    date: new Date(),
                    available: true
                },
            ],
        },
        {
            id: '989435',
            name: 'cool fake tour 3',
            description: 'wild description 3',
            image: 'insane-image.jpg',
            bookings: [
                {
                    date: new Date(),
                    available: true
                }
            ],
        },
        {
            id: '234234',
            name: 'cool fake tour 4',
            description: 'wild description 4',
            image: 'insane-image.jpg',
            bookings: [
                {
                    date: new Date(),
                    available: false
                },
                {
                    date: new Date(),
                    available: false
                },
                {
                    date: new Date(),
                    available: false
                },
                {
                    date: new Date(),
                    available: false
                }
            ],
        },
        {
            id: '98923432423435',
            name: 'cool fake tour 5',
            description: 'wild description 5',
            image: 'insane-image.jpg',
            bookings: [
                {
                    date: new Date(),
                    available: false
                },
                {
                    date: new Date(),
                    available: true
                },
            ],
        }
    ]
  }),
  getters: {
  },
  actions: {
  }
});