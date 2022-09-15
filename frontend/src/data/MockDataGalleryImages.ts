import type { GalleryImageUpsert } from "@/stores/ImageStore";
import { v4 as uuid } from 'uuid';

const randomNumber = () => {
    return Math.floor(Math.random() * 100)
}

export const mockGalleryData: GalleryImageUpsert[] = [
    {
        id: uuid(),
        name: 'cool tat',
        description: 'image description 1',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2022, 8, 25)),
    },
    {
        id: uuid(),
        name: 'loooookin wild',
        description: 'image description 2',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2022, 8, 26)),
    },
    {
        id: uuid(),
        name: 'more image?',
        description: 'image description 3',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2022, 9, 11)),
    },
    {
        id: uuid(),
        name: 'such style',
        description: 'image description 4',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2022, 10, 10)),
    },
    {
        id: uuid(),
        name: 'maybe maybe',
        description: 'image description 5',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2023, 11, 1)),
    },
    {
        id: uuid(),
        name: 'icecream is good',
        description: 'image description 6',
        url: `https://picsum.photos/100/100?image=${randomNumber()}`,
        uploaded: new Date(Date.UTC(2023, 11, 5)),
    }
]