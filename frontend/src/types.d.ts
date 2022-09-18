interface Event {
    id: string,
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

interface ImageAsset {
    name: string;
    collection: string;
    uri: string;
    uploadedAt: Date;
}