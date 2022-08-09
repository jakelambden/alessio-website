import { defineStore } from 'pinia';

export interface GalleryState {
    gallery: GalleryImage[];
}

export interface GalleryImage {
    id: string;
    name: string;
    description: string;
    url: string;
    uploaded: Date;
}

export const useGalleryStore = defineStore('gallery', {
  state: (): GalleryState => ({
    gallery: [
        {
            id: '675676',
            name: 'image 1',
            description: 'image description 1',
            url: '/src/assets/1.jpg',
            uploaded: new Date(),
        },
        {
            id: '567657',
            name: 'image 2',
            description: 'image description 2',
            url: '/src/assets/2.jpg',
            uploaded: new Date(),
        },
        {
            id: '7686876',
            name: 'image 3',
            description: 'image description 3',
            url: '/src/assets/3.jpg',
            uploaded: new Date(),
        },
        {
            id: '456456',
            name: 'image 4',
            description: 'image description 4',
            url: '/src/assets/4.jpg',
            uploaded: new Date(),
        },
        {
            id: '879879',
            name: 'image 5',
            description: 'image description 5',
            url: '/src/assets/5.jpg',
            uploaded: new Date(),
        }
    ]
  }),
  getters: {
  },
  actions: {
  }
});