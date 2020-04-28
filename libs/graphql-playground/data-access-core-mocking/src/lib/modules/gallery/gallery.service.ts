import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Gallery,
  GalleryInput
  // Post,
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import { galleries } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class GalleryService {
  private readonly galleries: any[] = galleries;

  // QUERIES ========================================================

  async findGalleryById(id: string): Promise<Gallery> {
    return this.galleries.find(gallery => gallery.id === id);
  }

  async findGalleries(): Promise<Gallery[]> {
    console.log(this.galleries);

    return this.galleries;
  }

  // MUTATIONS ========================================================

  // CREATE
  async createNewGallery(gallery: GalleryInput): Promise<Gallery> {
    const newGallery: any = {
      id: uuidv4(),
      ...gallery
    };
    console.log('New gallery created: ', { ...gallery });
    this.galleries.push(newGallery);
    return newGallery;
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
