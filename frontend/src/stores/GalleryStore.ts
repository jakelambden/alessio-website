import { defineStore } from 'pinia';

export interface GalleryState {
  gallery: Map<string, GalleryImageData>;
}

export interface GalleryImageData {
  name: string;
  collection: string;
  uri: string;
  uploadedAt: Date;
}

export type GalleryImageUpsert = { id: string } & Partial<GalleryImageData>;

export const useGalleryStore = defineStore('gallery', {
  state: (): GalleryState => ({
    gallery: new Map<string, GalleryImageData>()
  }),
  getters: {
    getGalleryImages: (state) => {
      return () => Array.from(state.gallery)
        .map(([key, value]) => ({ id: key, ...value }))
        .sort((a, b) => a.uploadedAt.getTime() - b.uploadedAt.getTime())
    },
  },
  actions: {
    upsertGalleryImages(galleryImageUpserts: GalleryImageUpsert[]) {
      galleryImageUpserts.forEach(galleryImageUpsert => {
        const { id, ...galleryImageData } = galleryImageUpsert;

        if (this.gallery.has(id)) {
          this.gallery.set(id, { ...this.gallery.get(id) as GalleryImageData, ...galleryImageData });
        }
        else {
          const newGalleryImage: GalleryImageData = {
            name: "",
            collection: "",
            uri: "",
            uploadedAt: new Date(),
            ...galleryImageData
          }

          this.gallery.set(id, newGalleryImage);
        }
      });
    },
  }
});