import type { EventUpsert } from "@/stores/EventStore";
import { v4 as uuid } from 'uuid';

const randomNumber = () => {
    return Math.floor(Math.random() * 100)
}

export const mockEventsData: EventUpsert[] = [
    {
        id: uuid(),
        country: "Australia",
        state: "Victoria",
        suburb: "Richmond",
        venue: "MCG",
        name: "Cool fake Event 1",
        description: "Wild description 1",
        image: `https://picsum.photos/300/900?image=${randomNumber()}`,
        startDate: new Date(Date.UTC(2022, 8, 25)),
        endDate: new Date(Date.UTC(2022, 8, 28)),
        bookings: [
            {
                date: new Date(Date.UTC(2022, 8, 25)),
                available: true
            },
            {
                date: new Date(Date.UTC(2022, 8, 27)),
                available: true
            },
            {
                date: new Date(Date.UTC(2022, 8, 28)),
                available: false
            }
        ]
    },
    {
        id: uuid(),
        country: "USA",
        state: "California",
        venue: "Griffith Observatory",
        name: "Cool fake Event 2",
        description: "Wild description 2",
        image: `https://picsum.photos/300/900?image=${randomNumber()}`,
        startDate: new Date(Date.UTC(2022, 9, 25)),
        endDate: new Date(Date.UTC(2022, 9, 26)),
        bookings: [
            {
                date: new Date(Date.UTC(2022, 9, 25)),
                available: true
            },
            {
                date: new Date(Date.UTC(2022, 9, 26)),
                available: true
            }
        ]
    },
    {
        id: uuid(),
        country: "Australia",
        venue: "Sydney Opera House",
        name: "Cool fake Event 3",
        description: "Wild description 3",
        image: `https://picsum.photos/300/900?image=${randomNumber()}`,
        startDate: new Date(Date.UTC(2022, 10, 11)),
        endDate: new Date(Date.UTC(2022, 10, 15)),
        bookings: [
            {
                date: new Date(Date.UTC(2022, 11, 13)),
                available: true
            }
        ]
    },
    {
        id: uuid(),
        country: "Mexico",
        city: "Mexico City",
        venue: "Historic Center",
        name: "Cool fake Event 4",
        description: "Wild description 4",
        image: `https://picsum.photos/300/900?image=${randomNumber()}`,
        startDate: new Date(Date.UTC(2022, 11, 3)),
        endDate: new Date(Date.UTC(2022, 11, 11)),
        bookings: [
            {
                date: new Date(Date.UTC(2022, 11, 20)),
                available: false
            },
            {
                date: new Date(Date.UTC(2022, 11, 7)),
                available: false
            },
            {
                date: new Date(Date.UTC(2022, 11, 8)),
                available: false
            },
            {
                date: new Date(Date.UTC(2022, 11, 9)),
                available: false
            }
        ]
    },
    {
        id: uuid(),
        venue: "The Louvre",
        name: "Cool fake Event 5",
        description: "Wild description 5",
        image: `https://picsum.photos/300/900?image=${randomNumber()}`,
        startDate: new Date(Date.UTC(2023, 1, 2)),
        endDate: new Date(Date.UTC(2023, 1, 7)),
        bookings: [
            {
                date: new Date(Date.UTC(2023, 1, 4)),
                available: false
            },
            {
                date: new Date(Date.UTC(2023, 1, 5)),
                available: true
            }
        ]
    }
]