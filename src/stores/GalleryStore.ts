import { defineStore } from 'pinia';

export interface GalleryState {
    gallery: Map<string, GalleryImageData>;
}

export interface GalleryImageData {
    name: string;
    description: string;
    url: string;
    uploaded: Date;
}

export type GalleryImageUpsert = { id: string } & Partial<GalleryImageData>;

export const useGalleryStore = defineStore('gallery', {
  state: (): GalleryState => ({
    gallery: new Map<string, GalleryImageData>()
  }),
  getters: {
    getLatestUploads: (state) => {
      return (imageCount: number) => Array.from(state.gallery)
        .map(([key, value]) => ({id: key, ...value}))
        .sort((a, b) => a.uploaded.getTime() - b.uploaded.getTime())
        .slice(0, imageCount);
    }
  },
  actions: {
    upsertGalleryImages(galleryImageUpserts: GalleryImageUpsert[]){
        galleryImageUpserts.forEach(galleryImageUpsert => {
          const { id, ...galleryImageData } = galleryImageUpsert;
  
          if (this.gallery.has(id)){
            this.gallery.set(id, {...this.gallery.get(id) as GalleryImageData, ...galleryImageData});
          }
          else{
            const newGalleryImage: GalleryImageData = {
                name: "",
                description: "",
                url: "",
                uploaded: new Date(),
              ...galleryImageData
            }
  
            this.gallery.set(id, newGalleryImage);
          }
        });
      },
    }
});